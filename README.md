# astro-resume

A resume built with Astro, TailwindCSS and paper-css. It is meant to be printed (not hosted). Create static pages based on content collections and languages!

Note that it is tailored to my needs, so not every situation is accounted for and it may change at any moment! If you want to create a more publicly-usable project and would like to use the name "astro-resume" for it, let me know.

- Clone the repository
- Fill the resume by adding your data in `src/content/[language]`
- Bind/Bundle the data together by adding a new profile under `src/content/[language]/profile` which references all your data entries
- Add an `image.jpg` with your pretty face and a `signed.png` with your fancy signature in the `public` folder
- Run `pnpm astro sync` to create TypeScript types based on the added content
- Run `pnpm run dev` and go to `localhost:4321/resume/[language]-[profile]` to preview the resume
- When you're satisfied, run `pnpm run build`, then `pnpm run preview` and navigate to the resume again, use your browser to print the page
- ???
- Jobs!


### Preview

![Preview 1](/public/readme-preview-1.png)
![Preview 2](/public/readme-preview-2.png)