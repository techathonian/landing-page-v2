import {
  HeroContent,
  CoreComponent,
  TrackComponent,
  EventComponent,
  UnderstandTechathonComponent,
  FaqComponent,
  TestimonialComponent,
  FooterComponent,
  CourseIntroComponent,
  CodingTracks,
  NoCodingTracks,
  AboutUsComponent,
  ProgrammesComponent,
  GuidePrincipleComponent,
  KeyPersonComponent,
  AboutEventComponent,
  CourseDetailsComponent
} from "./types";

export const HEROCONTENT: HeroContent = {
  id: "1",
  title: "Transition into Tech Seamlessly",
  body: "Techathon is your gateway to a thriving career in tech. With thousands of individuals empowered, we take pride in nurturing aspiring talents and transforming them into seasoned practitioners in various tech domains.",
  bullet1: "Seasoned mentors",
  bullet2: "New tech developments",
  bullet3: "Carry out realtime projects",
  bullet4: "Work in functional team"
};

export const CORECOMPONENT: CoreComponent = {
  id: "1",
  title: "Core Components",
  content:
    "At Techathon, we've meticulously designed our online academic platform to empower individuals on their journey into the dynamic world of tech. Our holistic approach comprises three fundamental components that form the backbone of our mission: Kickstarter, Mentorship, and Open Source.",

  features: [
    {
      id: "1",
      title: "KICKSTARTER",
      image: "https:www.img.com",
      subtitle: "No prior skills or knowledge is needed",
      body: "No prior skills needed. In transitioning, you will be tutored from the very basics to the required standard of knowledge & skill needed.",
    },
    {
      id: "2",
      title: "KICKSTARTER",
      image: "https:www.img.com",
      subtitle: "No prior skills or knowledge is needed",
      body: "No prior skills needed. In transitioning, you will be tutored from the very basics to the required standard of knowledge & skill needed.",
    },
  ],
};

export const TRACKCOMPONENT: TrackComponent = {
  id: "1",
  title: "Tracks",
  content:
    "We understand that the path into tech is as diverse as the industry itself. That's why we offer a wide range of tracks, catering to both coding and non-coding enthusiasts. Whether you're passionate about programming or looking to explore tech from a different angle, we have the perfect track for you",
  tracks: [
    {
      id: "1",
      title: "KICKSTARTER",
      subtitle: "In-demand coding tracks",
      path1: "FRONT END & BACK END",
      coursea: "HTML & CSS",
      courseb: " Javascript",
      coursec: "React JS",
      coursed: "Node JS",
      coursef: "Python + Django",
    },
    {
      id: "2",
      title: "KICKSTARTER",
      subtitle: "In-demand coding tracks",
      path1: "DESIGN",
      path2: "MANAGEMENT",
      path3: " Digital marketing",
      coursea: "Graphic Design ",
      courseb: "Product Design",
      coursec: " Technical writing",
      coursed: "Data Analytics ",
      coursef: " Product Mangement",

    },
  ],
};

export const EVENTCOMPONENT: EventComponent = {
  id: "1",
  header: "EVENTS",
  title:
    "Learning extends beyond the classroom. We believe in providing a vibrant and enriching learning experience, which is why we offer a range of events to keep you engaged, inspired, and connected with the tech community.",
  content: [
    {
      id: "1",
      image: "https://www.imges.com",
      subtitle: "Weekly quiz",
      description:
        "Challenge yourself and put your newfound skills to the test with our weekly quizzes.",
    },
    {
      id: "2",
      image: "https://www.images.com",
      subtitle: "Community calls",
      description:
        "Tech is all about community, and our regular community calls are the perfect opportunity to connect with fellow learners and mentors.",
    },
    {
      id: "3",
      image: "https://www.pictures.com",
      subtitle: "Career talks",
      description:
        "Unlock the secrets to success in tech by attending our career talks featuring renowned experts from various fields.",
    },
  ],
};

