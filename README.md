# Homework  - Building a Clock using React (Lesson 2)

This was a very simple web app that shows the local time - https://cazyw.github.io/LS-Pro-React-II/

It was a homework exercise from a Lambda School online course that went through Javascript, Node and React (https://lambdaschool.com/). 
The course has since been discontinued.

## Overview and Discussion

The objective of the lesson was to learn about state, the use of the `Date` object and how to update the state by time increments. 
We had to display the current time as live. In order to challenge myself I decided to not only display the time in text but also to display it by creating a 'flip clock'. I used images for each digit and changed the image as necessary each second.

Currently there's an issue with edge times. For example when the seconds change from 59 to 00, the minute digit card does not also change until the seconds have shifted to 01.
