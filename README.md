# BOC

PetPix is an application that allows users to create profiles and post pictures of their pets to share with their friends! The application consists of 5 main pages:

  1. Login/Register
    - Allows you to register via Google, Twitter, or by email
        - You will receive a confirmation email that you must validate before your login credentials will work
    - Allows you to login after registering
    - Validates your information before you are allowed to submit
  2. Discover/Home
    - Displays a feed of all users' posts from newest to oldest
    - Has a pull down functionality to refresh posts
    - Has a pull up functionality to load more older posts
    - All pictures and comments will open up its own modal
      - Picture modal will display the full-sized image. Screenshots of posts will send a notification to the user who made the post.
      - Comments modal will display all comments in a list. Users not logged in can submit a comment as "Anonymous."
  3. Search
    - As a default, a list shows pets you recently searched
    - The search bar auto-suggests pets you already follow
    - You can search for any users in the database
    - You can chat directly with other users who are logged in
  4. Upload
    - Allows you to choose pictures from your photo gallery or camera roll and post it
    - Posts will have GPS location and captions
  5. Settings
    - Allows you to update your profile picture
    - Allows you to see notifications of other pets who have taken screenshots of your posts
    - Allows toggling of Light/Dark mode
    - Ability to logout
  6. User Profile
    - Similar functionality to Discover/Home page with the main difference being that all posts will be yours only


How to start the application:

Using a Mac:
  1. Run "npm install"
  2. Run "npm start"
  3. Press "i" to start iOS simulator

Using Linux or Windows:
  1. Read the official documentation: https://docs.expo.dev/get-started/create-a-new-app/ 


