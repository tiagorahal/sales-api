import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [SalesModule],
})
export class ApiModule {}


// EXAMPLE: curl -X POST http://localhost:3001/sales -H "Content-Type: application/json" -d '{"type": "1", "date": "2022-01-15T19:20:30-03:00", "product": "CURSO DE BEM-ESTAR", "value": "0000012750", "salesperson": "JOSE CARLOS"}'