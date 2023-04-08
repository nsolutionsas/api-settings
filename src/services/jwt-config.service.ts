import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtOptionsFactory } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
  ) {}

  createJwtOptions() {
    return {
      secret: this.config.secret,
      signOptions: {
        expiresIn: this.config.expiresIn,
      },
    };
  }
}
