# Web Project README

This repository contains the source code for **Battal Cevik's Web Site**, showcasing the professional portfolio and personal information of Battal Cevik, a Software Engineer. The project is organized into several HTML files, each serving a specific purpose.

## Pages Overview

### [index.html]

- **Description:** Home page of the web site.
- **Sections:**
  - **Header:** Navigation bar with links to other pages.
  - **Banner Picture:** Displaying the company image.
  - **About Me:** Personal introduction and welcome pictures.
  - **Professional Skills:** Overview of professional skills and experience.
  - **Footer:** Source information and copyright.


### [about.html]

- **Description:** Education and career information.
- **Sections:**
  - **Header:** Navigation bar with links.
  - **Banner Picture:** Company image.
  - **My Story:** Personal and professional journey.
  - **Professional Summary:** Detailed professional background.
  - **Education and Work Life:** Details about education and current workplace.
  - **Hometown:** Information about Istanbul, Turkey, and a gallery.
  - **External Content:** Embedding the second HTML file using an iframe.
  - **Hobbies:** Personal hobbies, favorite books, movies, and sports.


### [services.html]

- **Description:** Services page of the web site.
- **Sections:**
  - **Header:** Navigation bar with links to other pages.
  - **Banner Picture:** Displaying the company image.
  - **About Me:** Personal introduction and welcome pictures.
  - **Professional Skills:** Overview of professional skills and experience.
  - **Footer:** Source information and copyright.

### [education.html]

- **Description:** Education history page with a toggle button to show/hide the education table.
- **Sections:**
  - **Header:** Navigation bar with links.
  - **Banner Picture:** Company image.
  - **Education History:** Button to toggle the display of education table.
  - **Education Content:** Table displaying school, program, type, and year conferred.
  - **Additional Info:** About me, future goals, and an image of a university campus.

### [contact.html]

- **Description:** Page detailing contact information.
- **Sections:**
  - **Header:** Navigation bar with links.
  - **Banner Picture:** Company image.
  - **Get in Touch Form:** Form for visitors to provide contact information, select facilitator, service, and expertise options.
  - **Subscribe to Newsletter:** Using Vue.js to handle subscription form submission.
  - **Contact Table:** Displaying contact information.
  - **Weather Section:** Displaying current weather using OpenWeatherMap API.
  - **Map Section:** Displaying location using Google Maps API.

## Additional Files

- **CSS Files:** Style sheets for the project.
  - [main.css](css/main.css): General styling for the pages.
  - [degrees.css](degrees.css): Styling specific to the education history page.
- **JavaScript Files:**
  - [form.js](form.js): JavaScript code for form validation and fetching weather information.
  - [fetchDegrees.js](fetchDegrees.js): JavaScript code for fetching and displaying education degrees.
  - [vueapp.js](vueapp.js): Vue.js framework to handle gallery image page
  - [database.js](database.js): JavaScript code to insert data to the Firebase database
  - [flatpickr-init.js](flatpickr-init.js): Script to initialize flatpickr and handle scheduling logic
  - [gallery.js](gallery.js): JavaScript code to manipulate gallery pictures

- **JSON File:** Json file to read data to demonstrate in the website
  - [degrees.json](degrees.json): To read data

- **External Libraries:**
  - jQuery: Included for making asynchronous requests.
  - Vue.js: Used for handling subscription form submission.

Feel free to explore the individual HTML files for more details on each page's content and functionality. If you have any questions or need further assistance, please reach out!
