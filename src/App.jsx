// Componente no React é uma função que retorna HTML
// Os componentes da aplicação React precisam ter extensão JSX
// JSX = JavaScript + XML (HTML)

import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Madalena Rocha" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint aliquid voluptates expedita nisi voluptatem ducimus amet. Officiis, laboriosam dolorum vero cupiditate natus, deleniti, velit pariatur fugiat aperiam maiores corrupti?" 
          />
        </main>
      </div>
    </div>
  )
}
