import React from 'react'

export const PageTemplate = ({ header, children }) => (
  <div>
    <nav>
      my beautiful website
    </nav>
    <h1>{ header }</h1>
    <hr/>
    <main>
      { children }
    </main>
  </div>
)