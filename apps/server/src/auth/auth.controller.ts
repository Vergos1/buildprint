//src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthEntity } from './entity/auth.entity';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  @ApiNotFoundResponse({ description: 'No user found for this email' })
  @ApiUnauthorizedResponse({ description: 'Invalid password' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}
