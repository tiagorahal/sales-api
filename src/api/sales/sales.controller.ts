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
}
