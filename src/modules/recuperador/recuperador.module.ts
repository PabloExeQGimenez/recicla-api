import { Module } from '@nestjs/common';
import { RecuperadorController } from './presentation/recuperador.controller';
import { CreateRecuperadorUseCase } from './application/create-recuperador.usecase';
import { InMemoryRecuperadorRepository } from './infrastructure/repositories/in-memory-recuperador.repository';

@Module({
  controllers: [RecuperadorController],
  providers: [
    InMemoryRecuperadorRepository,
    {
      provide: 'RecuperadorRepository',
      useExisting: InMemoryRecuperadorRepository,
    },
    {
      provide: CreateRecuperadorUseCase,
      useFactory: (repository: InMemoryRecuperadorRepository) =>
        new CreateRecuperadorUseCase(repository),
      inject: [InMemoryRecuperadorRepository],
    },
  ],
})
export class RecuperadorModule {}
