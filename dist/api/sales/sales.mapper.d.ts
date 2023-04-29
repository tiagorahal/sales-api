import { Sales } from "./sales.entity";
import { CreateSalesDto } from "./sales.dto";
export declare class CreateSaleDtoToSaleMapper {
    static map(createSaleDto: CreateSalesDto): Sales;
}
