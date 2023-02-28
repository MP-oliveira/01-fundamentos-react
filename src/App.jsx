import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Mauricio Oliveira'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque cumque dolorum molestiae ab inventore odit esse consequatur saepe incidunt suscipit, a magnam tenetur eligendi beatae dolor officia similique animi?'
          />
          <Post
            author='Yasmin Oliveira'
            content='Desafios de uma vida adolescente'
          />
          <Post
            author='Vanessa Oliveira'
            content='Desafios de aprender guitarra'
          />
        </main>
      </div>
    </>
  )
}



export default App
