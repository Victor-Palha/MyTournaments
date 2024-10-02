import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';;
import request from 'supertest';
import { MongoModule } from '../database/mongo/mongo.module';
import { CreateTournamentController } from './tournaments.controller';
import { CreateTournamentUseCase } from '../../core/use-cases/create-tournament-use-case';


describe('Create tournament controller', () => {
    let httpServer: any;
    let app: INestApplication;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [MongoModule],
            controllers: [CreateTournamentController],
            providers: [CreateTournamentUseCase],
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

        const response = await request(httpServer).post('/tournament/create').send(dataDto);
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

        const response = await request(httpServer).post('/tournament/create').send(dataDto);
        expect(response.status).toBe(400);
    });

    afterAll(async () => {
        await app.close();
    });
});
