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
const sales_dto_1 = require("./sales.dto");
const sales_service_1 = require("./sales.service");
const transaction_type_service_1 = require("../transactionType/transaction-type.service");
let SalesController = class SalesController {
    constructor(salesService, transactionTypeService) {
        this.salesService = salesService;
        this.transactionTypeService = transactionTypeService;
    }
    getAllSales() {
        return this.salesService.getAllSales();
    }
    async postSales(salesData) {
        const newSale = new sales_dto_1.CreateSalesDto();
        newSale.type = salesData.type;
        newSale.date = salesData.date;
        newSale.product = salesData.product;
        newSale.value = salesData.value;
        newSale.salesperson = salesData.salesperson;
        const transactionType = await this.transactionTypeService.createTransactionType(salesData.type.toString(), 'transaction description', 'Income', '+');
        try {
            const result = this.salesService.getSales(newSale);
            return result;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SalesController.prototype, "getAllSales", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sales_dto_1.CreateSalesDto]),
    __metadata("design:returntype", Promise)
], SalesController.prototype, "postSales", null);
SalesController = __decorate([
    (0, common_1.Controller)('sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService,
        transaction_type_service_1.TransactionTypeService])
], SalesController);
exports.SalesController = SalesController;
//# sourceMappingURL=sales.controller.js.map