# Sprint 8 Project: Automated UI Testing (Urban Routes App)

    DESCRIPTION
    Utilizing WebdriverIO to run automated UI tests to check the functionality of the Urban Routes App.


    OBJECTIVE
    To improve testing efficiency, accuracy, and speed by automating repetetive and time-consuming manual testing tasks.


    SETUP
    1. Connect your GitHub account to TripleTen
        -Click the "Link GitHub account" button in the widget at the top of the Project description page on the TripleTen platform
        -Confirm that you want to link your GitHub account once a new browser tab opens

    2. Clone the new repository to local computer
        -Open preferred terminal emulator (e.g. Git Bash)
        -Create a directory to store all projects:
            cd ~               # make sure you're in your home directory
            mkdir project8     # create a folder called project8
            cd project8        # change directory into the new project8 folder
        -Clone the repo 
            # if you are using HTTPS
            git clone https://github.com/username/reponame.git
            # if you are using SSH
            git clone git@github.com:username/reponame.git

    3. Inside the project8 folder/hm08-qa-us, run the npm install command to the create the project files.

    4. Run the npm run wdio command for the first time to ensure the createAnOrder.e2e.js file contains the correct test templates located in the test/specs folder. 


    CONFIGURATION
    1. Inside the new repository hm08-qa-us folder, open package.json file. Under devDependencies, ensure chromedriver is the the same version as your current Google Chrome browser. If not, update accordingly.

    2.Launch the Urban Routes server to generate a new URL link. Inside the hm08-qa-us folder, open wdio.config.js file. Replace the base URL with the new URL link to declare the URL in one place and then use it throughout the whole project.

    3.Inside the the wdio.config.js, add two slashes(//) in front of the headless arguments for both Chrome and Firefox to see the test run on the respective browsers(optional). Remove slashes and update to initial state prior to project submission to run tests in headless mode.
    

    TEST EXECUTION
    1. Open preferred terminal emulator (e.g. Git Bash)
    2. To run the test suites, run the npm run wdio command. Make sure you are in the project8/hm08-qa-us folder.   Note: Tests will run on the browsers if the headless mode is disabled.
    3. Tests will take time to finish. Please ensure all tests have finished to obtain results.
    4. If the tests run smoothly, results will return as PASS with a check mark on each test case. Otherwise, check the code and update as necessary. 


    TEST CASES
    1. Check the user can set an address in the "From" and "To" fields.
    2. Check the user can select the Supportive plan. 
    3. Check the user can fill in the phone number field.
    4. Check the user can add a credit card. 
    5. Check the user can write a message for the driver.
    6. Check the user can order a blanket and handkerchiefs.
    7. Check the user can order 2 ice creams.
    8. Check the car search modal appears once the order is placed.
    9. Check the "Waiting for the driver..." info appears in the car search modal once the order is placed.


    TEST REPORT
    Number of tests: 9
    Number of PASSES: 9 
    Number of FAILS: 0 
    Success rate: 100%


    TECHNOLOGIES AND TECHNIQUES USED:
    Git
    -A version control system used to track changes throughout the history of a project and saves the state of a repository at different points in time. 

    Git Bash
    -A terminal emulator that let's you communicate with Git, the version control system.

    GitHub
    -A platform used for collaborative software engineering, built on top of the Git version control system.

    Visual Studio Code
    -A coding editor from Microsoft used to work on test scripts that can also connect to GitHub.

    Node.js
    -A cross-platform, Javascript runtime environment used to run Javascript code outside the browser.

    NPM
    -The default package manager for Node.js used to manage packages or ready-to-use codes.

    WebdriverIO
    -An automation framework used for automated UI testing which provides a simple, concise syntax for writing test scripts.

    CSS Selectors 
    -A special kind of text request to help find an element on a webpage.

    XPath Locators
    -Another type of locator used for navigating elements on a webpage. It works by describing the location of   elements relative to the document tree.

    Google Chrome
    -A web browser developed by Google used for running tests.

    Mozilla FireFox
    -A web browser developed by Mozilla used for running tests.

    DevTools
    -A set of web developer tools built directly into the Google Chrome browser used to help developers test, modify and debug codes.

    Mocha
    -A JavaScript test framework for Node.js programs used for asynchronous testing.

    JavaScript Modules
    -Files containing related codes to share and receive functionalities across different modules. 


    CODING STYLE
    Below are the style conventions followed in the code: 

    -Used camelCase format for naming variables and functions
    -Named variables, functions, and modules to reveal intent
    -Used arrow functions "=>" when defining classes or methods
    -Used semicolons at the end of each statement
    -Used const keyword for declaring variables that will never be re-assigned, and let keyword otherwise
    -Used describe..it functions to structure and organize tests
    -Used CSS and XPath expressions to identify specific elements
    -Used setValue method to handle input fields with WebdriverIO
    -Used click method to handle buttons, checkboxes, and radio buttons with WebdriverIO
    -Used waitForDisplayed and waitForClickable commands to wait for webpage elements
    -Implemented the Page Object Model using the page.js file
    -Implemented the module.exports object to export functionality from a module using the helper.js file
    -Used the require function to access and use selectors defined in a module within other tests or files
    -Used expect function with to.Be matcher to compare expected values with actual values received