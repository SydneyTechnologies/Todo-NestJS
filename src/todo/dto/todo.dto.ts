// create the user dtos in this typescript file 
import { IsString, IsInt, IsDateString, IsBoolean, IsNotEmpty, IsIn, IsOptional, IsDate, isDate, IsEmpty } from "class-validator";
import { Transform, Type} from "class-transformer";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiPropertyOptional()
    @Type(()=>Date)
    @IsDate()
    @IsOptional()
    reminder: Date

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description: string;

    @ApiPropertyOptional()
    @IsIn(['PRIORITY_1', 'PRIORITY_2', 'PRIORITY_3'])
    @IsString()
    @IsOptional()
    flag: string;


    @ApiPropertyOptional()
    @Type(()=>Boolean)
    @IsBoolean()
    @IsOptional()
    completed: boolean;


}

export class UpdateTodoDto extends CreateTodoDto{
    @ApiPropertyOptional()
    @IsOptional()
    title: string;

    @IsEmpty()
    duration_passed: any
}
