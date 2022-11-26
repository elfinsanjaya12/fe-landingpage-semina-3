import Brand from '../components/Brand';
import CardEvent from '../components/CardEvent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Stories from '../components/Stories';
import { getData } from '../utils/fetchData';

export default function Home({ data }) {
  console.log('data');
  console.log(data);
  return (
    <>
      <Header />
      <Brand />
      <CardEvent data={data} title='Featured Events' subTitle='Grow Today' />
      <Stories />
      <Statistics />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const req = await getData('api/v1/events');

  const res = req.data;

  return {
    props: { data: res },
  };
}
