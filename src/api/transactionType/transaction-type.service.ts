import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionType } from './transaction-type.entity';

@Injectable()
export class TransactionTypeService {
  constructor(
    @InjectRepository(TransactionType)
    private transactionTypeRepository: Repository<TransactionType>,
  ) {}

  async findAll(): Promise<TransactionType[]> {
    return await this.transactionTypeRepository.find();
  }

  async findOne(id: number): Promise<TransactionType> {
    return await this.transactionTypeRepository.findOne(id);
  }

  async createTransactionType(
    type: string,
    description: string,
    nature: string,
    signal: string,
  ): Promise<any> {
    const newTransactionType = new TransactionType();
    newTransactionType.type = type;

    // create new transaction type record
    await this.transactionTypeRepository.save(newTransactionType);

    // check and update transaction type record
    if (newTransactionType.type == '1') {
      newTransactionType.description = 'Sale Producer';
      newTransactionType.nature = 'in';
      newTransactionType.signal = '+';
    } else if (newTransactionType.type == '2') {
      newTransactionType.description = 'Affiliate Sale';
      newTransactionType.nature = 'in';
      newTransactionType.signal = '+';
    } else if (newTransactionType.type == '3') {
      newTransactionType.description = 'Commission Paid';
      newTransactionType.nature = 'out';
      newTransactionType.signal = '-';
    } else if (newTransactionType.type == '4') {
      newTransactionType.description = 'Commission Received';
      newTransactionType.nature = 'in';
      newTransactionType.signal = '-';
    } 

    return await this.transactionTypeRepository.save(newTransactionType);
  }

  async update(id: number, transactionType: TransactionType): Promise<boolean> {
    transactionType.id = id;
    await this.transactionTypeRepository.update(id, transactionType);
    return true;
  }

  async delete(id: number): Promise<boolean> {
    await this.transactionTypeRepository.delete(id);
    return true;
  }
}