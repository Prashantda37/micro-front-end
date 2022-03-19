import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from 'store/store';
import { userAction } from 'store/actions';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Input } from '../../components';
import { Signup, SignupSchema } from './model';

function SignUp (props) {
  const [state, setState] = useState({
    serverError: null,
    serverMessage: null,
  });
  const navigate = useNavigate();

  const { currentState, dispatcher } = useStore('user');
  const formik = useFormik({
    initialValues: new Signup({}),
    validate: _validate,
    validationSchema: SignupSchema,
    onSubmit: _handleSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });

  useEffect(() => {
    if (currentState.error) {
      formik.setSubmitting(false);
      setState(prevState => ({ ...prevState, serverError: currentState.error }));
    } else if (Object.keys(currentState.user).length > 0) {
      navigate('/');
    }
  }, [currentState]);

  function _validate (values) {
    return SignupSchema.isValid(values);
  }

  function _handleSubmit (values) {
    const requestParameter = {
      name: `${values.fname} ${values.lname}`,
      password: values.password,
      username: values.username,
    };
    console.log(requestParameter);
    dispatcher(userAction(requestParameter));
  }

  return (
    <div className="bg-gray-100 p-4 rounded w-1/3 mx-auto mt-16 mb-24">
      <div className="text-2xl">
        Sign Up
      </div>
      <div className="text-gray-500">Please fill this form to create an account!</div>
      <form onSubmit={ formik.handleSubmit }>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <Input
            placeholder="First name"
            name="fname"
            onChange={ formik.handleChange }
            errorMessage={ formik.errors.fname || null }
          />
          <Input
            placeholder="Last name"
            name="lname"
            onChange={ formik.handleChange }
            errorMessage={ formik.errors.lname || null }
          />
        </div>
        <div className="mt-3">
          <Input
            placeholder="Email"
            name="username"
            onChange={ formik.handleChange }
            errorMessage={ formik.errors.username }
          />
        </div>
        <div className="mt-3">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={ formik.handleChange }
            errorMessage={ formik.errors.password }
          />
        </div>
        <div className="mt-3">
          <Input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            onChange={ formik.handleChange }
            errorMessage={ formik.errors.passwordConfirmation }
          />
        </div>
        { state.serverError && <ErrorMessage>Error</ErrorMessage> }
        <div className="mt-3">
          <Button
            type="submit"
            disabled={ formik.isSubmitting }
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
