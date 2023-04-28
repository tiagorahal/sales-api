import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TransactionTypeService } from '../transactionType/transaction-type.service'; // add this line

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [SalesService, TransactionTypeService], // add TransactionTypeService to the providers array
})
export class SalesModule {}