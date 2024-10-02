import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CreateTournamentController } from './controllers/tournaments.controller';
import { CreateTournamentUseCase } from 'src/core/use-cases/create-tournament-use-case';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateTournamentController
  ],
  providers: [
    AppService,
    CreateTournamentUseCase
  ],
  exports: []
})
export class HttpModule {}
