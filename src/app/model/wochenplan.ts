import { Rezept } from './rezept';

export interface WochenplanEintrag {
    kw: number;
    tag: number;
    zeitraum: string;
    rezeptId: number;
}

export interface WochenplanEintragView {
    tag: number;
    zeitraum: string;
    rezept: Rezept;
}