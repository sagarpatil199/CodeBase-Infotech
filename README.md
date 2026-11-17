# CodeBase Infotech website

Static frontend website for CodeBase Infotech (Codebase Infotech Private Limited).
Next.js (App Router, static export), React, TypeScript, Tailwind CSS, Motion and Lucide icons.
There is no backend, database, API route or login.

## Commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm install`     | Install dependencies                                  |
| `npm run dev`     | Start the development server at http://localhost:3000 |
| `npm run check`   | Type check, lint, format check and production build   |
| `npm run build`   | Build the static site into `out/`                     |
| `npm run preview` | Serve the built `out/` folder locally                 |
| `npm run format`  | Format all files with Prettier                        |

Upload the contents of `out/` to any static host.

## Editing content

All content lives in `src/data/`:

| File              | Contents                                                      |
| ----------------- | ------------------------------------------------------------- |
| `company.ts`      | Verified company details, introduction, highlights, site URL  |
| `courses.ts`      | Programme name, duration, fee, payment options, syllabus link |
| `technologies.ts` | The five learning stages and their technologies               |
| `services.ts`     | Software services (only `verified` entries are shown)         |
| `projects.ts`     | Illustrative project concepts                                 |
| `contact.ts`      | Phone, email, location, map link, enquiry delivery flag       |
| `navigation.ts`   | Header and footer links                                       |

## Logo

The logo lives in `src/assets/brand/` as four WebP files: `logo-light` and `logo-dark` (header,
without the tagline) and `logo-full-light` and `logo-full-dark` (footer, with "IT Training
Institute"). The dark versions have white "CodeBase" lettering for the dark theme. The favicon is
`src/app/icon.png`, with `src/app/apple-icon.png` for iPhone home screens. To change the logo,
replace these files with the same names.

## Before going live

1. **Phone**: `src/data/contact.ts` holds a demo phone number. Replace `phone.value`, then set
   `phone.isDemo: false`. The email (example@codebase-infotech.com) is real.
2. **Enquiry form**: a valid submission opens the visitor's email app with the enquiry
   pre-filled and addressed to `enquiryDelivery.to`. To receive enquiries without the visitor's
   email app, connect a form delivery service in `src/components/EnquiryForm.tsx`.
3. **Domain**: replace the placeholder `siteUrl` in `src/data/company.ts`.
4. **Syllabus**: put the PDF in `public/` and set `syllabusUrl` in `src/data/courses.ts`
   (for example `"/syllabus.pdf"`). The Download Syllabus button then appears.
5. **Map**: set `mapUrl` in `src/data/contact.ts` to the verified Google Maps link.
6. **Services**: add confirmed services to `src/data/services.ts` with `status: "verified"`.

Placement content is intentionally absent until the company confirms its scope and terms.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push
to `main`.

1. Push this project to a GitHub repository (branch `main`).
2. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push again, or run the workflow from the **Actions** tab. The site URL appears in the
   workflow run when it finishes.

The workflow sets `PAGES_BASE_PATH` for you, so the site works at
`https://<user>.github.io/<repo>/`. `public/.nojekyll` stops GitHub from hiding the `_next`
folder.

To upload the files by hand instead, build with the sub-path and upload the contents of `out/`:

```bash
PAGES_BASE_PATH=/<repo> npm run build
```
