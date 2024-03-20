import './App.scss';
import Container from './components/Container';
import Main from './components/Main';
import HeaderContainer from './containers/HeaderContainer';
import GetUsersContainer from './containers/GetUsersContainer';
import PostUsersContainer from './containers/PostUsersContainer';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [loadPage, setLoadPage]= useState(true);

  useEffect(() => {
     setLoadPage(false);
  }, [])

  if (loadPage) return <Loader />;

  return (
    <div className="App">
      <Container>
        <HeaderContainer />
        <Main>
          <GetUsersContainer />
          <PostUsersContainer />
        </Main>
      </Container>
    </div>
  );
}

export default App;
