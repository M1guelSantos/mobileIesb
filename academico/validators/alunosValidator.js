import * as Yup from 'yup';

const alunosValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(5, 'Valor muito curto')
    .max(50, 'Valor muito grande')
    .required('Campo Obrigatório'),

    cpf: Yup.string()
    .nonNullable()
    .min(14, 'Valor muito curto')
    .required('Campo Obrigatório'),

    matricula: Yup.string()
    .nonNullable()
    .min(11,)
    .required('Campo Obrigatório'),

    email: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),

    telefone: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),

    cep: Yup.string()
    .nonNullable()
    .min(10,)
    .required('Campo Obrigatório'),

    logradouro: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),

    complemento: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),

    numero: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),

    bairro: Yup.string()
    .nonNullable()
    .required('Campo Obrigatório'),
  
  })

export default alunosValidator