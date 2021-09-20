import * as yup from 'yup'

const formSchema = yup.object().shape ({
    // username: yup
    //     .string()
    //     .trim()
    //     .required('Username must be at least 3 characters')
    //     .min(3, 'Username must be at least 3 characters'),
    // password: yup
    //     .string()
    //     .trim()
    //     .required('Password must be at least 6 characters')
    //     .min(6, 'Password must be at least 6 characters'),
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