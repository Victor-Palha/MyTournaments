import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CreateTournamentController } from './controllers/tournaments.controller';
import { CreateTournamentUseCase } from '../core/use-cases/create-tournament-use-case';
import { FetchTournamentsUseCase } from '../core/use-cases/fetch-tournaments-use-case';
import { GetTournamentByIdUseCase } from '../core/use-cases/get-tournament-by-id-use-case';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateTournamentController
  ],
  providers: [
    AppService,
    CreateTournamentUseCase,
    FetchTournamentsUseCase,
    GetTournamentByIdUseCase
  ],
  exports: []
})
export class HttpModule {}
