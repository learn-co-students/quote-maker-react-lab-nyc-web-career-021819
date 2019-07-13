export default (state = [], action) => {
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      let updatedQuotes = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: ++quote.votes}
        } else {
          return quote
        }
      })
      return updatedQuotes

    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes === 0) {
        return state
      } else {
        let updatedQuotes = state.map(quote => {
          if (quote.id === action.quoteId) {
            return { ...quote, votes: --quote.votes}
          } else {
            return quote
          }
        })
        return updatedQuotes
      }

    default:
      return state;
  }
}
