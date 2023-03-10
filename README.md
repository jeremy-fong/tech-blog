# Tech Blog

## Table of Contents
1. [Title](#title)
2. [Project](#project)
3. [Description](#description)
4. [Installation](#installation)
5. [Usage](#usage)
6. [User Story](#user-story)
7. [Acceptance Criteria](#acceptance-criteria)
8. [Screenshot Preview of Project](#screenshot-preview-of-project)
9. [Source](#source)

## Title :
### Tech Blog

## Project :
### *Tech Blog*

## Description :
* This project uses NodeJS, Express-handlebars, MySQL2, SSequelize, Dotenv, Bcrypt, Express-session, Connect-session-sequelize, and npm dependencies.
* This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developersâ€™ posts as well.

## Installation :
- The user needs to install Node, MySQL2, and npm dependencies for this project. 

## Usage :
- To use the app, open it in the browser with the Heroku deployed link.
- Once opened your screen should look like the screenshot provided below, and the app is ready to use.
- The user needs to install the npm dependencies by inputting `npm install` into the directory terminal.
- Rename the `.envEXAMPLE` file to `.env` and input your MySQL password in the quotes, if you have one.
Log in to MySQL by inputting `mysql -u root -p` into the terminal.
In the MySQL shell input `source db/schema.sql` to run the schema file, then `source db/seeds.sql` to populate the database.
Run the program with `npm run start`.

## User Story :
```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria :
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creatorâ€™s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creatorâ€™s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Screenshot Preview of Project :
![tech-blog-ss](https://user-images.githubusercontent.com/112743562/223089394-91318fa2-17ec-48b6-b6f2-92356b29b559.jpg)

## Source :
- GitHub Link: https://github.com/jeremy-fong/tech-blog
- Heroku Link: https://tech-gossip.herokuapp.com/
