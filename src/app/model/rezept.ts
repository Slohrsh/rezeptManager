export interface RezeptRaw {
    id: number;
    bild: string;
    titel: string;
    rezept: string;
    kcal: number;
    zutaten: Zutat[];
}

export interface Zutat {
    id: number,
    menge: string;
    einheit: string;
    beschreibung: string;
}

export interface Rezept {
    id: number;
    bild: string;
    titel: string;
    rezept: string;
    kcal: number;
    zutaten: Zutat[];
}