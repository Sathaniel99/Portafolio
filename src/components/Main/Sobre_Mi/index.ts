export { ButtonRef } from "./ButtonRef";
export { AccentSpan } from "./AccentSpan";

export interface ButtonRefProps {
    url: string,
    text: string,
    ariaLabel: string,
    img: string,
}

export const buttons_ref: { [key: string]: ButtonRefProps } = {
    uci: {
        ariaLabel: "Web de la UCI",
        text: "Universidad de las Ciencias Informáticas (UCI)",
        url: "https://www.uci.cu/",
        img: "uci.webp",
    },
    habana: {
        ariaLabel: "Ubicación de La Habana",
        text: "La Habana",
        url: "https://www.bing.com/maps?q=La%20Habana&amp;satid=id.sid%3A3ca5066a-a331-c1b3-135f-1fde36da55db&amp;FORM=KC2MAP",
        img: "habana_maps.webp",
    },
}

export const PERSONAL_INFO = {
    name: "Adán Luis Quincoces Escalona",
    age: calculateAge("2/10/1999"),
    university: "Ingeniero en Ciencias Informáticas",
    preUniversity: "Instituto Preuniversitario de Veguitas Granma (I.P.U. Abel Santamaría Cuadrado)",
    graduationYear: "2017",
    currentJob: {
        name: "Instituto Nacional de Ordenamiento Territorial y Urbanismo (INOTU)",
        location: "Boyeros, La Habana",
        project: "Sistema Automatizado de Gestión y Control (SAGC)",
        responsibilities: ["Ciberseguridad", "Modularidad", "Diseño de Interfaces", "Mapas Catastrales"],
    },
    experienceYears: XPYears(),
};

function calculateAge(birthDate: Date | string, currentDate: Date = new Date()): number {
    const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
    let age = currentDate.getFullYear() - birth.getFullYear();
    const hasBirthdayPassed = currentDate.getMonth() > birth.getMonth() || (currentDate.getMonth() === birth.getMonth() && currentDate.getDate() >= birth.getDate());
    if (!hasBirthdayPassed) {
        age--;
    }
    return age;
}

function XPYears(){
    return new Date().getFullYear() - 2017
}