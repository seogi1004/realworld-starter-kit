import type { NextPage } from 'next';
import React, { useState } from 'react';
import Layout from '../components/Layout';

const Register: NextPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit")
  };

  return (
    <>
      <Layout user={null}>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a href="/login">
                  Have an account?
                </a>
              </p>
              <form onSubmit={onSubmit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right" type="submit">Sign up</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Register
