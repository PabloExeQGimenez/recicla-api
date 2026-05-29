import { Recuperador } from '../domain/recuperador.entity';
import { RecuperadorRepository } from '../domain/recuperador.repository';

interface CreateRecuperadorDTO {
  name: string;
  lastName: string;
  dni?: string;
  cuil?: string;
  birthdate?: Date;
  active: boolean;
}

export class CreateRecuperadorUseCase {
  constructor(private readonly recuperadorRepository: RecuperadorRepository) {}

  async execute(data: CreateRecuperadorDTO): Promise<Recuperador> {
    const recuperador = new Recuperador(
      crypto.randomUUID(),
      data.name,
      data.lastName,
      data.dni,
      data.cuil,
      data.birthdate,
      true,
      new Date(),
      new Date(),
    );
    await this.recuperadorRepository.save(recuperador);
    return recuperador;
  }
}
