import { IsNotEmpty, IsString } from 'class-validator';
export class CreateSalesDto {
  @IsNotEmpty({ message: 'Type should not be empty' })
  @IsString({ message: 'Type must be a string' })
  public type: string;
  @IsNotEmpty({ message: 'Date should not be empty' })
  @IsString({ message: 'Date must be a string' })
  public date: string;
  @IsNotEmpty({ message: 'Product should not be empty' })
  @IsString({ message: 'Product must be a string' })
  public product: string;
  @IsNotEmpty({ message: 'Value should not be empty' })
  @IsString({ message: 'Value must be a string' })
  public value: string;
  @IsNotEmpty({ message: 'Salesperson should not be empty' })
  @IsString({ message: 'Salesperson must be a string' })
  public salesperson: string;
}