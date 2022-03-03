import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { Input } from '../../forms';

export function LoginModal ({ isOpen, toggle }) {
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    onSubmit: _handleSubmit,
  });

  function _handleSubmit (value) {
    console.log(value);
  }

  return (
    <Modal
      show={ isOpen }
      onHide={ () => toggle(false) }
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
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
            onClick={ formik.handleSubmit }
          >
            Login
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
