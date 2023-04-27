import { CreateSalesDto } from './sales.dto';
import { Sales } from './sales.entity';
export declare class SalesService {
    private readonly repository;
    getSales(id: number): Promise<Sales>;
    createSales(sales: CreateSalesDto[]): Promise<Sales[]>;
}
