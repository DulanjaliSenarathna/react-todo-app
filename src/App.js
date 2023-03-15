import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
