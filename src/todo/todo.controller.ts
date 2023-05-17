import { Body, Controller, Get, ParseIntPipe, Post, Put, Query, Delete, Param, ParseBoolPipe, ValidationPipe} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { ApiQuery, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('todo')
@ApiTags("Todo Endpoints")
export class TodoController {
    constructor(private readonly prisma: PrismaService){}

  

    @Get()
    @ApiOperation({summary: "Get all the Todos"})
    @ApiQuery({
        name: "limit",
        type: Number,
        description: "It has an optional parameter called limit to paginate the response",
        required: false
    })
    async getTodos(@Query('limit') limit?: number){
        // this endpoint is responsible for getting all the todos created 
        if (limit !== undefined && limit > 0){
            return await this.prisma.todo.findMany({take: limit })
        }
        return await this.prisma.todo.findMany()
    }


    @Post()
    @ApiOperation({summary: "Create a new Todo"})
    async createTodo(@Body() data: CreateTodoDto){
        return await this.prisma.todo.create({data: data});
    }


    
    @Put(':id')
    @ApiOperation({summary: "Update a Todo"})
    @ApiParam({
        name:"id",
        type: String,
        description: "The id of the specific Todo you wish to update"
    })
    async UpdateTodo(@Param('id') id: string, @Body() updateData: UpdateTodoDto){
        return await this.prisma.todo.update({where: {id}, data:  updateData});
    }


    
    @Delete(':id')
    @ApiOperation({summary: "Delete a Todo"})
    @ApiParam({
        name:"id",
        type: String,
        description: "The id of the specific Todo you wish to delete"
    })
    async DeleteTodo(@Param('id') id: string){
        await this.prisma.todo.delete({ where: {id}})
    }


    @Delete()
    @ApiOperation({summary: "Delete all Todos"})
    async DeleteTodos(){
        await this.prisma.todo.deleteMany()
    }


}
