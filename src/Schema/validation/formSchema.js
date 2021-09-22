import * as yup from 'yup'

const formSchema = yup.object().shape ({
    // Plant Form
    nickname: yup
        .string()
        .trim()
        .required('What is the name of this plant?'),
    species: yup
        .string()
        .trim()
        .required('What species is this plant?'),
    h2oFrequency: yup
        .string()
        .trim()
        .required('How often should you water this beaut?')
}
    
)

export default formSchema;