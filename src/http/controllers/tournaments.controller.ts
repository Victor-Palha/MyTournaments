import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTournamentUseCase } from "../../core/use-cases/create-tournament-use-case";
import { CloseTournamentDTO, CreateTournamentDTO, FetchTournamentsDTO } from "../dto/tournaments-dto";
import { FetchTournamentsUseCase } from "../../core/use-cases/fetch-tournaments-use-case";
import { GetTournamentByIdUseCase } from "../../core/use-cases/get-tournament-by-id-use-case";
import { CloseTournamentUseCase } from "../../core/use-cases/close-tournament-use-case";


@Controller("/tournament")
export class TournamentsController {
  constructor(
    private createTournamentUseCase: CreateTournamentUseCase,
    private fetchTournamentsUseCase: FetchTournamentsUseCase,
    private getTournamentByIdUseCase: GetTournamentByIdUseCase,
    private closeTournamentUseCase: CloseTournamentUseCase
  ) {}

  @Post("/")
  public async create(@Body() body: CreateTournamentDTO){

    const {name, date, time, description, is_free, max_quorum, min_quorum, ticket} = body

    const {secret_key, tournament} = await this.createTournamentUseCase.execute({
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
        tournament_key: secret_key,
        tournament_id: tournament._id
    }
  }

  @Get("/")
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

  @Get("/:id")
  public async getTournament(@Param("id") id: string){
    if(!id){
      throw new BadRequestException("Tournament id is required")
    }
    const {tournament} = await this.getTournamentByIdUseCase.execute({id})
    return {
      message: "Tournament found",
      tournament
    }
  }

  @Patch("/:id")
  public async closeTournament(@Param("id") id: string, @Body() body: CloseTournamentDTO){
    const {key} = body

    if(!id){
      throw new BadRequestException("Tournament id are required")
    }

    await this.closeTournamentUseCase.execute({id, key})

    return {
      message: "Tournament closed successfully"
    }
  }
}