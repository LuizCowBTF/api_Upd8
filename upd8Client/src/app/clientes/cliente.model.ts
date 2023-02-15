export class Cliente {
  constructor(
    public id?: number,
    public cpf?: string,
    public nome?: string,
    public nascimento?: string,
    public sexo?: string,
    public endereco?: string,
    public cidade?: string,
    public estado?: string
  ){}
}
