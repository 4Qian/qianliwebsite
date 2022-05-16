
export const menuData = {
  home: 'HOME',
  aboutMe: 'ABOUT ME',
  projects: 'PROJECTS',
  contact: 'CONTACT',
  blog: 'BLOG',
}

export const homeData = {
  name: 'Qian Li',
  description:
    'I am a dreamer who dreams of impacting the world with my work, and I hope to gain more skills to create more innovative products for people.',
  cta: 'Contact Me',
};

export const aboutMeData = {
  paragraphOne:
    `I'm a graduate student studying Information Systems at Northeastern University.`,
  paragraphTwo:
    `As a software engineer, I'm passionate about solving problems by developing creative and innovative software and am dedicated to providing quality work.`,
}

export const skillsetsData = {
  'Programming Languages': `Java, Python, JavaScript, HTML/CSS, SQL`,
  'Web Technologies': `Spring Boot, MyBatis, Socket Programming, Bootstrap, Vue.js, Apache Shiro, React, Protocol Buffers`,
  'Platforms & Tools': `Linux, Git, AWS, MySQL, MongoDB, Netty`,
}

export const coursesData = {
  info7255: ` Advanced Big-Data Applications and Indexing Techniques`,
  info6205: `Program Structure & Algorithms`,
  info6150: `Web Design and User Experience Engineering`,
  info5001: `Application Modeling and Design`,
  info5100: `Application Engineer & Development`,
  info7245: `Agile Software Development`,
}

// uncomment this line and comment the next line when deploying to github pages using command "npm run deploy"
// const imageRoot = "/qianliwebsite/imgs"
const imageRoot = "/imgs"

export const projectsData = [
  {
    title: 'project1',
    description: `Info Management System:
  This is a web application for university administrators to manage students' information.
  The RESTful APIs of it enable querying and updating student information on profile, grades,class enrollment, and reviews on teachers.`,
    image: imageRoot + "/projects/info management.jpeg"
  },
  {
    title: 'project2',
    description: `Vaccine Passport App:
    This is web application for managing vaccination activities from end to end.
    It has a vaccine inventory management service for administrators to control and distribute vaccines to clinics.
    `,
    image: imageRoot + "/projects/vaccine.jpeg"
  },
  {
    title: 'project3',
    description: `Reviews Search App:
  This is a web application based on HTTP server that allows users to search Yelp reviews.
  It can Reduce time complexity of text searching from O(n) to O(1) and improve overall performance by 5 times by utilizing inverted index data structure.
  `,
    image: imageRoot + "/projects/reviews.jpeg"
  },
  {
    title: 'project4',
    description: `Distributed File System:
  This is a distributed file system (DFS) with bloom filter based probabilistic routing.
  It is implemented multi-threaded parallel file retrieval with an increase of 300% in performance using Netty.
  `,
    image: imageRoot + "/projects/dfs.jpeg"
  }
];


export const blogOneData = {
  blogOne: 'BLOGONE'
}

export const lasVegesData = {
  title: `Fantasy Las Vegas `,
  date: `6/2021`,
  description: `There are probably thousands of things to do in Las Vegas. I'm gonna share with you some photos I took in Las Vegas in the getaway vacation...`
};

export const lasVegesImageData = [
  {
    image:
      imageRoot + "/sliders/lasVegas/img1.jpg",
  },
  {
    image:
      imageRoot + "/sliders/lasVegas/Img2.jpeg",
  },
  {
    image:
      imageRoot + "/sliders/lasVegas/img3.jpeg",
  }
];

export const blogTwoData = {
  blogTwo: 'BLOGTWO'
}

export const laData = {
  title: `L.A.--- The City of Dreamers `,
  date: `7/2020`,
  description: `Do not be overwhelmed by the size of the Los Angeles - focus on different sections of the city each day. Santa Monica will be your best bet if you want to wiggle your toes in the sand. Do not forget to visit Beverly Hills, West Hollywood, and Lacma Lights.`
};

export const homepageImage = imageRoot + "/home/homepage.jpg"

export const laImageData = [
  {
    image:
      imageRoot + "/sliders/la/la1.jpeg",
  },
  {
    image:
      imageRoot + "/sliders/la/la2.jpeg",
  },
  {
    image:
      imageRoot + "/sliders/la/la3.jpeg",
  },
  {
    image:
      imageRoot + "/sliders/la/la4.jpeg",
  }
];

export const policyData = {
  policy: 'POLICY'
}


