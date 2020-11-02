export interface EinkaufslisteEintrag{
    ids: number[];
    checked: boolean;
    rezeptIds: string[];
    beschreibung: string;
    mengen: Menge[];
    einheit: string;
}

export interface Menge {
    menge: number;
    einheit: string;
}