var name = "JENN KAO";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Research Assistant and Aspiring Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var bio = {
	"name": "Jenn Kao",
	"role": "Research Assistant/Aspiring Software Developer",
	"contacts": {
		"email": "jennkao92@gmail.com",
		"github": "jennkao",
		"location": "Cambridge, MA, USA"
	},
	"pictureUrl": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAk_AAAAJGExYjBjMzg0LWU5MzAtNDFhNy05NWJkLTJhNTE5NWNiNDMxMA.jpg",
	"welcomeMessage": "Hey there, I am a research assistant working in Boston and I am exploring \
	software development. This is my first project, and I am looking forward to many more!",
	"skills": ["bench science", "research", "project management", "programming", "helping people solve problems"],
	"interests": ["cooking with friends", "analogue photography", "travel", "running", "reading non-fiction", "podcasts/music", "conversations about current events"]
}

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPic, formattedMsg);
$("#topContacts").append(HTMLcontactsStart);
$("#contacts").append(formattedEmail, formattedGithub, formattedLocation);


$("#header").append(HTMLskillsStart);
var formattedSkill;
for (var i=0; i < bio["skills"].length; i++) {
	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}

$("#header").append(HTMLinterestsStart);
var formattedInterest;
for (var i=0; i < bio["interests"].length; i++) {
	formattedInterest = HTMLinterests.replace("%data%", bio.interests[i]);
	$("#interests").append(formattedInterest);
}

var education = {
	"schools": [
		{
			"name": "MIT",
			"location": "Cambridge, MA, USA",
			"degree": "B.S. in Biology",
			"dates": "09/10-06/14", 
			"url": "http://web.mit.edu/"
		},
		{	"name": "Shanghai American School",
			"location": "Shanghai, CHINA",
			"degree": "High school diploma",
			"dates": "09/06 - 06/10",
			"url": "http://www.saschina.org/en"
		}
	],
	"online courses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "06/16",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Javascript",
			"school": "CodeAcademy",
			"dates": "06/16", 
			"url": "https://www.codecademy.com/learn/javascript"
		}
	]
}

var work = {
	"jobs" : [
		{
			"position": "Research Assistant",
			"employer": "The Alt Lab",
			"location": "Boston, MA, USA",
			"dates": "07/14 - present",
			"url": "http://www.idi.harvard.edu/investigators_research/investigator/alt_lab/",
			"description": "HELLO"
		}, 
		{
			"position": "Undergraduate Researcher",
			"employer": "The Lodish Lab",
			"location": "Cambridge, MA, USA",
			"dates": "09/13 - 05/14",
			"url": "http://lodishlab.wi.mit.edu/",
			"description": ""
		},
		{
			"position": "Intern",
			"employer": "Hospital of Special Surgery Women's Sports Medicine Center",
			"location": "New York City, NY, USA",
			"dates": "06/13 - 08/13",
			"url": "https://www.hss.edu/womens-sports.asp",
			"description": "Co-drafted a retrospective study paper studying the clinical outcomes of patients \
			who have undergone patellofemoral replacement surgery for isolated patellofemoral arthritis.",
		},
		{
			"position": "Teaching Assistant for 7.02 (Experimental Biology)",
			"employer": "MIT Department of Biology",
			"location": "Cambridge, MA, USA",
			"dates": "08/12 - 12/12",
			"url": "http://student.mit.edu/catalog/m7a.html#7.02",
			"description": "Selected by class instructors to provide advice and \
			assistance to students during bi-weekly 3-4 hr lab sessions. Facilitated \
			greater understanding of course material by discussing experimental design,\
			explaining difficult biological concepts, reviewing relevant literature, and \
			compiling exam study guides."
		},
		{
			"position": "Project Manager",
			"employer": "MIT STEP Lab",
			"location": "Cambridge, MA, USA",
			"dates": "07/12 - 08/12",
			"url": "http://education.mit.edu/",
			"description": ""
		},
		{
			"position": "Summer Fellow",
			"employer": "Saha Global",
			"location": "Tamale, GHANA",
			"dates": "06/12",
			"url": "http://sahaglobal.org/",
			"description": ""
		},
		{
			"position": "Undergraduate Researcher",
			"employer": "The Bhatia Lab",
			"location": "Cambridge, MA, USA",
			"dates": "02/11 - 05/12",
			"url": "https://lmrt.mit.edu/",
			"description": ""
		}
	]
}

var volunteer = {
	"positions": [
		{
			"position": "Academic Mentor",
			"organization": "Breakthrough Greater Boston",
			"location": "Cambridge, MA, USA",
			"dates": "11/14 - present",
			"url": "http://www.breakthroughgreaterboston.org/",
			"description": ""
		},
		{
			"position": "Sun Safety Educator",
			"organization": "Dana Farber Cancer Institute Sun Safety Program",
			"location": "Boston, MA, USA",
			"dates": "07/15 - present",
			"url": "http://www.dana-farber.org/About-Us/Community-Outreach/Dana-Farber-s-Sun-SafetySkin-Cancer-Prevention-Program.aspx",
			"description": ""
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "My Resume",
			"dates": "06/16",
			"description": "I created an interactive resume using Udacity's Javascript Basics course. This is it!",
			"images": ""
		}
	]
}


