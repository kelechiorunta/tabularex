/**
 * Import React Dependencies
 */
import { useState } from 'react'

/**
 * Import Components
 */
import Row from './components/Row'
import Header from './components/Header'

import { posts } from './data/posts'
import './App.css'

/**
 * App Component
 *
 * This component is responsible for rendering the
 * application in its entirety.
 *
 * @returns {JSxElement}
 */
const App = () => {
  return (
    <>
      <section>
        <div id="app">
          <Header/>
          {
            posts.map((post, id) => {
              return <Row key={id} {...post} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default App;
