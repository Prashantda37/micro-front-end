import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { handleLoginAction } from 'store/actions';
import { useStore } from 'store/store';
import { Input } from '../../forms';

export function LoginModal ({ isOpen, toggle }) {
  const { dispatcher } = useStore('authentication');
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    onSubmit: _handleSubmit,
  });

  function _handleSubmit (value) {
    const params = { username: value.userEmail, password: value.userPassword };
    dispatcher(handleLoginAction(params));
  }

  return (
    <Modal
      show={ isOpen }
      onHide={ () => toggle(false) }
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={ formik.handleSubmit }>
          <Input
            label="User Email"
            name="userEmail"
            onChange={ formik.handleChange }
            value={ formik.userEmail }
          />
          <Input
            label="Password"
            name="userPassword"
            type="password"
            onChange={ formik.handleChange }
            value={ formik.userPassword }
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex flex-end">
          <Button
            type="submit"
            variant="primary"
            disabled={ formik.isSubmitting }
            onClick={ formik.handleSubmit }
            data-testid="submit"
          >
            Login
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
