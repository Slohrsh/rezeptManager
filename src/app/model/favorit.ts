import { Rezept } from './rezept';

export interface Favorit {
    rezeptId: number;
}

export interface FavoritDisplayView {
    favoritId: number,
    rezept: Rezept
}