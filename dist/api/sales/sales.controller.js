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
var SalesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
let SalesController = SalesController_1 = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
        this.logger = new common_1.Logger(SalesController_1.name);
    }
    async createSales(sales) {
        this.logger.log(`Received request to create sales: ${JSON.stringify(sales)}`);
        await this.salesService.saveSales(sales);
    }
    async getAllSales() {
        return this.salesService.getAllSales();
    }
    async deleteAllSales() {
        console.log("Transactions Deleted!");
        await this.salesService.deleteAllSales();
    }
    async getAffiliatesAssociates() {
        const allSales = await this.salesService.getAllSales();
        const uniqueSalespeople = Array.from(new Set(allSales.map((sale) => sale.salesperson)));
        const result = uniqueSalespeople.map((salesperson) => {
            const type1Sales = allSales.filter((sale) => sale.salesperson === salesperson && sale.type === "1");
            const type3Sales = allSales.filter((sale) => sale.salesperson === salesperson && sale.type === "3");
            let salespersonType = salesperson;
            if (type1Sales.length > 0 && type3Sales.length > 0) {
                salespersonType += ",producer";
            }
            else if (type1Sales.length > 0 && type3Sales.length === 0) {
                salespersonType += ",type1-only";
            }
            else if (type3Sales.length > 0 && type1Sales.length === 0) {
                salespersonType += ",type3-only";
            }
            return salespersonType;
        });
        return result;
    }
};
__decorate([
    (0, common_1.Post)("create-sales"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "createSales", null);
__decorate([
    (0, common_1.Get)("all-sales"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getAllSales", null);
__decorate([
    (0, common_1.Get)("delete-sales"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "deleteAllSales", null);
__decorate([
    (0, common_1.Get)("affiliates-associates"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "getAffiliatesAssociates", null);
SalesController = SalesController_1 = __decorate([
    (0, common_1.Controller)("sales"),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map