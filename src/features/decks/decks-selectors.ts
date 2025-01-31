import { AppRootState } from '../../app/store.ts'
import { decksReducer } from './decks-reducer.ts'

export const selectDecks = (state:AppRootState) => state.decksReducer.decks