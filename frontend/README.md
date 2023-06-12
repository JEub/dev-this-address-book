# Address Book Frontend

## Ideas

-   We can have multiple different features with reusable componentes.
-   Login page will need a controlled form with username, password, submit (inputs stored in state)
-   Submit button sends a post request to the backend
-   Returns a token that we can use to authenticate the user

-   Folder structure: Components folder, inside of which there is a folder for each component that would hold the jsx file and css (if we are using CSS - option to use tailwind?)
-   Option to use Nextjs

# Getting Started

To run the front end application in a unix terminal:

**Change into the addressbook directory**  
`cd frontend/addressbook`

**Install Vite npm package**  
`npm install vite`  
**Run npm install to install project dependencies found in package.json in the addressbook directory**  
`npm install`

**To run the development hotreloads**  
`npm run dev`

Then copy the localhost url into your browser
example:

<!-- <p><img src="./addressbook/src/styles/localhosturl.png" width="220" height="240" /></p> -->

![Screen Shot 2023-05-16 at 5 57 37 PM](https://github.com/JEub/dev-this-address-book/assets/106626020/53d27912-b60a-4ffb-9eec-24604d05371f)

## Troubleshooting:

-   When running the frontend by itself running "npm run dev" from the "frontend" directory will result in an error of vite not being found. To correct this from the "frontend" directory in the terminal run "cd addressbook" and then "npm run dev"
-   Search results will always be saved to a second piece of recoil state to be viewed in the Main Component.

## In Progress

-   User modal submit rerenders login form
-   Conditional render of user modal if logged in state exists
-   Update needed for onchange for login input to change state on submit
