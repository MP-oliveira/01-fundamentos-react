import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <asside className={styles.sidebar}>
      <asside>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
        />
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://github.com/MP-oliveira.png" />
          <strong>Mauricio Oliveira</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Perfil
          </a>
        </footer>
      </asside>
    </asside>
  )
}