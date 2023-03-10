import { Length, IsNotEmpty, IsBoolean } from 'class-validator';

export class InitialRegister {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(10, 100, { message: 'Nome precisa ter entre 10 e 100 caracteres' })
  name: string;

  email: string = '';

  cpf: string = '';

  contact: string = '';

  acquirements: [string];

  @IsBoolean()
  valid: Boolean = false;
}