export const UNDERSTANDTECHATHONCOMPONENT: UnderstandTechathonComponent = {
  title: "What makes Techathon outstanding?",
  body: "At Techathon, we take immense pride in our commitment to delivering an exceptional learning experience. Our platform stands out for several key qualities that make us a premier choice for anyone looking to excel in the world of tech.",
  stickers: [
    {
      id: "1",
      svg: "w3.svg.com",
      title: "Hands-on approach",
      description:
        "We believe in learning by doing. Our hands-on approach ensures that you don't just acquire theoretical knowledge, but you also gain practical skills. Through real-world projects, you'll put your learning into action thus prepared for demands of the industry.",
    },
    {
      id: "2",
      svg: "w3.svg.com",
      title: "Real time projects",
      description:
        "Tech is constantly evolving, and so should your skills. We bridge the gap between theory and practice by integrating real-time projects into our curriculum. Stay ahead of the curve by working on projects that reflect the latest industry trends and technologies.",
    },
    {
      id: "3",
      svg: "w3.svg.com",
      title: "Industry expert",
      description:
        "Our commitment to quality education means learning from the best. Our team of industry experts, experienced mentors, and guest speakers bring a wealth of knowledge and practical insights. You'll benefit from their expertise, gaining valuable guidance.",
    },
    {
      id: "4",
      svg: "w3.svg.com",
      title: "Adequate mentorship",
      description:
        "Mentorship is at the core of our mission. We provide you with the guidance and support you need to navigate the complexities of the tech world. Our mentors are dedicated to your growth, offering personalized advice and constructive feedback.",
    },
    {
      id: "5",
      svg: "w3.svg.com",
      title: "Diverse community",
      description:
        "Our diverse community of learners, mentors, and industry professionals is a melting pot of talent, experiences, and cultures. Collaborate, share ideas, and network with peers from around the world, expanding your horizons and opening doors to global opportunities.",
    },
    {
      id: "6",
      svg: "w3.svg.com",
      title: "Fast tracked career",
      description:
        "We don't just educate; we empower. Our programs are designed to fast-track your career in tech. Whether you're aiming for a career switch, promotion, or entrepreneurial venture, our comprehensive training and career support will help you achieve your goals.",
    },
  ],
};

export const FAQCOMPONENT: FaqComponent = {
  id: "1",
  title: "Frequently Asked Questions",
  questions: [
    {
      id: "1",
      question: "Why techhathon?",
    },
    {
      id: "2",
      question:
        "Techathon is your gateway to a thriving career in tech. With thousands of individuals2?",
    },
    {
      id: "3",
      question:
        "Techathon is your gateway to a thriving career in tech. With thousands of individuals3?",
    },
    {
      id: "4",
      question:
        "Techathon is your gateway to a thriving career in tech. With thousands of individuals4?",
    },
    {
      id: "5",
      question:
        "Techathon is your gateway to a thriving career in tech. With thousands of individuals5?",
    },
  ],
  answers: [
    {
      id: "1",
      answer: "answer to question 1",
    },
    {
      id: "2",
      answer: "answer to question 2",
    },
    {
      id: "3",
      answer: "answer to question 3",
    },
    {
      id: "4",
      answer: "answer to question 4",
    },
    {
      id: "5",
      answer: "answer to question 5",
    },
  ],
};

export const TESTIMONIALCOMPONENT: TestimonialComponent = {
  id: "1",
  title: "Hear from our graduates",
  subtitle:
    "Discover the real impact of Techathon through the voices of our satisfied learners. Hear their success stories and experiences, and get inspired to join our thriving tech community.",
  student: [
    {
      id: "1",
      image: "https://emanuelpete/productdesign/techathon.com",
      name: "Emmanuel Pete",
      course: "Product Design",
      title: "Title",
      comment:
        "With thousands of individuals empowered, we take pride in nurturing aspiring talents and transforming them into seasoned practitioners in various tech domains.",
    },
  ],
};

export const FOOTERCOMPONENT: FooterComponent = {
  id: "1",
  title: "Partners",
  partners: [
    {
      id: "1",
      svg: "w3.svg.com/jobbercom",
    },
  ],
  subtitle: "Take the giant leap towards mastering that tech skill",
  description:
    "Take the first step towards an exciting tech journey. Join our vibrant community of learners, mentors, and tech enthusiasts. Let's explore, learn, and innovate together.",
  footer: "FOOTER",
};

//---------------------COURSES PAGE-------------------------////

export const COURSEINTROCOMPONENT: CourseIntroComponent = {
  id: "1",
  title: "We teach \n in-demand Tracks",
  content:
    "Techathon is your gateway to a thriving career in tech. With thousands of individuals empowered, we take pride in nurturing aspiring talents and transforming them into seasoned practitioners in various tech domains.",
};

