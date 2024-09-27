import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation.pipe";

const tournamentSchema = z.object({
    name: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    description: z.string(),
    min_quorum: z.number(),
    max_quorum: z.number(),
    ticket: z.number(),
    is_free: z.boolean()
})

type TournamentDTO = z.infer<typeof tournamentSchema> 

@Controller("/tournament")
export class CreateTournamentController {
  constructor() {}

  @Post("/create")
  @UsePipes(new ZodValidationPipe(tournamentSchema))
  public async execute(@Body() tournament: TournamentDTO){
    return {
        message: "Tournament created successfully",
        data: tournament
    }
  }
}