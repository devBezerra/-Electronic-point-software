import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './shared/users/user.service';
import { User } from './shared/users/user';

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll()
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }
}
