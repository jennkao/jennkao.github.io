/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<div class="role-text">%data%</div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLcontactsStart = '<ul id="contacts" class="flex-box"></ul>';
var HTMLmobile = '<li class="flex-item"><span class="contact-text">mobile</span><span class="contactInfo-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="contact-text">email</span><span class="contactInfo-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contact-text">twitter</span><span class="contactInfo-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contact-text">github</span><span class="contactInfo-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="contact-text">blog</span><span class="contactInfo-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="contact-text">location</span><span class="contactInfo-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">SKILLS AT A GLANCE:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="black-text">%data%</span></li>';

var HTMLinterestsStart = '<h3 id="skills-h3">INTERESTS:</h3><ul id="interests" class="flex-box"></ul>';
var HTMLinterests = '<li class="interest-text"><span class="black-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class = "work"><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class = "project"><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div><br>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLvolunteerStart = '<div class="volunteer-entry"></div>';
var HTMLvolunteerPos = ' - %data%</a>';
var HTMLvolunteerOrg = '<a href="#">%data%';
var HTMLvolunteerLoc = '<div class="location-text">%data%</div>';
var HTMLvolunteerDates = '<div class="date-text">%data%</div>';
var HTMLvolunteerDesc = '<p class= "volunteer"><br>%data%</p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
// $(document).ready(function() {
//   $('button').click(function() {
//     var $name = $('#name');
//     var iName = inName($name.text()) || function(){};
//     $name.html(iName);
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
// clickLocations = [];
// function logClicks(x,y) {
//   clickLocations.push(
//     {
//       x: x,
//       y: y
//     }
//   );
//   console.log('x location: ' + x + '; y location: ' + y);
// }

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x , y);
// });


  