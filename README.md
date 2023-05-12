# Address Book

## Client Ask

> We want a single page application that replaces our rolodex that is currently handled by Jane at the front desk. 
>
> It only needs to track:
>   - First Name
>   - Last Name
>   - Physical Address

## Developer Responses

- Login
- Data Transfer
- Database
- Search Bar 
  - First Name
  - Last Name
  - Address
- Home page
- Update addresses
- Colors: {Black. Lime Green. Light Grey}

To run frontend from the terminal: cd frontend cd addressbook npm run dev

This will load the following components in order: 
-App.jsx 
-LandingPage.jsx 
-Nav.jsx 
  -SearchBar.jsx loads inside the Nav component 
-Main.jsx

Troubleshooting: 
-When running the frontend by itself running "npm run dev" from the "frontend" directory will result in an error of vite not being found. To correct this from the "frontend" directory in the terminal run "cd addressbook" and then "npm run dev". 
-Search results will always be saved to a second piece of recoil state to be viewed in the Main Component.