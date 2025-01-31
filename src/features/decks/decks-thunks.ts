import { fetchDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'

export const  fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
dispatch(fetchDecksAC(res.data.items))
})}