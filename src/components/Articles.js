import React from 'react'
import { PageTemplate } from './PageTemplate'
import { quotesList } from './data'

fetch('/quotes')
  .then( response =>{
    return response.json()
  })
  .then( data => {
    console.log(data)
  })

export const Articles = (props) => {

  let quoteId;

  // check if quoteId is set
  if(props.match.params.quoteId){
    quoteId = props.match.params.quoteId
  }else{
    quoteId = 0
  }
  
  quoteId = parseInt(quoteId,10)
  
  // check if quoteId is valid
  if(isNaN(quoteId) || quoteId < 0 || quoteId >= quotesList.length){
    return <div>this is not a valid page number</div>
  }

  // quoteId is valid, load quote
  const quote = quotesList[quoteId]

  return <ArticlesPage quote={quote} pageNumber={quoteId}/>
}

const onSubmit = (evt) => {
  evt.preventDefault()
  const form = evt.target
  const quote = form.quote.value
  const author = form.author.value
  const obj = {quote,author}
  quotesList.push(obj);
  console.log(quotesList)
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      <h4>{ props.quote.author }</h4>
      <p>{ props.quote.quote }</p>
      <form onSubmit={onSubmit}>
        <input placeholder="quote" name="quote"/>
        <input placeholder="author" name="author"/>
        <input type="submit" value="ok"/>
      </form>
    </div>
  </PageTemplate>
)
