import { Injectable } from '@nestjs/common';
import { Register } from './register';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('Register') private readonly registerModel: Model<Register>) {}

  async getAll() {
    return await this.registerModel.find().exec()
  }

  async getById(id: string) {
    return await this.registerModel.findById(id).exec()
  }

  async create(register: Register) {
    const createdRegister = new this.registerModel(register)
    return await createdRegister.save()
  }

  async update(id: string, register: Register) {
    await this.registerModel.updateOne({_id: id}, register).exec()
    return this.getById(id)
  }

  async delete(id: string) {
    return await this.registerModel.deleteOne({_id: id}).exec()
  }
}

