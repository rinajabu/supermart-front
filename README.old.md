# supermart-front

# Link to Front end
[Supermart](https://supermart-front.herokuapp.com/)

# Technologies Used
- Backend
    - PHP
    - Laravel
    - PostgreSQL
- Frontend
    - React.js
        - react router
        - useContext (state management)
    - Javascript
    - CSS
        - Bootstrap
        - Material UI

# Struggles
- struggled with PHP and Laravel setting up the back end
- struggling figuring out how to implement redux into my application

# Wins
- converted my promises into async/await with try/catch for error handling with axios requests
- implemented react router
- learned how to pass props into Link for react router using useLocation() in Edit.js
- learned how to redirect after an event using useHistory() in Edit.js and Create.js
- sorted products by descending ID numbers, so the newer products show up on the top
- got filter working and was able to clean up my code breaking larger, repeating code into components
- got more comfortable passing props down more than one level deep, i do so from my App > Read > Product components, will try to refactor my code to add state to my useContext to avoid the deep passing of props down
- got useContext, adding to shopping cart, removing from shopping cart, and "buying" functionality from this article => [CleverProgrammer](https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458)
    - i did learn a lot about implenting useContext for state management and i had to rework some things to get it to work with data pulled from my backend API, so i did run into some issues since they were just hard coding data into their project
    - i did also have to convert my price property to a number since i had initialized it as a string in my backend model to get the subtotal working correctly

# Things to Work On
- I would like to make it so repeat items in my cart, group together instead of rendering separately
- Getting auth working
    - able to get login and sign up working on the back end, need to connect it to my front end somehow; gonna hop in TA hours
- Moving state that I use in multiple components into my useContext like my products