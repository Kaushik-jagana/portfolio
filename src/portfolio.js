/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "David Rakosi",
  title: "Hi all, I'm Kaushik ",
  subTitle: 
    "A passionate Full Stack Developer 🚀 gaining experience of designing and building Web applications with cool libraries and frameworks."
  ,
  resumeLink: "https://drive.google.com/file/d/1IIU7nH4Oxo1EnVL2DmvfPliFJXvPgWcK/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kaushik-jagana",
  linkedin: "https://www.linkedin.com/in/kaushik-jagana-4991021bb/",
  gmail: "jaganakaushik@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/profile.php?id=100011616216335",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/bnkvkr/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ,
    "⚡ Build scalable and robust full-stack applications from inception to deployment",

      "⚡ Love crafting elegant solutions to complex problems through competitive programming."
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    { 
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "INDIAN INSTITUTE OF TECHNOLOGY PATNA",
      logo: "https://th.bing.com/th/id/OIP.fW6eR60qb76OC15vNZsfiwHaHQ?pid=ImgDet&rs=1",
      subHeader: "Bachelors of Technology in Metallurgical and Materials Engineering ",
      duration: "July 2019 - May 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      
    }
  ],
  display : true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Javascript", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ReactJs",
      progressPercentage: "80%"
    },
    {
      Stack: "AngularJs",
      progressPercentage: "85%"
    },
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Java",
      progressPercentage: "70%"
    }, {
      Stack: "MySQL",
      progressPercentage: "80%"
    },
    {
      Stack: "MongoDb",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Brane Enterprises",
      companylogo: require("./assets/images/brane.jpg"),
      date: "July 2023 – Present",
      // desc:
      //   "Changing lives of developers one line of code at a time.",
      descBullets: [
        " Engineered a dynamic scripting solution to support and integrate any user-provided UI with the companys platform.",
        " Revamped Windows Canvas App by developing new features and fixing critical bugs.",
        " Significantly enhanced our platform’s performance and user experience by resolving bugs using AngularJS.",
        " Skills: Flutter, NodeJs, AngularJS"
      ]
    },
    // {
    //   role: "Product Owner (PSD2)",
    //   company: "Erste Bank",
    //   companylogo: require("./assets/images/ersteLogo.jpg"),
    //   date: "July 2019 – September 2020",
    //   desc:
    //     "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    // },
    // {
    //   role: "Junior Information Security & Systems Representative",
    //   company: "Vodafone",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "PROJECTS",
  subtitle: "SOME PROJECTS THAT I HAVE MADE PERSONALLY",
  projects: [
    {
      image: require("./assets/images/Tourly.png"),
      projectName: "Tourly",
      projectDesc: "A fully Functional CRUD based tourism blog website where users can upload different places they have visited and can also give reviews to places where others have visited",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tourly.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Bhejo.png"),
      projectName: "Bhejo",
      projectDesc: "A fully-functional CRUD-based e-commerce website designed for students to buy and sell secondhand items within the campus community.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bhejo.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/Generator.png"),
      projectName: "Transcript and Marksheet Generator",
      projectDesc: "A interactive website which is used to generate Transcripts and Marksheets of the Students",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://transcript-marksheet.onrender.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "9381626916",
  email_address: "jaganakaushik@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
