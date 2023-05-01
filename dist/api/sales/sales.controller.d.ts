import { SalesService } from './sales.service';
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
}
