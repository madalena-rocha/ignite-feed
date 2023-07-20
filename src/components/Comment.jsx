import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/madalena-rocha.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Madalena Rocha</strong>
              <time title="07 de Julho às 14:30h" dateTime="2023-18-07 14:30:00">Cerca de 1h atrás</time>
            </div>

            {/* em todo botão que é apenas um ícone, não contendo texto dentro dele, é importante 
            adicionar um title para os leitores de tela identificarem do que se trata esse botão */}
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div> 
    </div>
  )
}