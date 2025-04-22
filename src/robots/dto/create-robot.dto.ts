import { IsInt, Min, IsNotEmpty, IsString } from 'class-validator';
export class CreateRobotDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    no:number;
    @IsString()
    name: string;
}

