import { IsString, IsNotEmpty, IsBoolean, MinLength, MaxLength } from 'class-validator';

export class CreateScreenshotDto {
  @IsString()
  @IsNotEmpty()
  public os: string;

  @IsString()
  @IsNotEmpty()
  public device_name: string;

  @IsString()
  @IsNotEmpty()
  public mac_address: string;

  @IsString()
  @IsNotEmpty()
  public imei: string;

  @IsString()
  @IsNotEmpty()
  public location: string;

  @IsString()
  @IsNotEmpty()
  public public_ip_address: string;

  @IsBoolean()
  @IsNotEmpty()
  public status: boolean;
}
