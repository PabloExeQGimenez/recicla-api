import { Recuperador } from '../../domain/recuperador.entity';
import { RecuperadorRepository } from '../../domain/recuperador.repository';

export class InMemoryRecuperadorRepository implements RecuperadorRepository {
  private recuperadores: Recuperador[] = [];

  async save(recuperador: Recuperador): Promise<void> {
    this.recuperadores.push(recuperador);
  }

  async findById(id: string): Promise<Recuperador | null> {
    return this.recuperadores.find((r) => r.id === id) ?? null;
  }
}
