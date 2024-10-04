import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';;
import request from 'supertest';
import { MongoModule } from '../database/mongo/mongo.module';
import { TournamentsController } from './tournaments.controller';
import { CreateTournamentUseCase } from '../../core/use-cases/create-tournament-use-case';
import { FetchTournamentsUseCase } from '../../core/use-cases/fetch-tournaments-use-case';
import { GetTournamentByIdUseCase } from '../../core/use-cases/get-tournament-by-id-use-case';
import { CloseTournamentUseCase } from '../../core/use-cases/close-tournament-use-case';
import { PlayersController } from './players.controller';
import { RegisterToTournamentUseCase } from '../../core/use-cases/register-to-tournament-use-case';
import { CreateCardsUseCase } from '../../core/use-cases/create-cards-use-case';
import { CreateDeckListUseCase } from '../../core/use-cases/create-deck-list-use-case';
import { extraDeckInformation, mainDeckInformation, sideDeckInformation } from '../../core/use-cases/helpers/create-deck-list-helper';


describe('Create tournament controller', () => {
    let httpServer: any;
    let app: INestApplication;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [MongoModule],
            controllers: [TournamentsController, PlayersController],
            providers: [
                CreateTournamentUseCase, 
                FetchTournamentsUseCase, 
                GetTournamentByIdUseCase, 
                CloseTournamentUseCase,
                CreateDeckListUseCase,
                CreateCardsUseCase,
                RegisterToTournamentUseCase
            ],
        }).compile();

        app = moduleRef.createNestApplication();
        app.useGlobalPipes(new ValidationPipe())
        await app.init();

        httpServer = app.getHttpServer();
    });

    it('should be able to register a player to a tournament', async () => {
        const dataDto = {
            name: "Tournament New Era",
            date: new Date(),
            description: "This is a tournament",
            time: "19:00",
            min_quorum: 8,
            max_quorum: 12,
            ticket: 5,
            is_free: false,
        }

        const tournamentCreated = await request(httpServer).post('/tournament/').send(dataDto);
        expect(tournamentCreated.status).toBe(201);
        const { tournament_id } = tournamentCreated.body;    
        
        const response = await request(httpServer).post(`/player/${tournament_id}`).send({
            deck_name: "Memeghoul",
            player_name: "Ash",
            main_deck: mainDeckInformation,
            extra_deck: extraDeckInformation,
            side_deck: sideDeckInformation
        })

        // console.log(response.body)
        expect(response.status).toBe(201)
    });

    afterAll(async () => {
        await app.close();
    });
});
