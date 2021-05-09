import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDocument } from 'src/schemas/user.schema';

export interface UserDTO {
  email: string;
  password: number;
  name: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<userDocument>) {}

  async create(newUser: UserDTO): Promise<User> {
    const createdUser = new this.UserModel(newUser);
    return createdUser.save();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.UserModel.findOne({ email: email }).exec();
  }
}