function displayWork(){
	var workArray = work["jobs"];
	for (x in workArray) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer;
		var formattedTitle;
		var formattedDate;
		var formattedLocation;
		var formattedDescription;
		formattedEmployer = HTMLworkEmployer.replace("%data%", workArray[x]["employer"]).replace("#", workArray[x]["url"]);
		formattedTitle = HTMLworkTitle.replace("%data%", workArray[x]["position"]);
		formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		formattedDate = HTMLworkDates.replace("%data%", workArray[x]["dates"]);
		formattedLocation = HTMLworkLocation.replace("%data%", workArray[x]["location"]);
		formattedDescription = HTMLworkDescription.replace("%data%", workArray[x]["description"]);
		$(".work-entry:last").append(formattedDate, formattedLocation, formattedDescription);
	}
}
displayWork();

projects.display = function() {
	var projectsArray = projects["projects"];
	for (x in projectsArray) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle;
		var formattedDate;
		var formattedDescrip;
		var formattedImage;
		formattedTitle = HTMLprojectTitle.replace("%data%", projectsArray[x]["title"]);
		formattedDate = HTMLprojectDates.replace("%data%", projectsArray[x]["dates"]);
		formattedDescrip = HTMLprojectDescription.replace("%data%", projectsArray[x]["description"]);
		formattedImage = HTMLprojectImage.replace("%data%", projectsArray[x]["images"]);
		$(".project-entry:last").append(formattedTitle, formattedDate, formattedDescrip, formattedImage);
	}
}
projects.display();

education.display = function() {
	var educationArray = education["schools"];
	for (x in educationArray) {
		$("#education").append(HTMLschoolStart);
		var formattedName;
		var formattedDegree;
		var formattedLocation;
		var formattedDates;
		var formattedNameDegree;
		formattedName = HTMLschoolName.replace("%data%", educationArray[x]["name"]).replace("#", educationArray[x]["url"]);
		formattedDegree = HTMLschoolDegree.replace("%data%", " " + educationArray[x]["degree"]);
		formattedDates = HTMLschoolDates.replace("%data%", educationArray[x]["dates"]);
		formattedLocation = HTMLschoolLocation.replace("%data%", educationArray[x]["location"]);
		formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree, formattedLocation, formattedDates);
	}
	var onlineEducationAr = education["online courses"];
	$("#education").append(HTMLonlineClasses);
	for (x in onlineEducationAr) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle; 
		var formattedSchool;
		var formattedDates;
		formattedTitle = HTMLonlineTitle.replace("%data%", onlineEducationAr[x]["title"]).replace("#", onlineEducationAr[x]["url"]);
		formattedSchool = HTMLonlineSchool.replace("%data%", onlineEducationAr[x]["school"]);
		formattedDates = HTMLonlineDates.replace("%data%", onlineEducationAr[x]["dates"]);
		formattedSchoolTitle = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedSchoolTitle, formattedDates);
	}
}
education.display();

volunteer.display = function() {
	var volunteerArr = volunteer["positions"];
	for (x in volunteerArr) {
		$("#volunteer").append(HTMLvolunteerStart);
		var formattedvPos;
		var formattedvOrg;
		var formattedvDates;
		var formattedvLoc;
		var formattedvDesc; 
		var formattedvPosOrg;
		formattedvPos = HTMLvolunteerPos.replace("%data%", volunteerArr[x]["position"]);
		formattedvOrg = HTMLvolunteerOrg.replace("%data%", volunteerArr[x]["organization"]).replace("#", volunteerArr[x]["url"]);
		formattedvDates = HTMLvolunteerDates.replace("%data%", volunteerArr[x]["dates"]);
		formattedvLoc = HTMLvolunteerLoc.replace("%data%", volunteerArr[x]["location"]);
		formattedvDesc = HTMLvolunteerDesc.replace("%data%", volunteerArr[x]["description"]);
		formattedvPosOrg = formattedvOrg + formattedvPos;
		$(".volunteer-entry:last").append(formattedvPosOrg, formattedvDates, formattedvLoc, formattedvDesc);
	}
}
volunteer.display();

var locString ='<div id="content">'+'<p>%data%</p>'+'</div>';

function initMap() {
    var LatLng = [
    	['Cambridge, MA, USA', {lat: 42.373616, lng: -71.109734}],
    	['Boston, MA, USA', {lat: 42.360082, lng: -71.05888}],
    	['Shanghai, China', {lat: 31.230416, lng: 121.473701}],
		['Tamale, Ghana', {lat: 9.432919, lng: -0.848452}],
		['New York City, NY, USA', {lat: 40.712784, lng: -74.005941}]
		];

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 29.152161, lng: 9.879456},
        zoom: 2
    });

	var markers;
	var infowindow;
    for (var i=0; i < LatLng.length; i++) {
    	markers = new google.maps.Marker({
    		position: LatLng[i][1],
    		map: map,
    		title: LatLng[i][0]
    	});

    	infowindow = new google.maps.InfoWindow({
    		content: locString.replace("%data%", LatLng[i][0])
    	});

    	markers.addListener("click", function() {
    		var markers2 = markers;
    		var infowindow2 = infowindow;
    		function openWindow() {
    			return infowindow2.open(map, markers2);
    		}
    		return openWindow;
    	}());
    }
}
