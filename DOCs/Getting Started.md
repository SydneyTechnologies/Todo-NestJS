# Prisma

1. First we set up prisma which is the ORM we will be using using the command below

   ```
   npm install Prisma --save -dev
   ```

2. Now we set up a new prisma project in the root directory of the NestJS project

   ```
   npx prisma init
   ```

3. Update the schema.prisma file and update the database to be used and the url

   ```
   datasource db {
   provider = "sqlite"
   url      = "file:./dev.db"
   }
   ```

4. Create the models for your data using the prisma syntax below shows an example of how to create models that will represent tables in your chosen database

   ```
   model User {
   id    Int     @id @default(autoincrement())
   email String  @unique
   name  String?
   posts Post[]
       }

   model Post {
   id        Int     @id @default(autoincrement())
   title     String
   content   String?
   published Boolean @default(false)
   author    User    @relation(fields: [authorId], references: [id])
   authorId  Int
   }
   ```

5. Make migrations with the command below to define the tables in the database
   ```
   npx prisma migrate dev --name init
   ```
6. Create a NestJS service to handle the connection to the database

   ```
   import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
   import { PrismaClient } from '@prisma/client';

   @Injectable()
   export class PrismaService extends PrismaClient implements OnModuleInit {
   async onModuleInit() {
      await this.$connect();
   }

   async enableShutdownHooks(app: INestApplication) {
      this.$on('beforeExit', async () => {
         await app.close();
      });
   }
   }
   ```
