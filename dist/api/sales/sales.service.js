"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sales_entity_1 = require("./sales.entity");
let SalesService = class SalesService {
    getSales(id) {
        return this.repository.findOne(id);
    }
    createSales(body) {
        const sales = new sales_entity_1.Sales();
        sales.type = body.type;
        sales.date = body.date;
        sales.product = body.product;
        sales.value = body.value;
        sales.salesperson = body.salesperson;
        return this.repository.save(sales);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(sales_entity_1.Sales),
    __metadata("design:type", typeorm_2.Repository)
], SalesService.prototype, "repository", void 0);
SalesService = __decorate([
    (0, common_1.Injectable)()
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map