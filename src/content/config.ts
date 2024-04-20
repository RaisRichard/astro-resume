import { defineCollection, z } from "astro:content";

const infoCollection = defineCollection({
	type: "data",
    schema: z.object({
        fullName: z.string(),
        email: z.string().email(),
        phone: z.string(),
        adress: z.string(),
        city: z.string(),
        country: z.string(),
        zip: z.string(),
        birthday: z.date(),
        birthplace: z.string(),
    })
});

const professionalExperienceCollection = defineCollection({
    type: "data",
    schema: z.object({
        position: z.string(),
        company: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        city: z.string(),
        country: z.string(),
    })
});

const educationCollection = defineCollection({
    type: "data",
    schema: z.object({
        degree: z.string(),
        school: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        city: z.string(),
        country: z.string(),
    })
});

const languagesCollection = defineCollection({
    type: "data",
    schema: z.object({
        language: z.string(),
        level: z.string(),
    })
});

const skillsCollection = defineCollection({
    type: "data",
    schema: z.object({
        skill: z.string(),
        description: z.string().optional(),
        level: z.number().min(1).max(5),
    })
});

const interestsCollection = defineCollection({
    type: "data",
    schema: z.object({
        interests: z.array(z.string()),
    })
});

export const collections = {
	info: infoCollection,
    professionalExperience: professionalExperienceCollection,
    education: educationCollection,
    languages: languagesCollection,
    skills: skillsCollection,
    interests: interestsCollection,
};
