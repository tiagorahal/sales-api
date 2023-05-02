import { Controller, Logger, Post, Body, Get } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { Sales } from "./sales.entity";

@Controller("sales")
export class SalesController {
  private readonly logger = new Logger(SalesController.name);

  constructor(private readonly salesService: SalesService) {}

  @Post("create-sales")
  async createSales(
    @Body()
    sales: {
      type: string;
      date: string;
      product: string;
      value: string;
      salesperson: string;
    }[]
  ): Promise<void> {
    this.logger.log(
      `Received request to create sales: ${JSON.stringify(sales)}`
    );
    await this.salesService.saveSales(sales);
  }

  @Get("all-sales")
  async getAllSales(): Promise<Sales[]> {
    return this.salesService.getAllSales();
  }

  @Get("delete-sales")
  async deleteAllSales(): Promise<void> {
    console.log("Transactions Deleted!");
    await this.salesService.deleteAllSales();
  }

  @Get("affiliates-associates")
  async getAffiliatesAssociates(): Promise<string[]> {
    const allSales = await this.salesService.getAllSales();
    const uniqueSalespeople = Array.from(
      new Set(allSales.map((sale) => sale.salesperson))
    );
    const result = uniqueSalespeople.map((salesperson) => {
      const type1Sales = allSales.filter(
        (sale) => sale.salesperson === salesperson && sale.type === "1"
      );
      const type3Sales = allSales.filter(
        (sale) => sale.salesperson === salesperson && sale.type === "3"
      );
      let salespersonType = salesperson;

      if (type1Sales.length > 0 && type3Sales.length > 0) {
        salespersonType += ",producer";
      } else if (type1Sales.length > 0 && type3Sales.length === 0) {
        salespersonType += ",type1-only";
      } else if (type3Sales.length > 0 && type1Sales.length === 0) {
        salespersonType += ",type3-only";
      }

      return salespersonType;
    });

    return result;
  }

  @Get("profits")
  async getProfits(): Promise<{ [key: string]: number }> {
    const allSales = await this.salesService.getAllSales();

    const profits: { [key: string]: number } = {};

    for (let i = 0; i < allSales.length; i++) {
      if (profits[allSales[i].salesperson] === undefined) {
        profits[allSales[i].salesperson] = 0;
      }
    }

    for (let i = 0; i < allSales.length; i++) {
      const sale = allSales[i];
      let profit = profits[sale.salesperson];

      if (sale.type === "1" || sale.type === "2" || sale.type === "4") {
        profit += parseInt(sale.value);
      } else if (sale.type === "3") {
        profit -= parseInt(sale.value);
      }

      profits[sale.salesperson] = profit;
    }

    return profits;
  }
}
