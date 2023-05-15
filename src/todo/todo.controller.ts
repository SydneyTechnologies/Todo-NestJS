import { Body, Controller, Get, ParseIntPipe, Post, Put, Query, Delete, Param, ParseBoolPipe, ValidationPipe} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly prisma: PrismaService){}

   
    @Get()
    async getTodos(@Query('limit', new ValidationPipe({transform: true})) limit: number = 0){
        // this endpoint is responsible for getting all the todos created 
        console.log(typeof(limit))
        if (limit !== undefined && limit > 0){
            return await this.prisma.todo.findMany({take: limit })
        }
        return await this.prisma.todo.findMany()
    }

    @Post()
    async createTodo(@Body() data: CreateTodoDto){
        return await this.prisma.todo.create({data: data});
    }

    @Put(':id')
    async UpdateTodo(@Param('id') id: string, @Body() updateData: UpdateTodoDto){
        return await this.prisma.todo.update({where: {id}, data:  updateData});
    }

    @Delete(':id')
    async DeleteTodo(@Param('id') id: string){
        await this.prisma.todo.delete({ where: {id}})
    }

    @Delete()
    async DeleteTodos(){
        await this.prisma.todo.deleteMany()
    }


}
