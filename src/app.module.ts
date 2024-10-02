import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { env } from 'process';
import { MongoModule } from './http/database/mongo/mongo.module';
import { CoreModule } from './core/core.module';
import { PersistenceModule } from './http/database/persistence.module';

@Module({
  imports: [
    PersistenceModule.register({
      type: 'mongoose',
      global: true,
    }),
    CoreModule,
  ]
})
export class AppModule {};
