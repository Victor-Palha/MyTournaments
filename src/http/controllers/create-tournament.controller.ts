import { Body, Controller, Post } from "@nestjs/common";
import { CreateTournamentUseCase } from "../../core/use-cases/create-tournament-use-case";
import { CreateTournamentDTO } from "../dto/create-tournament-dto";


@Controller("/tournament")
export class CreateTournamentController {
  constructor(
    private createTournamentService: CreateTournamentUseCase
  ) {}

  @Post("/create")
  public async execute(@Body() body: CreateTournamentDTO){
    const {
      name,
      date,
      time,
      description,
      is_free,
      max_quorum,
      min_quorum,
      ticket
    } = body

    const {tournament, secret_key} = await this.createTournamentService.execute({
      name,
      date,
      time,
      description,
      is_free,
      max_quorum,
      min_quorum,
      ticket
    })

    return {
        message: "Tournament created successfully, here is the secret key to control the tournament",
        tournament,
        secret_key
    }
  }
}