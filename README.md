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

# Getting Started #

To run the front end application in a unix terminal:  

**Change into the addressbook directory**  
```cd frontend/addressbook```  

**Install Vite npm package**  
```npm install vite```  
**Run npm install to install project dependencies found in package.json in the addressbook directory**  
```npm install```  

**To run the development hotreloads**  
```npm run dev```  

Then copy the localhost url into your browser
example:
<!-- <p><img src="./addressbook/src/styles/localhosturl.png" width="220" height="240" /></p> -->
![Screen Shot 2023-05-16 at 5 57 37 PM](https://github.com/JEub/dev-this-address-book/assets/106626020/53d27912-b60a-4ffb-9eec-24604d05371f)

This will load the following components in order:  
* App.jsx  
* LandingPage.jsx  
* Nav.jsx  
  * SearchBar.jsx loads inside the Nav component  
* Main.jsx

# Troubleshooting: #  
* When running the frontend by itself running "npm run dev" from the "frontend" directory will result in an error of vite not being found. To correct this from the "frontend" directory in the terminal run "cd addressbook" and then "npm run dev".  
* Search results will always be saved to a second piece of recoil state to be viewed in the Main Component.