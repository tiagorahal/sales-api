import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { CreateSalesDto } from "./sales.dto";
import { SalesService } from "./sales.service";
import { CreateSaleDtoToSaleMapper } from "./sales.mapper";

@Controller("sales")
export class SalesController {
  private profits: { [salesPerson: string]: number } = {};
  private salesData: CreateSalesDto[] = [];

  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getAllSales(): Promise<CreateSalesDto[]> {
    return this.salesService.getAllSales();
  }

  @Post()
  public async postSales(@Body() salesData: CreateSalesDto[]): Promise<string> {
    try {
      const salesMap: Record<string, number> = {};
      const salesArr: { salesPerson: string; value: number }[] = [];
      for (const sale of salesData) {
        const saleEntity = CreateSaleDtoToSaleMapper.map(sale);
        await this.salesService.getSales(saleEntity);

        const amount = Number(sale.value);
        if (salesMap[sale.salesperson]) {
          salesMap[sale.salesperson] += amount * (sale.type === "3" ? -1 : 1);
        } else {
          salesMap[sale.salesperson] = amount * (sale.type === "3" ? -1 : 1);
        }
      }

      for (const salesPerson in salesMap) {
        let totalValue = 0;
        for (const sale of salesData) {
          if (
            sale.salesperson === salesPerson &&
            (sale.type === "1" || sale.type === "2" || sale.type === "4")
          ) {
            totalValue += Number(sale.value);
          }
        }
        salesArr.push({
          salesPerson: salesPerson,
          value: totalValue + salesMap[salesPerson],
        });
      }

      // Add ", producer" for salespeople who appear with type 1 or 3
      for (const index in salesArr) {
        const salesPerson = salesArr[index].salesPerson;
        const type = this.salesData.find(
          (sale) => sale.salesperson === salesPerson
        )?.type;

        if (type && (type === "1" || type === "3")) {
          salesArr[index].salesPerson = `${salesPerson}, producer`;
        }
      }

      this.salesData = salesData;
      this.profits = salesMap;
      console.log(salesArr);
      return "Sales successfully added";
    } catch (error) {
      if (error?.response?.status === HttpStatus.INTERNAL_SERVER_ERROR) {
        throw new HttpException(
          "Error saving sales",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }

      throw new HttpException(
        "Error while processing sales",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get("profits")
  getProfits(): { [salesPerson: string]: number } {
    return this.profits;
  }

  @Get("salesArr")
  getSalesArr(): string[] {
    const salesArr: { salesPerson: string; value: number }[] = [];
    for (const salesPerson in this.profits) {
      salesArr.push({
        salesPerson: salesPerson,
        value: this.profits[salesPerson],
      });
    }

    // Add ", producer" for salespeople who appear with type 1 or 3
    for (const index in salesArr) {
      const salesPerson = salesArr[index].salesPerson;
      const type = this.salesData.find(
        (sale) => sale.salesperson === salesPerson
      )?.type;

      if (type && (type === "1" || type === "3")) {
        salesArr[index].salesPerson = `${salesPerson}, producer`;
      }
    }

    const salesPeople: string[] = salesArr.map((sale) => sale.salesPerson);
    console.log(salesPeople)
    return salesPeople;
  }
}
