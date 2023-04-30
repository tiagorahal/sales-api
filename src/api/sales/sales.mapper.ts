import { CreateSalesDto } from "./sales.dto";
import { Sales } from "./sales.entity";

export class CreateSaleDtoToSaleMapper {
  public static map(createSaleDto: CreateSalesDto): Sales {
    const type = createSaleDto.type;
    const date = createSaleDto.date;
    const product = createSaleDto.product;
    const value = createSaleDto.value;

    const salesEntity = new Sales();
    salesEntity.type = type;
    salesEntity.date = date;
    salesEntity.product = product;
    salesEntity.value = value;

    return salesEntity;
  }
}