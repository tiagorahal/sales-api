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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
const sales_mapper_1 = require("./sales.mapper");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    async getAllSales() {
        return this.salesService.getAllSales();
    }
    async postSales(salesData) {
        try {
            for (const sale of salesData) {
                if (sale.type === "1") {
                    sale.type = "1,sale producer,in,+";
                }
                else if (sale.type === "2") {
                    sale.type = "2,sale affiliate,in,+";
                }
                else if (sale.type === "3") {
                    sale.type = "3,paid commission,out,-";
                }
                else if (sale.type === "4") {
                    sale.type = "4,received commission,in,+";
                }
                else {
                    throw new common_1.HttpException(`Invalid value for 'type': ${sale.type}`, common_1.HttpStatus.BAD_REQUEST);
                }
                const saleEntity = sales_mapper_1.CreateSaleDtoToSaleMapper.map(sale);
                await this.salesService.getSales(saleEntity);
            }
            return "Sales created successfully!";
        }
        catch (error) {
            throw new common_1.HttpException(`Failed to create sales: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getAllSales", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "postSales", null);
SalesController = __decorate([
    (0, common_1.Controller)("sales"),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map