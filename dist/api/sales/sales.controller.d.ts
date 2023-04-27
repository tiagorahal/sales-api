import { CreateSalesDto } from './sales.dto';
import { Sales } from './sales.entity';
export declare class SalesController {
    private readonly service;
    getSales(id: number): Promise<Sales>;
    create(body: CreateSalesDto): Promise<Sales[]>;
}
