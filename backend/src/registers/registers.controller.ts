import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { RegisterService } from './shared/register.service';
import { InitialRegister } from './shared/initial-register';
import { Register } from './shared/register';

@Controller('registers')
export class RegistersController {
  constructor(private registerService: RegisterService) {}

  @Get()
  async getAll(): Promise<Register[]> {
    return this.registerService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.registerService.getById(id);
  }

  @Post()
  async create(@Body() register: InitialRegister): Promise<InitialRegister> {
    return this.registerService.create(register);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() register: Register,
  ): Promise<Register> {
    return this.registerService.update(id, register);
  }

  @Patch(':id')
  async updateValid(@Param('id') id: string, @Body() value: any): Promise<any> {
    return this.registerService.updateValid(id, value);
  }
}
