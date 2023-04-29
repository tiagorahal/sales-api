"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSaleDtoToSaleMapper = void 0;
const sales_entity_1 = require("./sales.entity");
class CreateSaleDtoToSaleMapper {
    static map(createSaleDto) {
        const sale = new sales_entity_1.Sales();
        sale.type = createSaleDto.type;
        sale.date = createSaleDto.date;
        sale.product = createSaleDto.product;
        sale.value = createSaleDto.value;
        sale.salesperson = createSaleDto.salesperson;
        return sale;
    }
}
exports.CreateSaleDtoToSaleMapper = CreateSaleDtoToSaleMapper;
//# sourceMappingURL=sales.mapper.js.map