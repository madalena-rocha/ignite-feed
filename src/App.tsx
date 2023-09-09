// Componente no React é uma função que retorna HTML
// Os componentes da aplicação React precisam ter extensão JSX
// JSX = JavaScript + XML (HTML)

import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/madalena-rocha.png',
      name: 'Madalena Rocha',
      role: 'Web Developer'
    },
    content: [
      // Deve-se evitar que o back-end retorne HTML para exibir em tela, pois fica mais fácil deixar o site aberto para vulnerabilidades
      // Se algum usuário mal intencionado conseguir jogar uma tag script dentro do conteúdo post e isso for exibido em tela,
      // o script será executado dentro do site, podendo fazer ações maliciosas com quem está acessando esse site
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-18 10:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-20 10:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* O método forEach pecorre um array, mas não tem nenhum retorno 
          O método map é semelhante ao forEach, mas possui retorno */}
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
