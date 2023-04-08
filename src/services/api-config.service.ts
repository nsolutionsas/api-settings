import { Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from '../config/database.config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  getDatabaseConfig(): ConfigType<typeof databaseConfig> {
    return this.configService.getOrThrow('database');
  }
}
