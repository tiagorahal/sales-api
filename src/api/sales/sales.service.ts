import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalesDto } from './sales.dto';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService {
  @InjectRepository(Sales)
  private readonly repository: Repository<Sales>;

  public getSales(id: number): Promise<Sales> {
    return this.repository.findOne(id);
  }

  public async createSales(sales: CreateSalesDto[]): Promise<Sales[]> {
    const createdSales: Sales[] = [];
    for (const sale of sales) {
      const newSale: Sales = new Sales();
      newSale.type = sale.type;
      newSale.date = sale.date;
      newSale.product = sale.product;
      newSale.value = sale.value;
      newSale.salesperson = sale.salesperson;
      const savedSale: Sales = await this.repository.save(newSale);
      createdSales.push(savedSale);
    }
    return createdSales;
}
}
