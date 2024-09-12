interface Translations {
    resume: string;	
    letter: string;
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
    resume: "Lebenslauf",
    letter: "Anschreiben",
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
    resume: "Resume",
    letter: "Cover Letter",
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