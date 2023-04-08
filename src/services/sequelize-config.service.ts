import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import databaseConfig from '../config/database.config';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  logger = new Logger(SequelizeConfigService.name);

  constructor(
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const { host, database } = this.dbConfig;
    this.logger.debug(`Conectado a ${host}::${database}`);

    return {
      dialect: 'postgres',
      host: this.dbConfig.host,
      port: this.dbConfig.port,
      username: this.dbConfig.username,
      password: this.dbConfig.password,
      database: this.dbConfig.database,
      autoLoadModels: true,
      synchronize: false,
      // sync: { force: true }, // 👿😈☠️☠️💀💀💀🚫🚫⛔⛔⛔⛔ only for development purposes
      sync: { alter: { drop: false } },
      logging: true,
      dialectOptions: {
        decimalNumbers: true,
      },
    };
  }
}
