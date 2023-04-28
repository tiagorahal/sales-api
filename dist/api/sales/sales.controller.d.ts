import { CreateSalesDto } from './sales.dto';
import { SalesService } from './sales.service';
import { TransactionTypeService } from '../transactionType/transaction-type.service';
export declare class SalesController {
    private readonly salesService;
    private readonly transactionTypeService;
    constructor(salesService: SalesService, transactionTypeService: TransactionTypeService);
    getAllSales(): CreateSalesDto[];
    postSales(salesData: CreateSalesDto): Promise<string>;
}
