import React from 'react'
import { PageTemplate } from './PageTemplate'

export class Articles extends React.Component{

  state = {
    quotesList:[]
  }
  
  onSubmit = (evt) => {
    evt.preventDefault()
    const form = evt.target
    const quote = form.quote.value
    const author = form.author.value
    const obj = {quote,author}
    console.log('ok, it works')
    //quotesList.push(obj);
    //console.log(quotesList)
  }


  componentDidMount(){
    fetch('/quotes')
      .then( response =>{
        return response.json()
      })
      .then( data => {
        const quotesList = data.quotesList
        setTimeout(()=>{
          this.setState({ quotesList })
        },3000)
      })
  }

  render(){

    if(this.state.quotesList.length === 0){
      return <div>loading...</div>
    }

    let quoteId;

    // check if quoteId is set
    if(this.props.match.params.quoteId){
      quoteId = this.props.match.params.quoteId
    }else{
      quoteId = 0
    }
    
    quoteId = parseInt(quoteId,10)
    
    // check if quoteId is valid
    if(isNaN(quoteId) || quoteId < 0 || quoteId >= this.state.quotesList.length){
      return <div>this is not a valid page number</div>
    }

    // quoteId is valid, load quote
    const quote = this.state.quotesList[quoteId]
  
    return <ArticlesPage onSubmit={this.onSubmit} quote={quote} pageNumber={quoteId}/>
  }
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      <h4>{ props.quote.author }</h4>
      <p>{ props.quote.quote }</p>
      <form onSubmit={props.onSubmit}>
        <input placeholder="quote" name="quote"/>
        <input placeholder="author" name="author"/>
        <input type="submit" value="ok"/>
      </form>
    </div>
  </PageTemplate>
)
