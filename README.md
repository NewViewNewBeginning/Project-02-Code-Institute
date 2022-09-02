# Project-02-Code-Institute

## [View life website in github pages](https://newviewnewbeginning.github.io/Project-02-Code-Institute/?fbclid=IwAR08GFwaCjcxqDqrs54Y8vWdcBJFv4CljcEI5Zlqa5LEJ3RPSNeGcV05ELM)


# Values converter

3 types converters with images under each describing covertion values.
 
Temperature    Celsius <--> Fahrenheit  
 
Length      Meter <--> Feet

Speed     Kilometers/h <--> Miles/h

All functionality is written in pure JavaScript and it's fully responsive to all kinds of devices. 

![Responsice Mockup](!(https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/amIresponsive.png))

## Features 

This site can be used to calculate popular values and in future can be filled with more conversion units to gain more users and be more advanced with possibilities of conversion. 

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

  - When you type number value into input and convert it result will show just under input field and picture will also change depand of result or type of value converted. 

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
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnewviewnewbeginning.github.io%2FProject-02-Code-Institute%2F%3Ffbclid%3DIwAR08GFwaCjcxqDqrs54Y8vWdcBJFv4CljcEI5Zlqa5LEJ3RPSNeGcV05ELM)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnewviewnewbeginning.github.io%2FProject-02-Code-Institute%2F%3Ffbclid%3DIwAR08GFwaCjcxqDqrs54Y8vWdcBJFv4CljcEI5Zlqa5LEJ3RPSNeGcV05ELM&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pl-PL)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 10 functions in this file.
      - Function with the largest signature takes 1 arguments, while the median is 1.
      - Largest function has 22 statements in it, while the median is 8.
      - The most complex function has a cyclomatic complexity value of 8 while the median is 2.5.

### Unfixed Bugs

There is 1 warning which not causing any problems or bugs.  
"One warning
41	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (reset, swapSide, convert)"

## Deployment

The project was deployed on GitHub Pages. I used VS Code as a development environment where I commited all changes to git version control system.
I used push command in VS Code to save changes into GitHub.

To deploy a project I had to:

- Log in to GitHub and click on repository to deploy ([Project-02](https://github.com/NewViewNewBeginning/Project-02-Code-Institute))
- select `Settings` and find GitHub Pages section at the very bottom of the page
- from source select `none` and then `Milestone-Projects` branch.
- click `save` and page was deployed after auto-refresh.
  > Your site is published at https://github.com/NewViewNewBeginning/Project-02-Code-Institute/

To run localy:

- Log in to GitHub and click on repository to download ([Project-02](https://github.com/NewViewNewBeginning/Project-02-Code-Institute))
- select `Code` and click Download the ZIP file.
- after download you can extract the file and use it in your local environment

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([Project-02](https://github.com/NewViewNewBeginning/Project-02-Code-Institute)) into your github account.


## Credits 

- Ideas and knowledge library:

  - [w3schools.com](https://www.w3schools.com)

  - [css-tricks.com](https://css-tricks.com/)

  - [developer.mozilla.org/](https://developer.mozilla.org/)

### Content 

- How to implement modal [Modal](https://www.youtube.com/watch?v=XH5OW46yO8I)
- The icon in the header is taken from [Font Awesome](https://fontawesome.com/)
- 

### Media

- The photos used under converters are from [Pixabay](https://pixabay.com/)

- Fonts [Google fonts - Lato](https://fonts.google.com/)

- Colors used 

![Colors](https://github.com/NewViewNewBeginning/Project-02-Code-Institute/blob/main/assets/readme-img/colors-scr.png)




# Technologies used

### HTML5

- As a structure language.

### CSS

- As a style language.

### JavaScript

- As a script to give functionality for burger menu.

### Font Awesome

- As an icon library for a social links.

### Google fonts

- As a font resource.

### GitHub

- As a software hosting platform to keep project in a remote location.

### Git

- As a version-control system tracking.

### VScode

- As a development hosting platform.




