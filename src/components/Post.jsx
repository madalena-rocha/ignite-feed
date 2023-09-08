import { format, formatDistanceToNow, set } from 'date-fns';
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
    'Post muito bacana, hein?!',
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  // Armazena a data de publicação do post relativa à data atual
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  // Sempre que a função está sendo disparada através de uma ação do usuário, 
  // seu nome geralmente começa com handle
  function handleCreateNewComment() {
    // Ao realizar o submit num formulário no HTML, o comportamento padrão 
    // é redirecionar o usuário para alguma página
    // No React, para manter o usuário na mesma página (SPA), é necessário 
    // evitar o comportamento padrão do HTML
    event.preventDefault();
    
    setComments([...comments, newCommentText]);
    // Imutabilidade: não passar somente o que quer inserir, passar o novo valor
    // Spread Operator: lê o valor da variável e copia os valores que já existem nela

    setNewCommentText(''); // limpar a textarea após publicar o comentário
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
    // event.target retorna o elemento que está recebendo o evento
    // neste caso, a textarea, onde está o evento onChange
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    // o filter percorre cada comentário e, caso retorne true, mantém na lista, caso contrário, remove da lista

    setComments(commentsWithoutDeletedOne);
    // setComments deve receber o valor esperado contido no estado de comentários após a remoção do comentário
    // Imutabilidade: não altera o valor de uma variável na memória, e sim cria um novo espaço na memória
    // Mais performático, pois o react tem duas versões da variável para comparar e ver o que mudou, 
    // diferente de alterar diretamente o valor na posição que está na memória, não havendo uma fonte de comparação
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
            // colocar a key no primeiro elemento do retorno de um map
            // a key precisa ser única dentro da renderização de um componente
            // se houver outro componente com a mesma key não tem problema
          }
        })}
      </div>

      {/* Atributos do HTML para ouvir eventos do usuário, como click, submit, hover, blur, etc. */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
              // ao enviar funções para um componente como propriedades, 
              // funções que serão disparadas a partir de uma ação do usuário, 
              // geralmente o nome da propriedade começa com on
            />
          )
        })}
      </div>
    </article>
  );
}
