import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ROLE } from '@workspace/types/role';
import { Roles } from '../common/decorators/roles.decorator';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'User registration' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @ApiForbiddenResponse({ description: 'Forbidden: Admins only' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse({ description: 'User not found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return new UserEntity(user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse({ description: 'User not found' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse({ description: 'User not found' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.remove(id));
  }
}
