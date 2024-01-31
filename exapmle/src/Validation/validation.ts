import * as yup from 'yup';

export const firstname = yup
    .string()
    .trim()
    .required('First Name is required')
    .matches(/^\S*$/, 'Spaces are not allowed')

export const lastname =  yup
    .string()
    .trim()
    .required('Last Name is required')
    .matches(/^\S*$/, 'Spaces are not allowed')

export const email =yup
    .string()
    .trim()
    .email('Invalid email address')
    .required('Email is required')

export const password =yup
    .string()
    .trim()
    .required('Password is required')
    .matches(/^\S*$/, 'Spaces are not allowed')

