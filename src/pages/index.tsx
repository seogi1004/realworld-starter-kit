import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useEffect } from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import FeedTab from '../components/FeedTab';
import Tags from '../components/Tags';

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
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedTab user={user} tag=''></FeedTab>
            </div>
            <div className="col-md-3">
              <Tags></Tags>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
