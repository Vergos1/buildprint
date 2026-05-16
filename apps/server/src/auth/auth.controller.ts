//src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthEntity } from './entity/auth.entity';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Вхід користувача' })
  @ApiBody({ type: AuthDto })
  @ApiOkResponse({ type: AuthEntity })
  @ApiNotFoundResponse({ description: 'Користувача з таким email не знайдено' })
  @ApiUnauthorizedResponse({ description: 'Невірний пароль' })
  @ApiBadRequestResponse({ description: 'Невірні вхідні дані' })
  login(@Body() { email, password }: AuthDto) {
    return this.authService.login({ email, password });
  }

  @Post('register')
  @ApiOperation({ summary: 'Реєстрація користувача' })
  @ApiConflictResponse({ description: 'Користувач вже зареєстрований' })
  @ApiBadRequestResponse({ description: 'Невірні дані' })
  register(@Body() { name, email, password }: CreateUserDto) {
    return this.authService.register({ name, email, password });
  }
}
