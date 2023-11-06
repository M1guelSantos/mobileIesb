import * as Yup from 'yup';

const disciplinaValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(5, 'Valor muito curto')
    .max(50, 'Valor muito grande')
    .required('Campo Obrigatório'),
})

export default disciplinaValidator