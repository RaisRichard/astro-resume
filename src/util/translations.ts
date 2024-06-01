interface Translations {
    cv: string;	
    professionalExperience: string;
    education: string;
    training: string;
    projects: string;
    languages: string;
    skills: string;
    interests: string;
    present: string;
}

const translationsDE: Translations = {
    cv: "Lebenslauf",
    professionalExperience: "Berufliche Erfahrung",
    education: "Schulbildung",
    training: "Schulungen",
    projects: "Projekte",
    languages: "Sprachkenntnisse",
    skills: "Kenntnisse",
    interests: "Interessen / Hobbys",
    present: "Heute",
}

const translationsEN: Translations = {
    cv: "CV",
    professionalExperience: "Professional Experience",
    education: "Education",
    training: "Training",
    projects: "Projects",
    languages: "Languages",
    skills: "Skills",
    interests: "Interests / Hobbies",
    present: "Present",
}

export const translations = {
    de: translationsDE,
    en: translationsEN
}