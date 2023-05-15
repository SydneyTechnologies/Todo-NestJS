// create the user dtos in this typescript file 
import { IsString, IsInt, IsDateString, IsBoolean, IsNotEmpty, IsIn, IsOptional, IsDate, isDate } from "class-validator";
import { Transform, Type} from "class-transformer";

export class CreateTodoDto{
    @IsNotEmpty()
    @IsString()
    title: string;

    @Type(()=>Date)
    @IsDate()
    @IsOptional()
    reminder: Date

    @IsString()
    @IsOptional()
    description: string;

    @IsIn(['PRIORITY_1', 'PRIORITY_2', 'PRIORITY_3'])
    @IsString()
    @IsOptional()
    flag: string;


    @Type(()=>Boolean)
    @IsBoolean()
    @IsOptional()
    completed: boolean;


}

export class UpdateTodoDto extends CreateTodoDto{
    @IsOptional()
    title: string;
}
