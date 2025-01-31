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
    case 'DECKS/CREATE-DECKS':
      return {
        ...state,
        decks: [action.deck, ... state.decks]
      }
    default:
      return state
  }
}
 export const fetchDecksAC = (decks: Deck[]) => {
  return {type: 'DECKS/FETCH-DECKS', decks} as const
 }
export const createDeckAC = (deck: Deck) => {
  return {type: 'DECKS/CREATE-DECKS', deck} as const
}
type DecksActions =
  ReturnType<typeof fetchDecksAC>
 | ReturnType<typeof createDeckAC>
