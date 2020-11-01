export interface EinkaufslisteEintrag{
    ids: number[];
    checked: boolean;
    rezeptId: number;
    zutat: string;
    mengen: Menge[];
    einheit: string;
}

export interface Menge {
    menge: number;
    einheit: string;
}