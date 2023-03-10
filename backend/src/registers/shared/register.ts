import {
  Length,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  ArrayMinSize,
  ArrayMaxSize,
  IsBoolean,
} from 'class-validator';

export class Register {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(10, 100, { message: 'Nome precisa ter entre 10 e 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @Length(10, 100, { message: 'Email precisa ter entre 10 e 100 caracteres' })
  @IsEmail({}, { message: 'Insira um email válido' })
  email: string;

  @IsNotEmpty({ message: 'CPF não pode ser vazio' })
  @Length(14, 14, { message: 'Insira um CPF válido' })
  cpf: string;

  @IsOptional()
  contact: string;

  @ArrayMinSize(1, { message: 'Insira de um a três conhecimentos' })
  @ArrayMaxSize(3, { message: 'Insira de um a três conhecimentos' })
  acquirements: [string];

  @IsBoolean()
  valid: Boolean = false;
}
