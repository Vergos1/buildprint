import { ApiProperty } from '@nestjs/swagger';

export class UserPublicEntity {
  constructor(partial: Partial<UserPublicEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'user@gmail.com' })
  email!: string;

  @ApiProperty({ example: 'Ivan', nullable: true })
  nickname!: string | null;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt!: Date;
}
