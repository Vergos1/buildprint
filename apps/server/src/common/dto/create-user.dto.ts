import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: "Ім'я має бути рядком" })
  @IsNotEmpty({ message: "Ім'я не може бути порожнім" })
  @ApiProperty({ example: 'Іван' })
  name!: string;

  @IsEmail({}, { message: 'Невірний формат email' })
  @IsNotEmpty({ message: 'Email не може бути порожнім' })
  @ApiProperty({ example: 'user@gmail.com' })
  email!: string;

  @IsString({ message: 'Пароль має бути рядком' })
  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  @MinLength(6, { message: 'Пароль має містити мінімум 6 символів' })
  @ApiProperty({ example: '123456', minLength: 6 })
  password!: string;
}
