import { SetMetadata } from '@nestjs/common';
import { ROLE } from '@workspace/types/role';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: (typeof ROLE)[keyof typeof ROLE][]) =>
  SetMetadata(ROLES_KEY, roles);
