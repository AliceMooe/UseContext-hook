import React from 'react';
import Header from './Header';
import Body from './Body';
import BackDrop from '../components/BackDrop';


const Main = () => {
  return (
    <section className='main'>
    <Header />
    <Body />
    <BackDrop />
    </section>
  )
}

export default Main;