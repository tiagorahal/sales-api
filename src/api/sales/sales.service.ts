import { Injectable } from "@nestjs/common";
import { CreateSalesDto } from "./sales.dto";
@Injectable()
export class SalesService {
  [x: string]: any;
  private sales: CreateSalesDto[] = [];
  public getAllSales(): CreateSalesDto[] {
    return this.sales;
  }
  public getSales(salesData: CreateSalesDto): string {
    this.sales.push(salesData);
    return "Sale created successfully!";
  }
}
