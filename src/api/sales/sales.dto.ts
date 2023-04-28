import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateSalesDto {
  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public date: Date;

  @IsNotEmpty()
  @IsString()
  public product: string;

  @IsNotEmpty()
  @IsString()
  public value: number;

  @IsNotEmpty()
  @IsString()
  public salesperson: string;
}