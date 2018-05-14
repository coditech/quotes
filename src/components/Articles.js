import React from 'react'
import { PageTemplate } from './PageTemplate'
import { quotes } from './data'

export const Articles = (props) => {

  let quoteId;

  // check if quoteId is set
  if(props.match.params.pageNumber){
    quoteId = props.match.params.pageNumber
  }else{
    quoteId = 0
  }
  
  quoteId = parseInt(quoteId,10)
  
  // check if quoteId is valid
  if(isNaN(quoteId) || quoteId < 0 || quoteId >= quotes.length){
    return <div>this is not a valid page number</div>
  }

  // quoteId is valid, load quote
  const quote = quotes[quoteId]
  console.log(quote)

  return <ArticlesPage pageNumber={quoteId}/>
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      the articles page {props.pageNumber}
    </div>
  </PageTemplate>
)
