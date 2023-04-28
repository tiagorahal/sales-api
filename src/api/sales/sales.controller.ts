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
@Controller("sales")
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
  @Get()
  public getAllSales(): CreateSalesDto[] {
    return this.salesService.getAllSales();
  }
  @Post()
  public postSales(@Body() salesData: CreateSalesDto): string {
    const newSale = new CreateSalesDto();
    newSale.type = salesData.type;
    newSale.date = salesData.date;
    newSale.product = salesData.product;
    newSale.value = salesData.value;
    newSale.salesperson = salesData.salesperson;
    try {
      const result = this.salesService.getSales(newSale);
      return result;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
