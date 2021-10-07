import React, { useEffect } from 'react';
import { signout } from '../../redux/auth/auth.actions';
import { useDispatch } from 'react-redux';

// We can also add a timer to show the signout message for a while and then trigger a redirection
export default ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      signout(() => {
        history.push('/');
      })
    );
  }, []);

  return <h1> Bye bye!!! </h1>;
};
