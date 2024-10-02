import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTournamentUseCase } from "../../core/use-cases/create-tournament-use-case";
import { CreateTournamentDTO, FetchTournamentsDTO } from "../dto/tournaments-dto";
import { FetchTournamentsUseCase } from "src/core/use-cases/fetch-tournaments-use-case";


@Controller("/tournament")
export class CreateTournamentController {
  constructor(
    private createTournamentService: CreateTournamentUseCase,
    private fetchTournamentsUseCase: FetchTournamentsUseCase
  ) {}

  @Post("/create")
  public async create(@Body() body: CreateTournamentDTO){

    const {name, date, time, description, is_free, max_quorum, min_quorum, ticket} = body

    const {secret_key} = await this.createTournamentService.execute({
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
        tournament_key: secret_key
    }
  }

  @Get("/list")
  public async list(@Body() body: FetchTournamentsDTO){
    let {open} = body

    if(open === undefined){
      open = true
    }

    const {tournaments} = await this.fetchTournamentsUseCase.execute({open})

    return {
      tournaments
    }
  }
}