import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // import TypeOrmModule
import { TransactionType } from './transaction-type.entity';
import { TransactionTypeService } from './transaction-type.service';
import { TransactionTypeController } from './transaction-type.controller';
@Module({
  imports: [TypeOrmModule.forFeature([TransactionType])], // add TypeOrmModule to the imports array
  controllers: [TransactionTypeController],
  providers: [TransactionTypeService],
})
export class TransactionTypeModule {}