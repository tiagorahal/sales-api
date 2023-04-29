import { Sales } from "./sales.entity";
import { CreateSalesDto } from "./sales.dto";
export class CreateSaleDtoToSaleMapper {
  static map(createSaleDto: CreateSalesDto): Sales {
    const sale = new Sales();
    sale.type = createSaleDto.type;
    sale.date = createSaleDto.date;
    sale.product = createSaleDto.product;
    sale.value = createSaleDto.value;
    sale.salesperson = createSaleDto.salesperson;
    return sale;
  }
}
