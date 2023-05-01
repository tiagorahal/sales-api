import { Controller, Logger, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  private readonly logger = new Logger(SalesController.name);

  constructor(private readonly salesService: SalesService) {}

  @Post('create-sales')
  async createSales(@Body() sales: { type: string, date: string, product: string, value: string, salesperson: string }[]): Promise<void> {
    this.logger.log(`Received request to create sales: ${JSON.stringify(sales)}`);
    await this.salesService.saveSales(sales);
  }
}