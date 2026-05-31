import { Recuperador } from '../domain/recuperador.entity';
import { RecuperadorRepository } from '../domain/recuperador.repository';
import type { CreateRecuperadorDTO } from '../presentation/schemas/create-recuperador.schema';

export class CreateRecuperadorUseCase {
  constructor(private readonly recuperadorRepository: RecuperadorRepository) {}

  async execute(data: CreateRecuperadorDTO): Promise<Recuperador> {
    const recuperador = new Recuperador({
      id: crypto.randomUUID(),
      name: data.name,
      lastName: data.lastName,
      dni: data.dni,
      cuil: data.cuil,
      birthdate: data.birthdate,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.recuperadorRepository.save(recuperador);
    return recuperador;
  }
}
