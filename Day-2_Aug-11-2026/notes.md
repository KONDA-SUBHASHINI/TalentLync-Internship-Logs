# Day 2 Notes

## Files in Day 2
- `index.html` — home page with navigation links to other pages, phone and email links, download links, and an image link.
- `aboutus.html` — About Us page with a heading.
- `services.html` — Services page with a heading.
- `contactus.html` — Contact Us page with a heading.
- `forms.html` — form example page that includes many input types and redirects to a success page.
- `registered.html` — confirmation page showing a "Registered Successfully" message.
- `download.txt` — downloadable text file linked from the home page.
- `basic.zip` — downloadable zip archive linked from the home page.
- `icon.jpg` — image used on the home page.
- `plugins.md` — plugin notes file, currently empty.
- `notes.md` — summary of Day 2 files.

## Form page details
- `forms.html` includes the following input controls:
  - text, textarea, checkbox, radio
  - select, multiple select
  - file upload, number, range
  - week, month, date, time, datetime-local
- The multiple select field uses `name="multiple_select[]"` so multiple values can be submitted.
- Form submission is configured to go to `registered.html`.

## Learning sequence
- First understand anchor tag navigation through the files `aboutus.html`, `contactus.html`, and `services.html` from `index.html`.
- Next study `forms.html` and the input controls used for collecting data.
- Then review Node.js, NVM, and npm concepts for backend and package management.

## Technical notes
- Check whether a number is 10 digits using a simple validation rule: the input must contain exactly 10 digits, for example with JavaScript regex `/^\d{10}$/`.
- Question: Do HTML password fields display `*` when typing? Answer: No, `type="password"` is browser-masked and normally shows dots or bullets, not literal asterisks.

## Node / NVM / npm
- Node.js is a JavaScript runtime that allows JavaScript to run outside the browser, often used for building backend servers, APIs, and command-line tools.
- NVM (Node Version Manager) lets you install and switch between different Node.js versions on the same machine using commands like `nvm install <version>` and `nvm use <version>`.
- npm (Node Package Manager) is used to install, manage, and share JavaScript packages in a project with commands such as `npm install`.

## AI tools
- Create.xyz — AI website/app builder that generates full-stack sites from a text prompt, including frontend, backend, and database code.
- Replit — online AI coding platform where Replit Agent can build and deploy editable web apps from a single prompt.
