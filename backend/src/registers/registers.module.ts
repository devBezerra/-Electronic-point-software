import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { RegistersController } from './registers.controller';
import { RegisterService } from './shared/register.service';

import { RegisterSchema } from './schemas/register.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema }])],
    controllers : [RegistersController],
    providers : [RegisterService]
})
export class RegistersModule {}
