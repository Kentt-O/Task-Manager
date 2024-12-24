import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContextHost): User => {
    const requestBody = ctx.switchToHttp().getRequest();
    return requestBody.user;
  },
);
