import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TournamentsController } from './controllers/tournaments.controller';
import { CreateTournamentUseCase } from '../core/use-cases/create-tournament-use-case';
import { FetchTournamentsUseCase } from '../core/use-cases/fetch-tournaments-use-case';
import { GetTournamentByIdUseCase } from '../core/use-cases/get-tournament-by-id-use-case';
import { CloseTournamentUseCase } from '../core/use-cases/close-tournament-use-case';
import { PlayersController } from './controllers/players.controller';
import { CreateDeckListUseCase } from 'src/core/use-cases/create-deck-list-use-case';
import { CreateCardsUseCase } from 'src/core/use-cases/create-cards-use-case';
import { RegisterToTournamentUseCase } from 'src/core/use-cases/register-to-tournament-use-case';

@Module({
  imports: [],
  controllers: [
    AppController,
    TournamentsController,
    PlayersController
  ],
  providers: [
    AppService,
    CreateTournamentUseCase,
    FetchTournamentsUseCase,
    GetTournamentByIdUseCase,
    CloseTournamentUseCase,
    CreateDeckListUseCase,
    CreateCardsUseCase,
    RegisterToTournamentUseCase
  ],
  exports: []
})
export class HttpModule {}
