import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