export const CODINGTRACKS: CodingTracks = {
  id: "1",
  title: "Coding Tracks",
  content:
    "At techathon, we offer a diverse array of coding tracks that cater to your unique interests and career goals. Whether you're passionate about creating visually stunning user interfaces or building the robust back-end systems that power web applications, we have the perfect track for you.",
  courses: [
    {
      id: "1",
      title: "HTML, CSS & Javascript (Front end)",
      content:
        "Master the essentials of HTML for structuring content, CSS for styling, and JavaScript for interactive web experiences. Learn how to create visually captivating and user-friendly websites, setting the stage for a dynamic career in front-end development.",
    },
    {
      id: "2",
      title: "Node Js (Back end)",
      content:
        "Master the essentials of Nodejs, for backend and creating a fullstack funtioning application.",
    },
    {
      id: "3",
      title: "Python + Django (Back end)",
      content:
        "Our Python + Django track is your gateway to back-end development excellence. Dive deep into Python, a versatile and powerful programming language, and harness Django, the high-level web framework known for its efficiency and ease of use. Unlock the ability to build secure and scalable web applications with confidence.",
    },
    {
      id: "4",
      title: "React Js (Front end)",
      content:
        "Explore our React.js track, the library of choice for building modern, interactive web applications. Learn how to create reusable UI components and master the art of responsive web design. With React.js, you'll be at the forefront of the front-end revolution.",
    },
  ],
};

export const NOCODINGTRACKS: NoCodingTracks = {
	id: "1",
	title: "Non-coding Tracks",
	content:
	  "We understand that the tech industry isn't just about coding. It's a vast landscape filled with diverse opportunities for creative minds and problem solvers. Explore our non-coding tracks, each tailored to help you excel in your chosen field.",
	courses: [
	  {
		id: "1",
		title: "Brand & graphics design",
		content:
		  "Embark on a journey into the world of visual communication with our Brand and Graphics Design track. Develop the skills needed to create compelling brand identities, eye-catching graphics, and immersive user experiences. Your creative vision will shape the way people perceive and engage with brands.",
	  },
	  {
		id: "2",
		title: "Data analysis",
		content:
		  "Become a data-driven decision-maker with our Data Analysis track. Dive deep into the world of data, learning how to gather, analyze, and interpret information to uncover valuable insights. Data analysts are in high demand across industries, and this track equips you with the tools to make an impact."	  },
	  {
		id: "3",
		title: "Digital marketing and content creation ",
		content:
		  "Explore the art and science of digital marketing and content creation. In this track, you'll master the strategies and techniques needed to reach and engage online audiences. From SEO to social media marketing, content creation to analytics, you'll gain the skills to excel in the digital landscape.",
	  },
	  {
		id: "4",
		title: "Product design",
		content:
		  "Join our Product Design track to discover the art of creating user-centric digital products. Gain expertise in user research, prototyping, and design thinking. Shape the future by transforming innovative ideas into intuitive, impactful products.",
	  },

	  {
		id: "4",
		title: "Project management",
		content:
		  "In the world of tech, effective project management is key. Our Project Management track equips you with the knowledge and tools to lead teams, execute projects efficiently, and deliver results. Learn the best practices that ensure projects are on time, on budget, and on target.",
	  },
	],
  };

  export const PROGRAMMESCOMPONENT: ProgrammesComponent = {
	id: '1',
	title: "Programmes",
	subtitle: "At Techathon, we offer distinctive programs designed to kickstart your journey into the dynamic world of tech and provide you with the mentorship needed to thrive.",
	body: [
		{
			id: "1",
			type: "part1",
			svg: "w3.svg.com",
			title: "Pre-mentorship",
			main: 'Effective Transitioning',
			first: "Up to date course outline \n Relevant information",
			second: "Assignments \n Individual projects"
		},
		{
			id: "2",
			type: "part2",
			svg: "w3.svg.com",
			title: "Mentorship",
			main: 'Hands-on approach',
			first: "Cross functional team \n Practical classes ",
			second: "Real time projects \n Exhibition & Start ups"
		},
		{
			id: "3",
			type: "Bonus",
			svg: "w3.svg.com",	
			title: "Techathon",
			description:"Get tech skill training and get \n certified for 3000"
		},
		{
			id: "4",
			type: "Bonus",
			svg: "w3.svg.com",	
			title: "Jobberman",
			description:"Get soft skill training and get \n certified for FREE"
		}
	],
	cards: [
		{
		id: "1",
		image: "htpps://techathon/pictures.com",
		title: "Learn for FREE",
		description: "Learn your desired tech skill seamlessly in 5weeks for FREE"
	},
	{
		id: "2",
		image: "htpps://techathon/pictures.com",
		title: "Bootcamp",
		description: "Work in a cross functional team and develope real time projects  and exhibition (6weeks) all at N10,000"
	},
	{
		id: "3",
		image: "htpps://techathon/pictures.com",
		title: "Certification",
		description: "Get duly certified  at the cost of N3,500"
	},
],

takestep: {
	id: "4",
  title: 'Take the giant leap towards mastering that tech skill',
  content: "Take the first step towards an exciting tech journey. Join our vibrant community of learners, mentors, and tech enthusiasts. Let's explore, learn, and innovate together."
},
  }

