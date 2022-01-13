import type { NextPage } from 'next';
import type { User } from '../types';
import { GetStaticProps } from 'next'
import Layout from '../components/Layout';

type Props = {
  user: User
}
const Home: NextPage<Props> = ({ user }: Props) => {
  return (
    <>
      <Layout user={user}>index.tsx</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://127.0.0.1:3000/api/user')
  const user = res.status === 401 ? null : await res.json()
  
  return {
    props: {
      user,
    },
  }
}

export default Home
