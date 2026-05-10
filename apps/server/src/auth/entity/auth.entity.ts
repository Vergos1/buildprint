import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';

export class AuthEntity {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken!: string;

  @ApiProperty({ type: UserEntity })
  user!: UserEntity;
}
