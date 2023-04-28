import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { CreateSalesDto } from './sales.dto';
import { SalesService } from './sales.service';
import { TransactionTypeService } from '../transactionType/transaction-type.service';
@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
    private readonly transactionTypeService: TransactionTypeService, // add transaction type service 
  ) {}

  @Get()
  public getAllSales(): CreateSalesDto[] {
    return this.salesService.getAllSales();
  }

  @Post()
  public async postSales(@Body() salesData: CreateSalesDto): Promise<string> { // use async/await
    const newSale = new CreateSalesDto();
    newSale.type = salesData.type;
    newSale.date = salesData.date;
    newSale.product = salesData.product;
    newSale.value = salesData.value;
    newSale.salesperson = salesData.salesperson;

    // create transaction type record
    const transactionType = await this.transactionTypeService.createTransactionType(
      salesData.type.toString(), // use type from salesData
      'transaction description', // set default description as 'Sales'
      'Income', // set default nature as 'Income'
      '+', // set default signal as 1 (positive)
    );

    try {
      const result = this.salesService.getSales(newSale);
      return result;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}