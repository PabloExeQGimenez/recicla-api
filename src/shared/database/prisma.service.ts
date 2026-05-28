import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  private static initialized = false;

  async onModuleInit() {
    if(!PrismaService.initialized){
      PrismaService.initialized = true;
      await this.$connect();
      console.log("Prisma conectado")
    }
  }

  async onModuleDestroy() {
      if(PrismaService.initialized){
        PrismaService.initialized = false;
        await this.$disconnect();
        console.log("Prisma desconectado");
      }
  }
}
