import React from 'react';
import Container from 'src/components/Container.js';
import Head from 'next/head.js';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users.js';
/**
 * index Component : Componente de inicio de Pagina
 * @returns {ReactElement} ReactElement
 */
const Index = (props) => {
  console.log(props);
  return (
    <Container>
      <Head>
        <title>Next.Js Project - Home</title>
      </Head>
      <h1> Next </h1>
      <Users users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
