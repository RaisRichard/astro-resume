interface Translations {
    cv: string;	
    professionalExperience: string;
    education: string;
    languages: string;
    skills: string;
    interests: string;
    present: string;
}

const translationsDE: Translations = {
    cv: "Lebenslauf",
    professionalExperience: "Berufliche Erfahrung",
    education: "Schulbildung",
    languages: "Sprachkenntnisse",
    skills: "Kenntnisse",
    interests: "Interessen / Hobbys",
    present: "Heute",
}

const translationsEN: Translations = {
    cv: "CV",
    professionalExperience: "Professional Experience",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    interests: "Interests / Hobbies",
    present: "Present",
}

export const translations = {
    de: translationsDE,
    en: translationsEN
}