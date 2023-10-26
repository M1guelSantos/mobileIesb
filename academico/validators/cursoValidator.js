import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(5, 'Valor muito curto')
    .max(10, 'Valor muito grande')
    .required('Campo Obrigatório'),
    duracao:  Yup.number().min(1,'Valor muito pequeno'),
    modalidade: Yup.string()
  })

export default cursoValidator