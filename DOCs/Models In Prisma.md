## Creating Models in Prisma Guide

1. String:
   - @default(value): Sets a default value for the field.
   - @unique: Ensures that values in the field are unique.
2. Int:
   - @id: Specifies that the field is the primary key of the model, uniquely identifying each record. Prisma requires each model to have at least one @id field.
   - @default(value): Sets a default value for the field.
   - @unique: Ensures that values in the field are unique.
3. Float:
   - @default(value): Sets a default value for the field.
   - @unique: Ensures that values in the field are unique.
4. Boolean:
   - @default(value): Sets a default value for the field.
5. DateTime:
   - @default(now()): Sets the default value to the current timestamp.
   - @updatedAt: Automatically updates the field with the current timestamp on every update.
6. Json:
   - No special parameters.
7. Enum:
   - @default(value): Sets a default value for the field.
   - @db.<databaseName>.<columnName>: Specifies the database-specific column name for the field.
8. Relation:

   - @relation: Defines a relationship between models. Additional parameters include:
   - fields: Specifies the fields in the current model related to the other model.
   - references: Specifies the fields in the related model.
   - onDelete: Specifies the action to take when the related record is deleted.
   - onUpdate: Specifies the action to take when the related record is updated.
   - map: Specifies the database column name for the relation.

These parameters can be added to the respective field declarations in your Prisma schema. For example, to set a default value for the name field of the User model, you can use @default("John Doe"):

```
model User {
  id   Int    @id @default(autoincrement())
  name String @default("John Doe")
}
```

Remember to run npx prisma generate after modifying the schema to update the Prisma Client with the changes.

Consult the Prisma documentation for a comprehensive reference on field types, special parameters, and other advanced features.
