export { Card_habilidad } from "./Card_habilidad";

export interface Card_habilidadProp {
    text: string,
    img: string,
    altImg: string,
    url: string,
    ariaLabel: string
    bgClass: string,
}
export interface ContainerProps{
    title: string,
    cards: Card_habilidadProp[]
}

export interface Categoria {
    categoria: string;
    tecnologias: Card_habilidadProp[];
}