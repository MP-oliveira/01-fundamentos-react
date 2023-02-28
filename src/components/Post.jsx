import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/MP-oliveira.png" />
          <div className={styles.authorInfo}>
            <strong>Mauricio Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de maio às 08:07h"
          datetime='2022-05-11 08:07:30'>Publicado há uma hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto pro meu portifolio</p>
        <p> <a href="#">jane.design/dotocare</a></p>
        <p> <a href="#">
          #novoprojeto
        </a>{" "}
          <a href="#">
            #nlw
          </a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer> 
      </form>
    </article>
  )
}