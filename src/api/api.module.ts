import { Module } from "@nestjs/common";
import { SalesModule } from "./sales/sales.module";
@Module({
  imports: [SalesModule],
})
export class ApiModule {}

// curl -X POST http://localhost:3005/sales/create-sales -H "Content-Type: application/json" -d '[{ "type": "1", "date": "2022-01-15T19:20:30-03:00", "product": "CURSO DE BEM-ESTAR", "value": "0000012750", "salesperson": "JOSE CARLOS" }, { "type": "2", "date": "2022-03-18T12:30:45-03:00", "product": "CURSO DE DANCA", "value": "0000025500", "salesperson": "MARCIA" }, { "type": "3", "date": "2022-03-18T12:30:45-03:00", "product": "CURSO DE IDIOMAS", "value": "0000075500", "salesperson": "JESSICA" }, { "type": "1", "date": "2022-03-22T18:15:45-03:00", "product": "CURSO DE ARTESANATO", "value": "0000051250", "salesperson": "MARIA" }]'

// curl -X GET http://localhost:3005/sales/get-sales
