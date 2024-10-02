import { Module } from '@nestjs/common';
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
