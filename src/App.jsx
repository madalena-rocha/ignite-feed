// Componente no React é uma função que retorna HTML
// Os componentes da aplicação React precisam ter extensão JSX
// JSX = JavaScript + XML (HTML)

import { Post } from './Post.jsx';

export function App() {
  return (
    <div>
      <Post 
        author="Madalena Rocha" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint aliquid voluptates expedita nisi voluptatem ducimus amet. Officiis, laboriosam dolorum vero cupiditate natus, deleniti, velit pariatur fugiat aperiam maiores corrupti?" 
      />
    </div>
  )
}