////---------------------------ABOUT US-----------------------///
export const ABOUTUSCOMPONENT: AboutUsComponent = {
  id: '1',
  title: 'ABOUT US',
  content: "Techathon  is a mentorship and open source community that provides seamless transition to those who want to transition into tech regardless of their career background with the right resources they need to make their journey smooth , inclusive and fun. We make acquiring tech skills seamless for anyone transitionsing into tech from any career.",
  subtitle: [
    {
      id: '1',
      title: 'Our Mission',
      content: "To provide seamless transition to anyone who wants to transition into tech, regardless of their career background through our mentorship  program until they become job ready."      
    },
    {
      id: '2',
      title: 'Our Vission',
      content: "To become the number beginner friendly virtual mentorshhip and collaborative hub for anyone looking to transition to tech from any career.."      
    }
  ]
}
//CORECOMPONENT
export const GUIDEPRINCIPLECOMPONENT: GuidePrincipleComponent = {
  id: '1',
  title: "Guiding principles",
  principles:[
    {
      id: '1',
      title: 'Mentees first',
      content: "Always focus on the mentees to make sure they have a good learning experience throughout the mentorship period."
    },
    {
      id: '2',
      title: 'Inclusive  and welcoming environment',
      content: "A healthy community where everyone’s opinion is respected."
    },
    {
      id: '3',
      title: 'Teamwork and collaboration',
      content: "The collaborative efforts of each mentee to achieve a common goal to learn  how tech works in real life."
    },
    {
      id: '4',
      title: 'Communication',
      content: "In techathon, this is a tool mentees and mentors use to clearly converse, set expectations and collaborate on projects."
    },
    {
      id: '5',
      title: 'Time magement',
      content: "This includes prioritising tasks, meeting deadlines and effective goal setting"
    },
  ]
}

export const KEYPERSONCOMPONENT: KeyPersonComponent = {
  id: '1',
  title: "Key persons at techathon",
  description: "Our vibrant community thrives thanks to the dedication and passion of our key individuals who form the backbone of our ecosystem.",
  persons: [
    {
      id: '1',
      title: 'Mentees',
      content: "At techathon, we have the right structure and environment to ensure those who are transitioning into tech have a smooth transitioning process by guiding them with the right resources inclusively."
    },
    {
      id: '2',
      title: 'Mentors',
      content: "We have mentors who are professionally trained and qualified , ready to guide mentees, help them to  explore where they are in their career, where they want to go and how they will get there. At techathon, we live out our  values everyday to create a culture that is diverse, inclusive and committed to helping mentees thrive. Our mentors spend up to  5-6 hours with mentees in a week to ensure transitioning is smooth and fun, classes are virtual and very interactive for mentees. The community also holds various programs like inter-track competitions, games, career talks, weekly calls etc. to ensure interactiveness in the community."
    },
    {
      id: '3',
      title: 'Campus ambassadors',
      content: "Techathon has representatives on each campus in every school representing Techathon, preaching what we do at Techathon in their various schools."
    },
    {
      id: '4',
      title: 'Community advocates',
      content: "There are persons representing the community out there to help people who want to transition to tech easily and interested in open source navigate their way to Techathon from anywhere in the world."
    },
  ]
}

export const EVENTSCOMPONENT: AboutEventComponent = {
  id: "1",
  title: "EVENTS",
  subtitle: "Community Hangout",
  description: "The techathon community hangout  is for every member of the community to meet physically after the virtual connect and see their friends and teammates physically and enjoy themselves at the end of the every cohort. We have mentors who are proffessionally trained and qualified , ready to guide mentees, help them to  explore where they are in their career, where they want to go and how they will get there. At techathon, we live out our  values everyday to create a culture that is diverse, inclusive and committed to helping mentees thrive. Our mentors spend up to  5-6 hours with mentees in a week to ensure transitioning is smooth and fun, classes are virtual and very interactive for mentees. The community also holds various programs like inter-track competitions, games, career talks, weekly calls etc. to ensure interactiveness in the community."
}

