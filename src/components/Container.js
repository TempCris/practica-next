import Head from 'next/head.js';
import Navigation from './navigation.js';

const Container = (props) => (
  <div>
    <Head>
      <title>Next.Js Project</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-1">{props.children}</div>
  </div>
);

export default Container;
