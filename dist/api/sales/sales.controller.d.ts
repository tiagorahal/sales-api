import { CreateSalesDto } from "./sales.dto";
import { SalesService } from "./sales.service";
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    getAllSales(): Promise<CreateSalesDto[]>;
    postSales(salesData: CreateSalesDto[]): Promise<string>;
}
