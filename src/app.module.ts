import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { env } from 'process';
import { MongoModule } from './http/database/mongo/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: () => {
        return env;
      }
    }),
    MongoModule,
    HttpModule
  ]
})
export class AppModule {};
