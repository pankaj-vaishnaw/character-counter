# index.html
inthis first we have a container that is div container and inside this div container we have <h2> and <textarea> for typing the text and also given the length of 50 maximmum
then we have second div that is for counting the number of character and also for remaining character 

# index.js
in this file we are getting the elements by thier id which is textarea and two span tags
then we have added the event listener which is keyup and it will call the fuction updatevalue 
then we have written the function  which contains  dom manipulation 
first it will update  counter value with innerText 
then it will change the remaining character based on typing the cahracter 