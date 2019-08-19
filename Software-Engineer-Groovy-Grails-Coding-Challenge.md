# Coding challenge
This page consists a coding challenge for Software Engineer - Groovy/Grails role at Isentia.

# Purpose
Aim of this test is three fold,

- evaluate your coding abilities 
- judge your technical experince
- understand how you design a solution

# How you will be judged
You will be scored on,

- coding standard, comments and style
- unit testing strategy
- overall solution design
- appropriate use of source control

# Intructions

- Please use Groovy, Grails, and MongoDB
- Candidate should put their test results on a public code repository hosted on Github
- Once test is completed please share the Github repository URL to hiring team so they can review your work
- Use any other third party library or package of your choice if needed

# Challenge - Twitter Search

- Write a simple web application that reads data from Twitter public search APIs 
- Please check the following API documentation from the following URL:

- [Twitter Search API]( https://dev.twitter.com/rest/public/search)
- [Twitter Streaming APIs](https://dev.twitter.com/streaming/overview)


## Details

- Write a web application built using Groovy, Grails, and MongoDB
- On page load the applications should render a search box.  
- The user should be able to enter a `keyword` or `hashtag` in a search box and click on a search button
- The app should return the relevant Tweets without page load
- Use Grails APIs and Ajax to load results on search page
- Store the search results in MongoDB, so next time a `keyword` search is performed against MongoDB data before calling Twitter API
- Deploy the app as a public site using Amazon EC2 instance

Optional, write the unit tests so we can run automated tests.
