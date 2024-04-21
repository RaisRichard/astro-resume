interface Translations {
    professionalExperience: string;
    education: string;
    present: string;
}

const translationsDE: Translations = {
    professionalExperience: "Berufliche Erfahrung",
    education: "Schulbildung",
    present: "Heute"
}

const translationsEN: Translations = {
    professionalExperience: "Professional Experience",
    education: "Education",
    present: "Present"
}

export const translations = {
    de: translationsDE,
    en: translationsEN
}