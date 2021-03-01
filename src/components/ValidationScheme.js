import * as yup from 'yup';

//setting yup's validation requirements

export const validation  = yup.object({
        firstName: yup.string()
        .max(12, 'Must be 12 charachters or less')
        .required('Required'),
        
        lastName: yup.string()
        .max(16, 'Must be 16 charachters or less')
        .required('Required'),
        
        birthDate: yup.string()
        .required('Required'),
        
        city: yup.string()
        .max(15, 'Must be 15 charachters or less')
        .required('Required'),
        
        adress: yup.string()
        .max(75, 'Must be 75 charachters or less')
        .required('Required'),
        
        mobileNumber: yup.number()
        .typeError("Can contain only digits")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('A phone number is required'),
        
        userName: yup.string()
        .max(11, 'Must be 11 charachters or less')
        .required('Required'),
       
        email: yup.string()
        .email('This Email is not valid')
        .required('A valid email is required'),
       
        password: yup.string()
        .min(6, 'Password must include more than 6 characters')
        .required('Password is required'),
       
        confirmPassword: yup.string()
        .oneOf([yup.ref('password'),null], 'Password must match')
        .required('Confirmed password is required'),

        gender: yup.string()
        .required('Gender is required'),
        
        message: yup.string()
        .max(200, 'Must be 200 charachters or less') 
    })  
    

