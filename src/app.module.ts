import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: () => {
        return env;
      }
    }),
    MongooseModule.forRoot(env.MONGO_URI),
    HttpModule
  ]
})
export class AppModule {};
