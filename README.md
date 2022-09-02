# Project-02-Code-Institute

## [View life website in github pages](https://newviewnewbeginning.github.io/Project-02-Code-Institute/?fbclid=IwAR08GFwaCjcxqDqrs54Y8vWdcBJFv4CljcEI5Zlqa5LEJ3RPSNeGcV05ELM)


# Values converter

In this section, you will include one or two paragraphs providing an overview of your project. Essentially, this part is your sales pitch. At this stage, you should have a name for your project so use it! Don’t introduce the project as a Portfolio project for the diploma. In this section, describe what the project hopes to accomplish, who it is intended to target and how it will be useful to the target audience. 

For example, Love Maths is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also maths. Love Maths is a fully responsive JavaScript maths game that will allow users to add, subtract, multiply and divide numbers. 

![Responsice Mockup](!(https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/amIresponsive.png))

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Converter Heading__

  - Featured at the top of the page, the Units Converter and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name and How To Use text which after click open modal window with instructions how to use converters.

![Header](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/header-scr.png)

![How to Use](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/Modal-scr.png)

- __Converter__

  - Each converter is showing what values are converted above input area.

![Converters](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/converters-scr.png)

- __Wrong or empty value__

  - Wrong or empty value will show error message under input field 

![Error](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/converter-alert-scr.png)

- __Results area__

  - When you type number value into input and convert it result will show just junder input field and picture will also change depand of result or type of value converted. 

![Result](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/converter-other-img-scr.png)

![Result](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/miles-img-scr.png)


### Features Left to Implement

- Another coverters for other values.

## Testing 


## Functionality testing

I used Mozilla web developer tools and Chrome developer tools throughout the project for testing and solving problems with responsiveness and style issues.

## Compatibility testing

Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices in both Mozilla web developer tolls and Chrome developer tools.

I tested on hardware devices such as: 14' screen HP laptop, 17' screen Asus laptop, 27' hp monitor, Samsung s20fe, Samsung s7edge and Samsung Note 10.

## Performance testing

I run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check performance of the website .

![Lighthouse ](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/lighthouse-scr.png)


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

As far I tested I found no bugs.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- Instructions on how to implement modal [Modal](https://www.youtube.com/watch?v=XH5OW46yO8I)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 
](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/colors-scr.png)
