import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from '../../common/dto/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
