import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private readonly salesRepository: Repository<Sales>
  ) {}

  async saveSales(sales: { type: string, date: string, product: string, value: string, salesperson: string }[]): Promise<void> {
    await this.salesRepository.insert(sales);
  }

  async getAllSales(): Promise<Sales[]> {
    return this.salesRepository.find();
  }
}