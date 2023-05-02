import { Repository } from "typeorm";
import { Sales } from "./sales.entity";
export declare class SalesService {
    private readonly salesRepository;
    constructor(salesRepository: Repository<Sales>);
    saveSales(sales: {
        type: string;
        date: string;
        product: string;
        value: string;
        salesperson: string;
    }[]): Promise<void>;
    getAllSales(): Promise<Sales[]>;
    deleteAllSales(): Promise<void>;
}
