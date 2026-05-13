import { ApiProperty } from '@nestjs/swagger';
import { UserPublicEntity } from '../../users/entities/user-public.entity';
export class AuthEntity {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken!: string;

  @ApiProperty({ type: UserPublicEntity })
  user!: UserPublicEntity;
}
