import { Injectable } from "@nestjs/common";
import { CreateSalesDto } from "./sales.dto";
@Injectable()
export class SalesService {
  private sales: CreateSalesDto[] = [];
  public getAllSales(): CreateSalesDto[] {
    return this.sales;
  }
  public getSales(salesData: CreateSalesDto): string {
    this.sales.push(salesData);
    return "Sale created successfully!";
  }
}
