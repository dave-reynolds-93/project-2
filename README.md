<h1 align="center">Massage With Megan Website</h1>

![index.html](/assets/images/indexDesktop.png)

[View the live project here.](https://dave-reynolds-93.github.io/project-2/)

This is a massage site with the aim of attaining more clients. It is aimed at people wanting to find a masseuse. Features include information about the services, with easy navigation of multiple pages, all on one page.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the masseuse.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find the best way to get in contact with the masseuse with any questions I may have.

    -   #### Frequent User Goals
    
        1. As a Frequent User, I want to get in touch with the masseuse easily to book a massage.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are #241d15 and #79cee2. ![](/assets/images/colourContrast.png)
    -   #### Typography
        -   Noto Serif and Urbanist are the 2 fonts used throughout the website, with sans-serif as the fallback font in case for any reason the fonts aren't being imported into the site correctly. The 2 fonts are very clean, and give the website a professional feel.
    -   #### Imagery
        -   Imagery is important. The picture shows potential clients some of the relaxing equipment they can expect from this massage experience.

*   ### Wireframes

    -   All wireframes - [View](/assets/wireframes/wireframes.pdf)


## Features

-   Responsive on all device sizes

-   Interactive elements

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 5.3.2:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Lora' and 'Source Serif 4' fonts into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](/assets/wireframes/Wireframes.pdf) during the design process.

### API's

1. [EmailJS:](https://www.emailjs.com/)
    - EmailJS was used so that when a user clicks submit on the contact form, an email is sent to my email address, with the message, name and contact details of the user.
1. [Google Maps API:](https://developers.google.com/maps)
    - This was used to show on a map the location of where the massages take place.

## Java Script

### script.js

-   I used an event listener, so that the js loads after the dom content has loaded.
-   I used querySelectorAll and querySelector to set styles.
-   I used a forEach function to set the onClick function for each nav-item.
-   I used a showPage function I had defined later on outside the function I used it in.
-   I used the keyword this to reference the object the function was happening to.
-   I defined a showPage function to use in other parts of the code.
-   I got the inspiration for this code from harvard cs50 web development user interfaces lecture.

### sendEmail.js

-   This function is the onSubmit function for the contact page form.
-   It sends an email to my email address, using a serviceID I created on the emailJs site. A template ID from a template I created, and the 3 variables that it takes from the form, from_name, from_email and project_request.
-   It includes a .then. Once the function is complete, this does 2 different things depending on if the function was succesful or not.
-   Here is an image of an email I recieved from submitting the contact form.
![Email recieved from form](/assets/images/emailJsProof.png)
-   Here is an image of the emialJs template I made.
![emailJs Template](/assets/images/emailJsTemplate.png)

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. JsHint was used to validate the Javascript.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
-   [JsHint](https://jshint.com/)

1.  Index page html validated.
![Index Validated](/assets/images/htmlValidatorIndex.png)
2.  Css validated. There were 5 warnings from external links and extensions.
![Css Validated](/assets/images/cssValidated.png)
3.  Script.js validated. There were 5 warnings from arrow functions only being compatible in ES6, so I added /*jshint esversion: 6 */ at the top of the file, and the warnings disappeared. My mentor told me this.
![Script.js Validated](/assets/images/scriptJsValidated.png)
3.  Email.js validated. There are 2 warnings, one saying emailjs is an undefined variable, the other saying sendMail is an unused variable. The code works, so I left it as it is.
![Email.js Validated](/assets/images/emailJsValidated.png)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the masseuse.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice.
        2. The main points are made immediately with the title.
        3. The user has two options, read what's on the homepage to learn more about the masseuse, or
        click through to one of the other pages, to learn the location or contact the masseuse.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes the page they will end up at clearly.
        3. On the Contact Us Page, after a form response is submitted, they are taken to a thankyou page,
        which has the same navbar as all the other pages, but also refreshes to the home page after 10
        seconds if no move is made by the user.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the best way to get in contact with the masseuse with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can fill out the form on the page.
        3. The footer contains links to the organisations Facebook, Instagram and Twitter page.
        4. Whichever link they click, it will open up in a new tab to ensure the user can easily get back to the website.

-   #### Frequent User Goals

    1. As a Frequent User, I want to find the best way to get in contact with the masseuse to book a massage.

        1. The user would already be comfortable with the website layout and can easily click the contact link.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   There are no social media pages for this company, so the social links just take you to the social links respective home page.
-   There is whitespace to the right and below the site page when viewing on a tablet.

### Bugs that were fixed

-   There was a thin white gutter to the bottom of the footer. I fixed this by removing the minimum height I had added to the footer. I worked out this needed to be done by inspecting the css on chrome developer tools.
-   The links in the nav bar weren't displaying the correct pages. I changed the selector from page.id to page, and then it worked.
-   It took me a while to figure out how to get the nav-links hover effect to keep working after java script event styling had been applied. I added the !important tag to the css, then it worked.
-   EmailJs stopped working. I realised this was because I had 2 different form submition event handlers.
Once I removed the other, emailJs worked again.
-   Bootstrap navbar button wasn't working. I had forgotten to include the bootstrap Js Cdn at the bottom.
-   Navbar was collapsing when screen was too large. Changed it from navbar-expand-lg to navbar-expand-md.
-   The image had a whitespace below it when the thanks message appeared. I fixed this by changing the height of the img from auto to 100%.
-   The social links clickable area was too wide. This was because I had given them a margin left and right of 30px to space them out. I removed this margin, and gave the containing ul tag a display of flex, and a gap of 10%, setting justify content to center.

### Screenshots

1. Homepage desktop and mobile.

![Homepage desktop](/assets/images/indexDesktop.png)
![Homepage mobile top](/assets/images/indexMobileTop.png)
![Homepage mobile middle](/assets/images/indexMobileMiddle.png)
![Homepage mobile bottom](/assets/images/indexMobileBottom.png)

2. Map page desktop and mobile

![Map page desktop](/assets/images/mapDesktop.png)
![Map page mobile top](/assets/images/mapMobileTop.png)
![Map page mobile middle](/assets/images/mapMobileMiddle.png)
![Map page mobile bottom](/assets/images/mapMobileBottom.png)

3. Contact page desktop and mobile

![Contact page desktop](/assets/images/contactDesktop.png)
![Contact page mobile top](/assets/images/contactMobileTop.png)
![Contact page mobile middle](/assets/images/contactMobileMiddle.png)
![Contact page mobile bottom](/assets/images/contactMobileBottom.png)
![Contact page desktop with thanks message](/assets/images/contactDesktopThanks.png)
![Contact page mobile with thanks message](/assets/images/contactMobileThanks.png)

4. Footer desktop and mobile

![Footer desktop](/assets/images/footerDesktop.png)
![Footer mobile](/assets/images/footerMobile.png)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/dave-reynolds-93/project-2)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com/dave-reynolds-93/project-2/settings/pages) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/dave-reynolds-93/project-2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/dave-reynolds-93/project-2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/dave-reynolds-93/project-2
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/dave-reynolds-93/project-2
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap 5.3.2](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System, navbar and also for styling.

-   I got the code for the navbar from the [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/components/navbar/)

-   I got the code for the form on the contact page from the [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/components/forms/)

-   I got the inspiration, and some of the code, for the single page application from the [Harvard CS50 Web Development User Interfaces Video.](https://www.youtube.com/watch?v=jrBhi8wbzPw&t=674s&ab_channel=CS50)

-   I got the code for the google maps map from the [Google maps API documentation.](https://developers.google.com/maps/documentation)

-   I got the code for the EmailJs form to send an email to myself, from the [Code Institute, Interactive Frontend Development, Putting it all Together, Sending emails using EmailJs section.](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/)



### Content

-   All content was written by the developer.

### Media

-   The massage image was found on pexel, a free image database.

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.