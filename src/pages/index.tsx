import type { NextPage } from 'next';
import type { PageProps } from '../types';
import Layout from '../components/Layout';

const Home: NextPage<PageProps> = ({ user }: PageProps) => {
  return (
    <>
      <Layout user={user}>index.tsx</Layout>
    </>
  );
};

export default Home;
