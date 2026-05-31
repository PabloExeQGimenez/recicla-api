import { Body, Controller, Post } from '@nestjs/common';
import { CreateRecuperadorUseCase } from '../application/create-recuperador.usecase';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';
import { type CreateRecuperadorDTO, createRecuperadorSchema } from '../presentation/schemas/create-recuperador.schema';

@Controller('recuperadores')
export class RecuperadorController {

  constructor(
    private readonly createRecuperadorUseCase: CreateRecuperadorUseCase
  ) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createRecuperadorSchema))
    body: CreateRecuperadorDTO,
  ) {
    return this.createRecuperadorUseCase.execute(body)
  }
}
