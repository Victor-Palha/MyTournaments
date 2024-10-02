import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CreateTournamentController } from './controllers/tournaments.controller';
import { CreateTournamentUseCase } from 'src/core/use-cases/create-tournament-use-case';
import { FetchTournamentsUseCase } from 'src/core/use-cases/fetch-tournaments-use-case';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateTournamentController
  ],
  providers: [
    AppService,
    CreateTournamentUseCase,
    FetchTournamentsUseCase
  ],
  exports: []
})
export class HttpModule {}
