import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateSalesDto } from './sales.dto';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  @Inject(SalesService)
  private readonly service: SalesService;

  @Get(':id')
  public getSales(@Param('id', ParseIntPipe) id: number): Promise<Sales> {
    return this.service.getSales(id);
  }

  @Post()
  async create(@Body() body: CreateSalesDto): Promise<Sales[]> {
    const salesItems = Array.isArray(body) ? body : [body];
    const createSalesPromises = salesItems.map((salesItem) => {
      return this.service.createSales(salesItem);
    });
    const resolvedSalesArrays = await Promise.all(createSalesPromises);
    const resolvedSales = resolvedSalesArrays.flat(); // Flatten array of arrays
    return resolvedSales;
  }
}
