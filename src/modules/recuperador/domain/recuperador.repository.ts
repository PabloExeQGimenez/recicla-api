import { Recuperador } from './recuperador.entity';

export interface RecuperadorRepository {
  findById(id: string): Promise<Recuperador | null>;
  save(recuperador: Recuperador): Promise<void>;
}
