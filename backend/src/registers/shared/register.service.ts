import { Injectable } from '@nestjs/common';
import { Register } from './register';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('Register') private readonly registerModel: Model<Register>,
  ) {}

  async getAll() {
    return await this.registerModel.find().exec();
  }

  async getById(_id: string) {
    return await this.registerModel.findById(_id).exec();
  }

  async create(register: Register) {
    const createdRegister = new this.registerModel(register);
    return await createdRegister.save();
  }

  async update(_id: string, register: Register) {
    await this.registerModel.updateOne({ _id: _id }, register).exec();
    return this.getById(_id);
  }

  async updateValid(_id: string, any: any) {
    await this.registerModel.updateOne({_id:_id}, any).exec();
    return this.getById(_id);
  }

  async delete(_id: string) {
    return await this.registerModel.deleteOne({ _id: _id }).exec();
  }
}
