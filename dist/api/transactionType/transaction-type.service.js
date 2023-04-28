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
exports.TransactionTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_type_entity_1 = require("./transaction-type.entity");
let TransactionTypeService = class TransactionTypeService {
    constructor(transactionTypeRepository) {
        this.transactionTypeRepository = transactionTypeRepository;
    }
    async findAll() {
        return await this.transactionTypeRepository.find();
    }
    async findOne(id) {
        return await this.transactionTypeRepository.findOne(id);
    }
    async createTransactionType(type, description, nature, signal) {
        const newTransactionType = new transaction_type_entity_1.TransactionType();
        newTransactionType.type = type;
        await this.transactionTypeRepository.save(newTransactionType);
        if (newTransactionType.type == '1') {
            newTransactionType.description = 'Sale Producer';
            newTransactionType.nature = 'in';
            newTransactionType.signal = '+';
        }
        else if (newTransactionType.type == '2') {
            newTransactionType.description = 'Affiliate Sale';
            newTransactionType.nature = 'in';
            newTransactionType.signal = '+';
        }
        else if (newTransactionType.type == '3') {
            newTransactionType.description = 'Commission Paid';
            newTransactionType.nature = 'out';
            newTransactionType.signal = '-';
        }
        else if (newTransactionType.type == '4') {
            newTransactionType.description = 'Commission Received';
            newTransactionType.nature = 'in';
            newTransactionType.signal = '-';
        }
        return await this.transactionTypeRepository.save(newTransactionType);
    }
    async update(id, transactionType) {
        transactionType.id = id;
        await this.transactionTypeRepository.update(id, transactionType);
        return true;
    }
    async delete(id) {
        await this.transactionTypeRepository.delete(id);
        return true;
    }
};
TransactionTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_type_entity_1.TransactionType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionTypeService);
exports.TransactionTypeService = TransactionTypeService;
//# sourceMappingURL=transaction-type.service.js.map