import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required'),
});

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="ui container segment">
          <h2 className="ui center aligned header">
            <div className="content">
              Login
              <div className="sub header">Don't have an account yet? <Link to="/signup">Signup</Link> for an account!</div>
            </div>
          </h2>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form className="ui form">
                <div className="required field">
                  <label>Username</label>
                  <div className="ui left icon input">
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={values.username} />
                    <i className="user icon"></i>
                  </div>
                  <ErrorMessage className="error" name="username" component="div" />
                </div>
                <div className="required field">
                  <label>Password</label>
                  <div className="ui left icon input">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                    <i className="lock icon"></i>
                  </div>
                  <ErrorMessage className="error" name="password" component="div" />
                </div>
                <button className="ui button" type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Login;
