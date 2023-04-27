import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSalesDto {
  @IsString()
  public date: string;
  @IsString()
  public product: string;
  @IsString()
  public value: string;
  @IsString()
  public salesperson: string;
  @IsString()
  @IsNotEmpty()
  public type: string;
}
