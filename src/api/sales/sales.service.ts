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

  public createSales(body: CreateSalesDto): Promise<Sales> {
    const sales: Sales = new Sales();

    sales.type = body.type;
    sales.date = body.date;
    sales.product = body.product;
    sales.value = body.value;
    sales.salesperson = body.salesperson;

    return this.repository.save(sales);
  }
}
