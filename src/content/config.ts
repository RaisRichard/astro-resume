import { defineCollection, reference, z } from "astro:content";

const zodCVDate = z.object({
	year: z.number(),
	month: z.number().min(1).max(12).optional(),
});

const infoCollection = defineCollection({
	type: "data",
	schema: z.object({
		fullName: z.string(),
		email: z.string().email(),
		phone: z.string(),
		address: z.string(),
		city: z.string(),
		country: z.string(),
		zip: z.string(),
		birthday: z.date(),
		githubUsername: z.string().optional(),
	}),
});

const professionalExperienceCollection = defineCollection({
	type: "data",
	schema: z.object({
		position: z.string(),
		company: z.string(),
		startDate: zodCVDate,
		endDate: zodCVDate.optional(),
		city: z.string(),
		country: z.string(),
		notes: z.array(z.string()),
	}),
});

const educationCollection = defineCollection({
	type: "data",
	schema: z.object({
		degree: z.string(),
		school: z.string(),
		startDate: zodCVDate,
		endDate: zodCVDate.optional(),
		city: z.string(),
		country: z.string(),
	}),
});

const trainingCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		place: z.string(),
		date: zodCVDate,
	}),
});

const projectsCollection = defineCollection({
	type: "data",
	schema: z.object({
		categoryName: z.string(),
		projects: z.array(z.string()),
	}),
});

const languagesCollection = defineCollection({
	type: "data",
	schema: z.object({
		language: z.string(),
		level: z.string(),
		tag: z.string(), // IETF BCP 47 language tag for Schema.org "knowsLanguage" itemprop
	}),
});

const skillsCollection = defineCollection({
	type: "data",
	schema: z.object({
		skill: z.string(),
		description: z.string().optional(),
		level: z.number().min(1).max(5),
	}),
});

const interestsCollection = defineCollection({
	type: "data",
	schema: z.object({
		interests: z.array(z.string()),
	}),
});

// References that binds together all collections
const profileCollection = defineCollection({
	type: "data",
	schema: z.object({
		info: reference("info"),
		professionalExperience: z.array(reference("professionalExperience")),
		education: z.array(reference("education")),
		training: z.array(reference("training")),
		projects: z.array(reference("projects")),
		languages: z.array(reference("languages")),
		skills: z.array(reference("skills")),
		interests: reference("interests"),
	}),
});

export const collections = {
	info: infoCollection,
	professionalExperience: professionalExperienceCollection,
	education: educationCollection,
	training: trainingCollection,
	projects: projectsCollection,
	languages: languagesCollection,
	skills: skillsCollection,
	interests: interestsCollection,
	profile: profileCollection,
};
