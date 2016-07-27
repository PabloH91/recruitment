Recruitment Song App Tests
==================

The test consists in building an application that searches for songs. You will be provided with the json file from which you can obtain the songs information as well as the creative file. **IMPORTANT**: Complete the modules specified in a previous sent email and in the roles section of this file. If you can complete all modules and it will be a great plus.

#### Roles
You probably are applying to one of the several open positions we may have at Hangar. Please take a look at the following list of roles and the description of what needs to be completed in order to meet our requirements and expectations.

### Jr. Frontend Developer
Please complete the list view and the detail view of the music app. Any additional and optional requirements you met will be advantage for you when compared to other candidates. Please use the technologies indicated by your interviewers (VanillaJS, Angular, CSS, etc).

### Sr. Frontend Developer
Please complete all the explicit requirements, visual and functional. Any additional and optional requirements you met will be advantage for you when compared to other candidates. Please use the technologies indicated by your interviewers (VanillaJS, Angular, CSS Frameworks, Templating Systems, etc).

### Motion Frontend Developer
Please complete all the views present on the application. Please include the animations that you think would benefit the application in one way or another. Any aditional and optional requirements you met will be advantage for you when compared to other candidates. Please use the technologies indicated by your interviewers (VanillaJS, Greensock libraries, CSS Animations, Jade, etc).

### Jr. Backend Developer
Please create the corresponding API that will serve the application with the information it needs. If you are applying for a specific backend flavor (Wordpress, Drupal, .NET) please make sure build the solution using that technology.

### Sr. Backend Developer
Please create the corresponding API that will serve the application with the information it needs. Please also improve the implementation as much as possible. For example, integrate the app with the Youtube API so the related videos of a selected track can be easily displayed. If you are applying for a specific backend flavor (Wordpress, Drupal, .NET) please make sure build the solution using that technology.

### Full Stack Developer
Please complete both parts of the application, the frontend as well as the backend. Please take a look at the previous roles and do you best to implement as much as possible.


#### App. Requirements `(*)` `Optionals`
1. Create a layout based on the PSD and the fonts found under the [assets] folder.
2. It must be Responsive
3. Use the least amount of images possible. `(*)` 
4. Buttons and labels adapt to its content `(*)`
5. Use a real service for the songs `(*)`

### How to start the json-server
You will need to start a fake [json-server]. Find all the info of how to use this module in the npm or github page. Then grap the [db/song.json] file and put it some where to start the server as follow:

`json-server --watch db/songs.json`

    URL: [http://localhost:3000/songs?q=beatles]

    Example:

        [
          {
            "url": "spotify:track:7linrtr5px7i3r96mducjw",
            "id": 8815585,
            "songname": "twist and shout",
            "artistid": 1833,
            "artistname": "beatles",
            "albumid": 5619520,
            "albumname": "beatles"
          },
          {
            "url": "spotify:track:7linrtr5px7i3r96mducjw",
            "id": 8815585,
            "songname": "i saw her standing there",
            "artistid": 1833,
            "artistname": "beatles",
            "albumid": 5619520,
            "albumname": "beatles"
          },
          ...
        ]    
#### Module Login Functionality `(*)` `Optionals`
Use native Javascript or any other existing Javascript framework.

* Validate inputs, all required (password - alphanumeric, min: 8 char, max: 24 char, at least on number, special characters allowed: !-_#.+=*%$@)

* Login with social networks `(*)` 

* Remember email next time user enter this page if checkbox was checked `(*)`
 
#### Main Page Funtionality `(*)` `Optionals`
Use native Javascript or any other existing Javascript framework.

* Fill page with songs from service

* Search on submit

* Search on input change `(*)` 

* The [Today] and [Friday] buttons inside of each grid element must work as radiobuttons (meaning, when one is active the other is not).

* The play button will go to a page from which the user can see son details. `(*)` 

 
#### Song Detail Page Funtionality `(*)` `Optionals`
Use native Javascript or any other existing Javascript framework.

* Fill page with song from service

* Manipulate song pause, play and progress `(*)`

-----
#### Notes:
There are no restrictions on the use of plugins or tools that you can use to develop the test.
Adobe Photoshop is the only software you will need to have installed on your machine in order to complete the test.

##### Once you are done, please let us know by sending an email to [hangarcareers@thehangar.cr].

  [http://localhost:3000/songs?q=beatles]: http://localhost:3000/songs?q=beatles
  [assets]: https://github.com/thehangarcr/recruitment/tree/master/assets
  [db/song.json]: https://github.com/thehangarcr/recruitment/tree/master/db/song.json
  [json-server]: https://www.npmjs.com/package/json-server
  [hangarcareers@thehangar.cr]: mailto:hangarcareers@thehangar.cr


