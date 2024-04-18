// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('username is required!')
        .min(3, 'username must be 3 characters long!'),
    email: yup
        .string()
        .email('must ve a vail email address')
        .required('you must have an email'),
    role: yup
        .string()
        .oneOf(['instructor', 'student', 'alumni'], 'Role is required!'),
    civil: yup
        .string()
        .oneOf(['married', 'single'], 'Civil status is required!'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})


export default formSchema;