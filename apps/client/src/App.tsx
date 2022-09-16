import { Component, createResource } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import axios from 'axios';

const App: Component = () => {
  const fetcher = async () => {
    const { data } = await axios.request({ url: 'http://localhost:8000' });
    return { data: data.data, error: data.error };
  };

  const [data, { mutate, refetch }] = createResource(fetcher);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>data: {data.data}</p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
