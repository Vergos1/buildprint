//src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
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
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: AuthDto })
  @ApiOkResponse({ type: AuthEntity })
  @ApiNotFoundResponse({ description: 'No user found for this email' })
  @ApiUnauthorizedResponse({ description: 'Invalid password' })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  login(@Body() { email, password }: AuthDto) {
    return this.authService.login({ email, password });
  }

  @Post('register')
  @ApiOperation({ summary: 'User registration' })
  @ApiCreatedResponse({ type: AuthEntity })
  @ApiConflictResponse({ description: 'User already registered' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  register(@Body() { name, email, password }: CreateUserDto) {
    return this.authService.register({ name, email, password });
  }
}
