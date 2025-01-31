import { createDeckAC, fetchDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'
import { AddDeckParams, decksApi } from './decks-api.ts'

export const  fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
dispatch(fetchDecksAC(res.data.items))
})}
export const createDeckTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  decksApi.createDeck(params).then((res) => {
    dispatch(createDeckAC(res.data))
  })
}