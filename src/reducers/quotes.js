import uuid from 'uuid';

export default (state = [], action) => {
  let updatedQuotes;
  switch(action.type){
   case "ADD_QUOTE":
    return [...state, action.quote]

  case "REMOVE_QUOTE":
    let filteredQuotes = state.filter((quote)=> {
      return quote.id !== action.quoteId
    })
    return filteredQuotes

  case "UPVOTE_QUOTE":
     updatedQuotes = state.map((quote)=> {
      if (quote.id === action.quoteId){
        return {...quote, votes: ++quote.votes}
      }
      else {
        return quote
      }
    })
    return updatedQuotes

  case "DOWNVOTE_QUOTE":
    updatedQuotes = state.map((quote)=> {
    if(quote.id === action.quoteId && quote.votes > 0){
      return {...quote, votes: --quote.votes}
    }
    else {
      return quote
    }
  })
  return updatedQuotes


   default:
   return state;
  }
}
