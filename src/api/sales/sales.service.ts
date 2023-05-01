import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private readonly salesRepository: Repository<Sales>,
  ) {}

  async saveSales(
    sales: {
      type: string;
      date: string;
      product: string;
      value: string;
      salesperson: string;
    }[],
  ): Promise<void> {
    await this.salesRepository.save(sales);
  }

  async getAllSales(): Promise<Sales[]> {
    return this.salesRepository.find();
  }

  async deleteAllSales(): Promise<void> {
    await this.salesRepository.delete({});
  }
}