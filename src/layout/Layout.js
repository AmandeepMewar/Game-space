import React from 'react'

import GameList from '../components/Games/GameList';
import Header from '../components/Header/Header'


const Layout = () => {
  return (
    <React.Fragment>
      <Header/>
      <GameList/>
    </React.Fragment>
  );
}

export default Layout;
