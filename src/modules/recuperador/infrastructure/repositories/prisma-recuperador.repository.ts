import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../shared/database/prisma.service';
import { Recuperador } from '../../domain/recuperador.entity';
import type { RecuperadorRepository } from '../../domain/recuperador.repository';

@Injectable()
export class PrismaRecuperadorRepository implements RecuperadorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(recuperador: Recuperador): Promise<void> {
    await this.prisma.recuperador.create({
      data: {
        id: recuperador.id,
        name: recuperador.name,
        lastName: recuperador.lastName,
        dni: recuperador.dni,
        cuil: recuperador.cuil,
        birthdate: recuperador.birthdate,
        active: recuperador.active,
        createdAt: recuperador.createdAt,
        updatedAt: recuperador.updatedAt,
      },
    });
  }

  async findById(id: string): Promise<Recuperador | null> {
    const recuperador = await this.prisma.recuperador.findUnique({
      where: { id },
    });

    if (!recuperador) {
      return null;
    }

    return new Recuperador({
      id: recuperador.id,
      name: recuperador.name,
      lastName: recuperador.lastName,
      dni: recuperador.dni ?? undefined,
      cuil: recuperador.cuil ?? undefined,
      birthdate: recuperador.birthdate ?? undefined,
      active: recuperador.active,
      createdAt: recuperador.createdAt,
      updatedAt: recuperador.updatedAt,
    });
  }
}
