import { CreateSalesDto } from "./sales.dto";
import { Sales } from "./sales.entity";
export declare class CreateSaleDtoToSaleMapper {
    static map(createSaleDto: CreateSalesDto): Sales;
}
