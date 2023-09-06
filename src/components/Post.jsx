import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  // O React não fica observando o valor da variável comentários para quando ela mudar ele mostrar os novos comentários em tela
  // Estados são variáveis que o componente deve monitorar
  // Criar estado sempre que quiser que quando o valor da variável mude o React mostre as novas informações de acordo com a mudança de valor
  
  // Dentro de () passar o valor inicial da variável
  // Ao criar uma variável usando a funcionalidade de estado no React, o useState não retorna somente o valor da variável
  // O retorno dele é um array com duas posições, onde a primeira posição é um array numérico, e a segunda posição é uma função
  
  // Conceito de desestruturação
  // Como o useState retorna um array, é possível escrever um array do lado esquerdo da operação
  // Na primeira posição haverá a variável usada para mostrar os comentários em tela
  // A segunda posição recebe uma função para alterar o valor da variável de comentários

  // Ao criar um estado dentro de um componente, ele fica no escopo desse componente, ou seja, 
  // um componente não compartilha as informações do estado com outro componente, apesar de ambos serem o Post
  const [comments, setComments] = useState([
    1,
    2,
  ]);
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  // Armazena a data de publicação do post relativa à data atual
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // Sempre que a função está sendo disparada através de uma ação do usuário, 
  // seu nome geralmente começa com handle
  function handleCreateNewComment() {
    // Ao realizar o submit num formulário no HTML, o comportamento padrão 
    // é redirecionar o usuário para alguma página
    // No React, para manter o usuário na mesma página (SPA), é necessário 
    // evitar o comportamento padrão do HTML
    event.preventDefault();
    
    setComments([...comments, comments.length + 1]);
    // Imutabilidade: não passar somente o que quer inserir, passar o novo valor
    // Spread Operator: lê o valor da variável e copia os valores que já existem nela
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        {/* O atributo dateTime mostra a data da publicação na inspeção do HTML 
        O atributo title mostra a data da publicação quando o usuário passa o mouse em cima do time */}
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>;
          }
        })}
      </div>

      {/* Atributos do HTML para ouvir eventos do usuário, como click, submit, hover, blur, etc. */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  );
}
