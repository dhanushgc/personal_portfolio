/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhanush",
    title: "Hey, I'm Dhanush",
  subTitle: emoji(
      "Software Developer | Cloud | Data Engineering"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18UbOGrFwX2r-uOInHC55COeySdPamaqt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/dhanushgc",
    linkedin: "https://www.linkedin.com/in/dhanushgc/",
  gmail: "dhanushgc14@gmail.com",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "My Playground",
    subTitle: "PASSIONATE DEVELOPER DEDICATED TO MASTERING EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Building and optimizing backend solutions using Django, Node.js, and Spring Boot for robust application functionality"
    ),
      emoji("⚡ Leveraging cloud platforms like Azure for scalable deployments, integrating Docker and Kubernetes for seamless CI/CD pipelines"),
    emoji(
      "⚡ Implementing comprehensive monitoring and logging solutions using Azure Monitor and Log Analytics for proactive incident management"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
    {
       skillName: "Python",
       fontAwesomeClassname: "fab fa-python"
    },
    {
       "skillName": "Django",
       "fontAwesomeClassname": "fas fa-server"
        },
        {
            "skillName": "Java Spring Boot",
            "fontAwesomeClassname": "fab fa-java"
        },
        {
            "skillName": "Rest API",
            "fontAwesomeClassname": "fas fa-code"
        },

    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
        },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
        fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker/Kubernetes",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University Longbeach",
      logo: require("./assets/images/csulblogo.jfif"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - Present",
      desc: "Courses :",
      descBullets: [
          "Advanced Programming, Software Engineering, Advanved Algorithms",
          "Distributed Computing, Software Maintenance, Computer Architecture",
          "Artificial Intelligence, Pattern Recognition, Computer Simulation"
          
      ]
    },
    {
        schoolName: "Visvesvaraya Technological University",
      logo: require("./assets/images/vtulogo.jfif"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - August 2021",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
          Stack: "Backend / API", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
        progressPercentage: "80%"
    },
    {
        Stack: "Frontend",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
    experience: [
    {
      role: "Building Event Manager",
      company: "Associated Students Inc. ",
      companylogo: require("./assets/images/ASI logo.jpg"),
      date: "Jan 2024 – Present",
            desc: "Coordinated event management using Excel for scheduling, tracking resources, and ensuring smooth operations within the university's Student Union building."
    },
    {
      role: "Senior Analyst",
      company: "Ernst & Young",
      companylogo: require("./assets/images/eylogo.png"),
      date: "June 2022 – July 2023",
        desc: "Developed high-throughput systems using AWS SDK and S3, boosting data processing capacity by 10x and reducing response times by 40% for critical financial transactions. Built Redis-cached microservices and optimized SQL, enhancing system performance and cross-functional collaboration."

    },
    {
      role: "System Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosyslogo.png"),
      date: "Sep 2021 – June 2022",
        desc: "Engineered automated data pipelines with Azure Logic Apps and Python, reducing manual effort by 50% and increasing data accuracy. Established monitoring and logging with Azure Monitor, improving system stability and response times by 20%."
    },
    {
      role: "Data Analyst Intern",
      company: "Exposys Data Labs",
      companylogo: require("./assets/images/exposyslogo.jpg"),
      date: "June 2020 – Aug 2020",
        desc: "Applied unsupervised clustering for better customer segmentation, improving accuracy by 20%. My strategic use of feature engineering and Python for predictive modeling enhanced the precision of data analysis, enabling more targeted insights."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
    projects: [
    {
            image: require("./assets/images/HPA.jpg"),
            projectName: "Kubernetes Pod Autoscaler (HPA) using Custom Metrics",
            projectDesc: "Developed a custom Kubernetes Pod Autoscaler integrated with Prometheus, enabling real-time scaling based on message traffic, reducing infrastructure costs by 25% and enhancing system performance under high- load conditions.",
       footerLink: [
       {
             name: "View Project",
               url: "https://github.com/itsaravindanand/CECS_574_Custom_Metrics_Driven_HPA_in_Kubernetes"
        }
                //  you can add extra buttons here.
       ]
    },
    {
            image: require("./assets/images/ETL.png"),
            projectName: "Cloud-Based ETL Pipeline for YouTube Data Analytics",
        projectDesc: "Built a scalable ETL pipeline on AWS, utilizing EC2, S3, Glue, and Lambda for processing over 1GB of YouTube data with multi - language support, integrating Amazon Athena for rapid insights and boosting processing efficiency by 20%.",
       footerLink: [
       {
             name: "View Project",
               url: "https://github.com/dhanushgc"
        }
                //  you can add extra buttons here.
       ]
    },
    {
            image: require("./assets/images/invoice-extration.png"),
            projectName: "AI-Powered Invoice Extraction with Vector Embeddings",
        projectDesc: "Engineered an AI-driven invoice extraction solution leveraging Google Gemini and Python, enhancing data accuracy by 40% and eliminating manual templates with vector embeddings, ensuring scalable, efficient data processing",
       footerLink: [
       {
             name: "View Project",
               url: "https://github.com/dhanushgc/GenAI_Learning"
        }
                //  you can add extra buttons here.
       ]
    },
    {
            image: require("./assets/images/cloud-storage.png"),
            projectName: "Asynchronous File Upload System to Cloud Storage",
            projectDesc: "This project is an Asynchronous File Upload System designed to efficiently handle file uploads to cloud storage (Azure Blob Storage).",
       footerLink: [
       {
             name: "View Project",
               url: "https://github.com/dhanushgc/Asynchronous-File-Upload-System-to-cloud-storage/tree/master"
        }
                //  you can add extra buttons here.
       ]
    },
    {
       image: require("./assets/images/PD_MRI_Class.png"),
            projectName: "Novel Approach to Parkinson’s Disease Classification Using MRI Images",
            projectDesc: "Implemented XGBoost, SVM, and Random Forest classifiers to classify PD from MRI images with 78% accuracy. Applied wavelet transformations and GLCM techniques to enhance MRI image quality and extract diagnostic features.",
       footerLink: [
       {
             name: "View Project",
             url: "https://github.com/dhanushgc/PPMI-Parkinson-s-Disease-Classification-Using-MRI-Images"
        }
                //  you can add extra buttons here.
       ]
    },
    {
       image: require("./assets/images/ILPproject.png"),
       projectName: "Enhancing Instruction Level Parallelism",
            projectDesc: "Enhancing instruction-level parallelism through loop unrolling and dynamic memory disambiguation for high-performance processors.",
       footerLink: [
       {
             name: "View Project",
             url: "https://github.com/guru449/EnhanceInstructionLevelParallelism/tree/code_update"
        }
                //  you can add extra buttons here.
       ]
    },
    {
      image: require("./assets/images/disneyproject.png"),
          projectName: "Disney Clone Application",
          projectDesc: "Engineered a React.js and Redux-based clone of Disney+, integrating Firebase for a fully functional, user-centric experience.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/dhanushgc/disney-plus-clone"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/anxietyproject.png"),
        projectName: "Anxiety Prediction during Stressful Scenarios",
        projectDesc: "Developed a predictive model with 83% accuracy using machine learning algorithms to forecast anxiety levels, incorporating A/B testing for enhanced reliability.",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/9788151"
        }
      ]
    }
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
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "",
      image: require("./assets/images/azurecertificate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/DhanushGc-5179/B13D94D1DD32D720?sharingId=31C864530D90C853"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle:
        "",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/6EVSVAX9WZEB"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 562-254-7360",
  email_address: "dhanushgc14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
