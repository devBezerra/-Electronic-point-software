import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    return await this.userModel.find().exec()
  }

  async create(user: User) {
    const createdUser = new this.userModel(user)
    return await createdUser.save()
  }
}
