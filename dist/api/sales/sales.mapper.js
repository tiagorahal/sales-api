"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSaleDtoToSaleMapper = void 0;
const sales_entity_1 = require("./sales.entity");
class CreateSaleDtoToSaleMapper {
    static map(createSaleDto) {
        const type = createSaleDto.type;
        const date = createSaleDto.date;
        const product = createSaleDto.product;
        const value = createSaleDto.value;
        const salesEntity = new sales_entity_1.Sales();
        salesEntity.type = type;
        salesEntity.date = date;
        salesEntity.product = product;
        salesEntity.value = value;
        return salesEntity;
    }
}
exports.CreateSaleDtoToSaleMapper = CreateSaleDtoToSaleMapper;
//# sourceMappingURL=sales.mapper.js.map