//src/auth/auth.service.ts
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ROUNDS_OF_HASHING } from '../common/constants/auth.constants';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { PrismaService } from './../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email: authDto.email },
    });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(
        `Користувача з поштою ${authDto.email} не знайдено`,
      );
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      authDto.password,
      user.password,
    );

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Невірний пароль');
    }

    // Step 3: Generate a JWT token containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      user: new UserEntity(user),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<AuthEntity> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Акаунт з таким email вже існує');
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      ROUNDS_OF_HASHING,
    );

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      user: new UserEntity(user),
    };
  }
}
