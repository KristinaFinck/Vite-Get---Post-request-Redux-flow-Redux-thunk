import { useAppDispatch, useAppSelector } from '../../../../app/store.ts'
import { Deck } from '../../decks-api.ts'
import { selectDecks } from '../../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks:Deck[] = useAppSelector(selectDecks)
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return {
    decks,
  }
}
