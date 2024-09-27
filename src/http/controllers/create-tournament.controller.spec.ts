import { Test, TestingModule } from '@nestjs/testing';;
import { CreateTournamentController } from './create-tournament.controller';

describe('Create tournament controller', () => {
    let appController: CreateTournamentController;

    beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        controllers: [CreateTournamentController],
        providers: [],
    }).compile();

    appController = app.get<CreateTournamentController>(CreateTournamentController);
    });


    it('should return the tournament', async () => {
        const {data} = await appController.execute({
            name: "Tournament New Era",
            date: new Date(),
            description: "This is a tournament",
            time: "19:00",
            min_quorum: 8,
            max_quorum: 12,
            ticket: 5,
            is_free: false,
        });

        expect(data.name).toBe('Tournament New Era');
    });


});
