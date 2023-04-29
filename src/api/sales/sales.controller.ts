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
  constructor(private readonly salesService: SalesService) {}
  @Get()
  async getAllSales(): Promise<CreateSalesDto[]> {
    return this.salesService.getAllSales();
  }
  @Post()
  public async postSales(@Body() salesData: CreateSalesDto[]): Promise<string> {
    try {
      for (const sale of salesData) {
        if (sale.type === "1") {
          sale.type = "1,sale producer,in,+";
        } else if (sale.type === "2") {
          sale.type = "2,sale affiliate,in,+";
        } else if (sale.type === "3") {
          sale.type = "3,paid commission,out,-";
        } else if (sale.type === "4") {
          sale.type = "4,received commission,in,+";
        } else {
          throw new HttpException(
            `Invalid value for 'type': ${sale.type}`,
            HttpStatus.BAD_REQUEST,
          );
        }
        const saleEntity = CreateSaleDtoToSaleMapper.map(sale);
        await this.salesService.getSales(saleEntity); // or your preferred way to save data to the database
      }
      return "Sales created successfully!";
    } catch (error) {
      throw new HttpException(
        `Failed to create sales: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
