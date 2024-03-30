import { IsString, IsNotEmpty, IsJSON } from 'class-validator';

export class CreateDriverRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsJSON()
    position: string;


    // Add any other properties you need for creating a driver

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }
}