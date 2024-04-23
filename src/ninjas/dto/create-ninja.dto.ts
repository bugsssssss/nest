import { IsEnum, Length, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(10)
    name: string;

    @IsEnum(['stars', 'nunchaks'], {message: "Use correct weapon"})
    weapon: "stars" | "nunchaks";
}
