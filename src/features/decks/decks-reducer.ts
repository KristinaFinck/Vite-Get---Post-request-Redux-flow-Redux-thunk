import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/FETCH-DECKS':
      return {
     ...state,
        decks: action.decks || [],
      }
    default:
      return state
  }
}
 export const fetchDecksAC = (decks: Deck[]) => {
  return {type: 'DECKS/FETCH-DECKS', decks} as const
 }
type DecksActions = ReturnType<typeof fetchDecksAC>
