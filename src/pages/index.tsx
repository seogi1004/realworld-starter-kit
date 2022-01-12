import type { NextPageContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>index.tsx</Layout>
    </>
  )
}

Home.getInitialProps = (ctx: NextPageContext) => {
  const { token } = cookies(ctx);

  if (!token || token === '') {
    if (ctx.req && ctx.res) {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    }
  }

  return { token }
}

export default Home
