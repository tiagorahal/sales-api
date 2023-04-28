"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_type_entity_1 = require("./transaction-type.entity");
const transaction_type_service_1 = require("./transaction-type.service");
const transaction_type_controller_1 = require("./transaction-type.controller");
let TransactionTypeModule = class TransactionTypeModule {
};
TransactionTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_type_entity_1.TransactionType])],
        controllers: [transaction_type_controller_1.TransactionTypeController],
        providers: [transaction_type_service_1.TransactionTypeService],
    })
], TransactionTypeModule);
exports.TransactionTypeModule = TransactionTypeModule;
//# sourceMappingURL=transaction-type.module.js.map