# Address Book Frontend

## Ideas

- We can have multiple different features with reusable componentes.
- Login page will need a controlled form with username, password, submit (inputs stored in state)
- Submit button sends a post request to the backend 
- Returns a token that we can use to authenticate the user

- Folder structure: Components folder, inside of which there is a folder for each component that would hold the jsx file and css (if we are using CSS - option to use tailwind?)
- Option to use Nextjs 

To run frontend from the terminal:
cd frontend
cd addressbook
npm run dev

This will load the following components in order:
-App.jsx
-LandingPage.jsx
-Nav.jsx
  -SearchBar.jsx loads inside the Nav component
-Main.jsx

Troubleshooting:
-When running the frontend by itself running "npm run dev" from the "frontend" directory will result in an error of vite not being found. To correct this from the "frontend" directory in the terminal run "cd addressbook" and then "npm run dev".
-Search results will always be saved to a second piece of recoil state to be viewed in the Main Component.