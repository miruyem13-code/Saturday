# Saturday Job Offer

A responsive React classroom project inspired by the supplied professional job-board reference. Built with React and Vite, with a fixed sidebar, three-column desktop grid, mobile navigation, and a restrained purple accent.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution is restricted.

## School assignment coverage

| Requirement | Implementation |
| --- | --- |
| Work in small groups and write a Saturday offer | Editable group name; choose any offer in Candidates, Q&A, or Presentation and use the pencil button to write your own version. |
| 1. What the job is | Nine realistic student roles, each with a title, company, category and description. |
| 2. Experience required | Experience badge and detailed experience/qualities in View Details; editable in the offer form. |
| 3. Morning or afternoon | Shift badge, filters, details and presentation. |
| 4. Working hours | Duration on every card, details and presentation. |
| 5. Exact working times | Exact start and finish times; edited durations must match the times. |
| 6. Employee responsibilities | Three specific tasks per offer in View Details and the presentation. |
| 7. Other groups ask questions | Job-specific Q&A with group names and editable answers. Groups take turns in one browser. |
| 8. Evaluate and select candidates | Three sample profiles plus submitted applications; suitability decisions and one selected candidate per job. |
| 9. Explain suitability | A written reason is mandatory for every decision, including Not suitable. |
| 10. Present offer and candidate | Four presentation slides: offer and hours, duties and experience, chosen candidate and reason, group Q&A. Includes speaker notes, presentation mode and print layout. |

Search, combined filters, sorting, bookmarks, applications, notifications and workspace settings are functional. All offers and sample people are fictional classroom role-play materials. Application forms do not contact employers. Progress is stored in localStorage in the current browser; there is no account system or cross-device synchronization. Clearing browser storage clears classroom work.

## Validation

```sh
npm run build
npm run test:e2e
```

The Playwright suite covers all nine details/application buttons, the six offer fields, search and filtering, bookmarks, form validation, applicant evaluation, selection replacement, Q&A, presentation and print rendering, persistence, editable hours, and mobile layout/navigation. The test configuration uses the installed Windows Chrome browser; adjust `launchOptions.executablePath` for another environment.

Implementation files: `src/data.js` (sample offers and applicants), `src/App.jsx` (workspace and classroom flows), `src/OfferEditor.jsx` (offer writing and validation), and the CSS files (responsive styling).
