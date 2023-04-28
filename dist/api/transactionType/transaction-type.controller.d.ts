import { TransactionTypeService } from './transaction-type.service';
import { TransactionType } from './transaction-type.entity';
export declare class TransactionTypeController {
    private transactionTypeService;
    constructor(transactionTypeService: TransactionTypeService);
    findAll(): Promise<TransactionType[]>;
    findOne(id: number): Promise<TransactionType>;
    createTransactionType(type: string, description: string, nature: string, signal: string): Promise<TransactionType>;
    update(id: number, transactionType: TransactionType): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
