import type { NextPage } from 'next';
import type { PageProps, LoginResponse } from '../types';
import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';

const Login: NextPage<PageProps> = ({ user }: PageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/login?email=${email}&password=${password}`);
    const data: LoginResponse = await res.json();

    if (email === '' || password === '')
      setMessage('please fill in the blanks');
    else {
      if (data.message !== '') setMessage(data.message);
      else Router.push({ pathname: '/' });
    }
  };

  return (
    <>
      <Layout user={user}>
        <div className="auth-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign in</h1>
                <p className="text-xs-center">
                  <a href="/register">Need an account?</a>
                </p>

                {
                  message !== '' ? (<ul className="error-messages">
                    <div className="ng-scope">
                      <li className="ng-binding ng-scope">{ message }</li>
                    </div>
                  </ul>) : ''
                }     
                <form onSubmit={onSubmit}>
                  <fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                      Sign in
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
