import s from './DecksList.module.css'
import {useEffect} from 'react'
import { Deck, decksApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {
   const dispatch = useAppDispatch()
  const decks:Deck[] = useAppSelector(selectDecks)


  useEffect(() => {
      dispatch(fetchDecksTC())
  }, [])
  return <ul className={s.list}>
    {decks.map((deck:Deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
  </ul>
}
