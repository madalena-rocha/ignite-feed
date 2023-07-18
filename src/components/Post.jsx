import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/madalena-rocha.png" />

          <div className={styles.authorInfo}>
            <strong>Madalena Rocha</strong>
            <span>Web Developer</span>
          </div>
        </div>

        {/* O atributo dateTime mostra a data da publicação na inspeção do HTML 
        O atributo title mostra a data da publicação quando o usuário passa o mouse em cima do time */}
        <time title="07 de Julho às 14:30h" dateTime="2023-18-07 14:30:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          {/* {' '} para adicionar espaço em branco */}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
