import s from './DecksList.module.css'
import { Deck } from '../decks-api.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './DeckItem/useFetchDecks.ts'

export const DecksList = () => {
const {decks} = useFetchDecks()
  return <ul className={s.list}>
    {decks.map((deck:Deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
  </ul>
}
