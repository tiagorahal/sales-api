import { CreateSalesDto } from "./sales.dto";
export declare class SalesService {
    private sales;
    getAllSales(): CreateSalesDto[];
    getSales(salesData: CreateSalesDto): string;
}
