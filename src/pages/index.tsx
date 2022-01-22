import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useEffect } from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Home: NextPage<PageProps> = ({ user }: PageProps) => {
  useEffect(() => {
    if (user !== null) {
      fetch('/api/hello').then(res => {
        console.log(res);
      });
    }
  }, []);
  
  return (
    <>
      <Layout user={user}>
        {
          user === null ? (
          <div className="home-page">
            <Banner title='conduit' description='A place to share your knowledge.'></Banner>
          </div>) : ''
        }
      </Layout>
    </>
  );
};

export default Home;
