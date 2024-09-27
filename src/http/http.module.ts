import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CreateTournamentController } from './controllers/create-tournament.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateTournamentController
  ],
  providers: [AppService],
})
export class HttpModule {}
