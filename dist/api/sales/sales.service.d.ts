import { CreateSalesDto } from "./sales.dto";
export declare class SalesService {
    [x: string]: any;
    private sales;
    getAllSales(): CreateSalesDto[];
    getSales(salesData: CreateSalesDto): string;
}
