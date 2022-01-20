import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useEffect } from 'react'
import Layout from '../components/Layout';

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
      <Layout user={user}>index.tsx</Layout>
    </>
  );
};

export default Home;
