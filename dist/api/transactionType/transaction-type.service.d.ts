import { Repository } from 'typeorm';
import { TransactionType } from './transaction-type.entity';
export declare class TransactionTypeService {
    private transactionTypeRepository;
    constructor(transactionTypeRepository: Repository<TransactionType>);
    findAll(): Promise<TransactionType[]>;
    findOne(id: number): Promise<TransactionType>;
    createTransactionType(type: string, description: string, nature: string, signal: string): Promise<any>;
    update(id: number, transactionType: TransactionType): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
