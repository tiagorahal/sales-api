import { SalesService } from "./sales.service";
import { Sales } from "./sales.entity";
export declare class SalesController {
    private readonly salesService;
    private readonly logger;
    constructor(salesService: SalesService);
    createSales(sales: {
        type: string;
        date: string;
        product: string;
        value: string;
        salesperson: string;
    }[]): Promise<void>;
    getAllSales(): Promise<Sales[]>;
    deleteAllSales(): Promise<void>;
    getAffiliatesAssociates(): Promise<string[]>;
    getProfits(): Promise<{
        [key: string]: number;
    }>;
}
