import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';
import { TransactionType } from './transaction-type.entity';

@Controller('transaction-type')
export class TransactionTypeController {
  constructor(private transactionTypeService: TransactionTypeService) {}

  @Get()
  async findAll(): Promise<TransactionType[]> {
    return this.transactionTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TransactionType> {
    return this.transactionTypeService.findOne(id);
  }

  @Post()
  async createTransactionType(
    @Body('type') type: string,
    @Body('description') description: string,
    @Body('nature') nature: string,
    @Body('signal') signal: string,
  ): Promise<TransactionType> {
    return this.transactionTypeService.createTransactionType(type, description, nature, signal);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() transactionType: TransactionType): Promise<boolean> {
    transactionType.id = id;
    return this.transactionTypeService.update(id, transactionType);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.transactionTypeService.delete(id);
  }
}