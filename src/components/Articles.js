import React from 'react'
import { PageTemplate } from './PageTemplate'
import { quotesList } from './data'

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
  if(isNaN(quoteId) || quoteId < 0 || quoteId >= quotes.length){
    return <div>this is not a valid page number</div>
  }

  // quoteId is valid, load quote
  const quote = quotesList[quoteId]

  return <ArticlesPage quote={quote} pageNumber={quoteId}/>
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      <h4>{ props.quote.author }</h4>
      <p>{ props.quote.quote }</p>
    </div>
  </PageTemplate>
)
