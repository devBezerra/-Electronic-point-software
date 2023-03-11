import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegistersModule } from './registers/registers.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateus:1zdk3UnEQNenziGB@cluster0.luivuuh.mongodb.net/?retryWrites=true&w=majority',
    ),
    RegistersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
