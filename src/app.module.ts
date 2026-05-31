import { Module } from '@nestjs/common';
import { RecuperadorModule } from './modules/recuperador/recuperador.module';

@Module({
  imports: [RecuperadorModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
