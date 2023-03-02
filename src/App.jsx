import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MP-oliveira.png',
      name: 'Mauricio Oliveira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portifolio' },
      { type: 'link', content: 'jane.design/dotocare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' }
    ],
    publishedAt: new Date('2023-03-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandez',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera do bem' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portifolio' },
      { type: 'link', content: 'jane.design/dotocare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' }
    ],
    publishedAt: new Date('2023-02-28 22:10:23')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}



export default App
