import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';;
import request from 'supertest';
import { MongoModule } from '../database/mongo/mongo.module';
import { CreateTournamentController } from './create-tournament.controller';
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
        await app.init();

        httpServer = app.getHttpServer();
    });

    it('should return the tournament', async () => {
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
        console.log(response.body);
        // expect(response.name).toBe('Tournament New Era');
    });

    afterAll(async () => {
        await app.close();
    });
});
