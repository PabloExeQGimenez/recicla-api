import { Recuperador } from './recuperador.entity';

export const RECUPERADOR_REPOSITORY = Symbol(
  'RECUPERADOR_REPOSITORY'
);

export interface RecuperadorRepository {
  findById(id: string): Promise<Recuperador | null>;
  save(recuperador: Recuperador): Promise<void>;
}
