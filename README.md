# Run and Deploy Trivia Challenge App

This guide contains everything you need to run your Trivia Challenge app locally and deploy it to GitHub Pages.

---

## Run Locally

**Prerequisites:** Ensure you have **Node.js** installed on your machine.

1.  **Install dependencies:**
    Open your terminal in the project's root directory and run:
    ```bash
    npm install
    ```
    This command downloads all the necessary packages for the app to run.

2.  **Run the app in development mode:**
    After installing dependencies, start the development server with:
    ```bash
    npm run dev
    ```
    Your app will typically open in your browser at `http://localhost:5173` (or another port if 5173 is in use). This mode includes hot-reloading for a smooth development experience.

---

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

1.  **Deploy the app:**
    To build your app for production and deploy it to your GitHub Pages URL (`https://bjouxzfish.github.io/mini-games`), run:
    ```bash
    npm run deploy
    ```
    This command first builds your app (creating optimized production files in the `dist` folder) and then pushes them to the `gh-pages` branch of your repository.

    **Note:** It may take a few minutes for changes to reflect on GitHub Pages after deployment.