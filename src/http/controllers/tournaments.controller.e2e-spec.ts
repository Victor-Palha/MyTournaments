import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';;
import request from 'supertest';
import { MongoModule } from '../database/mongo/mongo.module';
import { CreateTournamentController } from './tournaments.controller';
import { CreateTournamentUseCase } from '../../core/use-cases/create-tournament-use-case';
import { FetchTournamentsUseCase } from '../../core/use-cases/fetch-tournaments-use-case';
import { GetTournamentByIdUseCase } from '../../core/use-cases/get-tournament-by-id-use-case';


describe('Create tournament controller', () => {
    let httpServer: any;
    let app: INestApplication;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [MongoModule],
            controllers: [CreateTournamentController],
            providers: [CreateTournamentUseCase, FetchTournamentsUseCase, GetTournamentByIdUseCase],
        }).compile();

        app = moduleRef.createNestApplication();
        app.useGlobalPipes(new ValidationPipe())
        await app.init();

        httpServer = app.getHttpServer();
    });

    it('should create a new tournament', async () => {
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

        const response = await request(httpServer).post('/tournament/').send(dataDto);
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Tournament created successfully, here is the secret key to control the tournament');
    });

    it('should not be able create a new tournament with invalid fields', async () => {
        const dataDto = {
            date: new Date(),
            description: "This is a tournament",
            time: "19:00",
            min_quorum: 8,
            max_quorum: 12,
            ticket: 5,
            is_free: true,
        }

        const response = await request(httpServer).post('/tournament/').send(dataDto);
        expect(response.status).toBe(400);
    });

    it('should list all tournaments', async () => {
        const response = await request(httpServer).get('/tournament/').send({ open: true });
        expect(response.status).toBe(200);
        const { tournaments } = response.body;
        expect(tournaments.length).toBeGreaterThanOrEqual(1);
    });

    it('should get a tournament by id', async () => {
        const dataDto = {
            name: "New Era",
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

        const response = await request(httpServer).get(`/tournament/${tournament_id}`);
        expect(response.status).toBe(200);
        expect(response.body.tournament.name).toBe('New Era');
    });

    afterAll(async () => {
        await app.close();
    });
});
