import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const decksApi = {
   fetchDecks() {
     return instance.get<FetchDecksResponse>('v2/decks')
  },
  createDeck(params: AddDeckParams) {
     return instance.post<FetchDecksResponse>('/v1/decks', params)},
}
export type AddDeckParams = {
  name: string
}
export type FetchDecksResponse = {
  items: Deck[];
  pagination: Pagination;
  maxCardsCount: number;
};

export type Author = {
  id: string;
  name: string;
};

export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};