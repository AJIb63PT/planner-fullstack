import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class PomodoroSessionDto {
  @IsOptional()
  @IsBoolean()
  isDone: boolean;
}

export class PomodoroRoundDto {
  @IsNumber()
  totalSeconds: number;

  @IsOptional()
  @IsBoolean()
  isDone: boolean;
}