//---------------------COURSE DETAILS------------------------////
export const COURSEDETAILSCOMPONENT: CourseDetailsComponent ={
  id: "1",
  summary: {
    id: '1',
    title: 'Digital Marketing & Content Creation',
    description: "Learn Html, Css and Java Script, the building blocks of Front end Development to help you build pages and web applications that are responsive and user-friendly.",
    highlight: [
      {
        id: "1",
        svg: "https://www.markicon.com",
        theme: "Beginner-friendly "
      },
      {
        id: "2",
        svg: "https://www.markicon.com",
        theme: "100% online classes "
      },
      {
        id: "3",
        svg: "https://www.markicon.com",
        theme: "5 - 6 hours every week"
      },
      {
        id: "4",
        svg: "https://www.markicon.com",
        theme: "Up to 10 weeks learning"
      },
    ],
  },
  image: "https://description/image",
  about:{
    id: '1',
    title: "About this Course",
    body: "HTML, CSS and JavaScript are the main topics of this frontend development course. You will be able to understand the foundational technologies that establish the visual and interactive components of webpage in this course. Your design skills will advance as you learn how to organize headings, paragraphs, lists, photos, and more using HTML (Hyper-text Markup Language),which is the building blocks of web pages. The art of styling web pages, including managing colors, fonts, layouts, and responsive designs, can be explored with CSS. Beginning with the fundamentals of variables, data types, and control structures, you will learn Java Script"
  },
  course: {
    id: "1",
    title: "Course Content",
    details: [
      {
        id: "1",
        svg: "w3.svg.com",
        title: "Introduction to Digital Marketing",
        body: ["Understanding the basics of web development.",
          "Setting up your development environment.",
          "Introduction to HTML, CSS, and JavaScript."
        ]
      },
      {
        id: "2",
        svg: "w3.svg.com",
        title: "Social Media Marketing",
        body: ["Understanding the basics of web development.",
          "Setting up your development environment.",
          "Introduction to HTML, CSS, and JavaScript."
        ]
      },
      {
        id: "3",
        svg: "w3.svg.com",
        title: "Website and Content Strategy",
        body: ["Introduction to CSS.",
          "Selectors and properties.",
          "Box Model and layouts."
        ]
      },
      {
        id: "4",
        svg: "w3.svg.com",
        title: "Search Engine Optimization",
        body: ["Positioning and display properties",
          "Flexbox layout",
          "CSS Grid layout"
        ]
      },
      {
        id: "5",
        svg: "w3.svg.com",
        title: "JavaScript Basics",
        body: ["Introduction to CSS.",
          "Selectors and properties.",
          "Box Model and layouts."
        ]
      },
      {
        id: "6",
        svg: "w3.svg.com",
        title: "DOM Maninupulation",
        body: ["Introduction to CSS.",
          "Selectors and properties.",
          "Box Model and layouts."
        ]
      },
      {
        id: "7",
        svg: "w3.svg.com",
        title: "Advanced JavaScript",
        body: ["Arrays and objects",
          "ES6 features.",
          "Box Model and layouts."
        ]
      },
      {
        id: "8",
        svg: "w3.svg.com",
        title: "Assignment & Projects",
        body: ["Arrays and objects",
          "ES6 features.",
          "Box Model and layouts."
        ]
      },
    ]
  },
  certification: {
    id: '1',
    title: "Certification and Mentorship",
    description: "You earn certification at the completion of the 8 weeks learning in your chosen track. Earning a certification at the of your learning track is paid and compulsory."
  },
  body: [
		{
			id: "1",
			type: "part1",
			svg: "w3.svg.com",
			title: "Pre-mentorship",
			main: 'Effective Transitioning',
			first: "Up to date course outline \n Relevant information",
			second: "Assignments \n Individual projects"
		},
		{
			id: "2",
			type: "part2",
			svg: "w3.svg.com",
			title: "Mentorship",
			main: 'Hands-on approach',
			first: "Cross functional team \n Practical classes ",
			second: "Real time projects \n Exhibition & Start ups"
		},
		{
			id: "3",
			type: "Bonus",
			svg: "w3.svg.com",	
			title: "Techathon",
			description:"Get tech skill training and get \n certified for 3000"
		},
		{
			id: "4",
			type: "Bonus",
			svg: "w3.svg.com",	
			title: "Jobberman",
			description:"Get soft skill training and get \n certified for FREE"
		}
	],
  cards: [
		{
		id: "1",
		image: "htpps://techathon/pictures.com",
		title: "Learn for FREE",
		description: "Learn your desired tech skill seamlessly in 5weeks for FREE"
	},
	{
		id: "2",
		image: "htpps://techathon/pictures.com",
		title: "Bootcamp",
		description: "Work in a cross functional team and develope real time projects  and exhibition (6weeks) all at N10,000"
	},
	{
		id: "3",
		image: "htpps://techathon/pictures.com",
		title: "Certification",
		description: "Get duly certified  at the cost of N3,500"
	},
],
  }
  //FOOTER 

  // export const FOOTERCOMPONENT{

  // }