import * as Yup from 'yup';

export function Signup (params) {
  this.fname = params.fname || '';
  this.lname = params.lname || '';
  this.username = params.username || '';
  this.password = params.password || '';
}

export const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  username: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
