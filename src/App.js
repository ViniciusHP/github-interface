import React from 'react';
import useGithub from './components/hooks/github-hooks';
import Layout from './components/layout';
import NoSearch from './components/no-search';
import Profile from './components/profile';
import Repositories from './components/repositories';

const App = () => {
  const { githubState } = useGithub();

  const renderProfileAndRepositories = () =>
  (<>
    <Profile />
    <Repositories />
  </>);


  return (
    <Layout>
      {
        githubState.hasUser ?
        <>
        {githubState.loading ? <p>Loading</p> :
          renderProfileAndRepositories() }
        </>
        :
        <NoSearch />
      }
      
    </Layout>
  );
}

export default App;
