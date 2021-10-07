import React from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../../redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

export default ({ history }) => {
  const {
    auth: { errorMessage, loading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) =>
    dispatch(
      signup(values, () => {
        history.push('/feature');
      })
    );

  return (
    <>
      <h1>Creer un compte</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <fieldset>
          <label>Email</label>
          <input
            name='email'
            ref={register({
              required: "L'adresse email est obligatoire",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <br />
          {errors.email && (
            <span style={{ color: 'red' }}>{errors.email.message}</span>
          )}
        </fieldset>

        <fieldset>
          <label>Password</label>
          <input
            name='password'
            ref={register({
              required: 'Le mot de passe est obligatoire',
            })}
          />
          <br />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password.message}</span>
          )}
        </fieldset>

        <button type='submit'>{loading ? 'sending...' : 'Sign in'}</button>
      </form>
    </>
  );
};
