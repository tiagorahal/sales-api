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
        this.profits = {};
        this.salesData = [];
    }
    async getAllSales() {
        return this.salesService.getAllSales();
    }
    async postSales(salesData) {
        var _a, _b;
        try {
            const salesMap = {};
            const salesArr = [];
            for (const sale of salesData) {
                const saleEntity = sales_mapper_1.CreateSaleDtoToSaleMapper.map(sale);
                await this.salesService.getSales(saleEntity);
                const amount = Number(sale.value);
                if (salesMap[sale.salesperson]) {
                    salesMap[sale.salesperson] += amount * (sale.type === "3" ? -1 : 1);
                }
                else {
                    salesMap[sale.salesperson] = amount * (sale.type === "3" ? -1 : 1);
                }
            }
            for (const salesPerson in salesMap) {
                let totalValue = 0;
                for (const sale of salesData) {
                    if (sale.salesperson === salesPerson &&
                        (sale.type === "1" || sale.type === "2" || sale.type === "4")) {
                        totalValue += Number(sale.value);
                    }
                }
                salesArr.push({
                    salesPerson: salesPerson,
                    value: totalValue + salesMap[salesPerson],
                });
            }
            for (const index in salesArr) {
                const salesPerson = salesArr[index].salesPerson;
                const type = (_a = this.salesData.find((sale) => sale.salesperson === salesPerson)) === null || _a === void 0 ? void 0 : _a.type;
                if (type && (type === "1" || type === "3")) {
                    salesArr[index].salesPerson = `${salesPerson}, producer`;
                }
            }
            this.salesData = salesData;
            this.profits = salesMap;
            console.log(salesArr);
            return "Sales successfully added";
        }
        catch (error) {
            if (((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
                throw new common_1.HttpException("Error saving sales", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            throw new common_1.HttpException("Error while processing sales", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getProfits() {
        return this.profits;
    }
    getSalesArr() {
        var _a;
        const salesArr = [];
        for (const salesPerson in this.profits) {
            salesArr.push({
                salesPerson: salesPerson,
                value: this.profits[salesPerson],
            });
        }
        for (const index in salesArr) {
            const salesPerson = salesArr[index].salesPerson;
            const type = (_a = this.salesData.find((sale) => sale.salesperson === salesPerson)) === null || _a === void 0 ? void 0 : _a.type;
            if (type && (type === "1" || type === "3")) {
                salesArr[index].salesPerson = `${salesPerson}, producer`;
            }
        }
        return salesArr;
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
__decorate([
    (0, common_1.Get)("profits"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SalesController.prototype, "getProfits", null);
__decorate([
    (0, common_1.Get)("salesArr"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SalesController.prototype, "getSalesArr", null);
SalesController = __decorate([
    (0, common_1.Controller)("sales"),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map