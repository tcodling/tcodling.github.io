const LANGUAGE = 1;
const FRAMEWORK = 2;
const DATABASE = 3;
const BUILDER = 4;
const WORKPLACE = 5;
const IMAGE = 6;

const techSkills = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        tooltip: `The HyperText Markup Language or HTML is the standard markup language for documents 
            designed to be displayed in a web browser. It can be assisted by technologies such as 
            Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
        link: "",
        tag: LANGUAGE,
        rating: 5,
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        tooltip: `Cascading Style Sheets (CSS) is a style sheet language used for describing the 
            presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone
            technology of the World Wide Web, alongside HTML and JavaScript`,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        tag: LANGUAGE,
        rating: 5,
    },
    {
        name: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        tooltip: `JavaScript, often abbreviated JS, is a programming language that 
            is one of the core technologies of the World Wide Web, alongside HTML and CSS.`,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        tag: LANGUAGE,
        rating: 4,
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        tooltip: `PHP is a general-purpose scripting language geared toward web development.`,
        link: "",
        tag: LANGUAGE,
    },
    // {
    //     name: "Ruby",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg",
    //     tooltip: `Ruby is an interpreted, high-level, general-purpose programming language which supports 
    //         multiple programming paradigms. It was designed with an emphasis on programming productivity and 
    //         simplicity.`,
    //     link: "",
    //     tag: LANGUAGE,
    // },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        tooltip: `MySQL is an open-source relational database management system (RDBMS). 
            A relational database organizes data into one or more 
            data tables in which data may be related to each other; these relations help structure the data. SQL 
            is a language programmers use to create, modify and extract data from the relational database, as 
            well as control user access to the database.`,
        link: "",
        tag: DATABASE,
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        tooltip: `Sass (short for syntactically awesome style sheets) is a preprocessor scripting 
            language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.`,
        link: "",
        tag: FRAMEWORK,
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
        tooltip: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first 
            front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.`,
        link: "",
        tag: FRAMEWORK,
    },
    {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
        tooltip: `jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, 
            as well as event handling, CSS animation, and Ajax.`,
        link: "",
        tag: FRAMEWORK,
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        tooltip: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript 
            library for building user interfaces based on UI components.`,
        link: "",
        tag: FRAMEWORK,
    },
    // {
    //     name: "Ruby on Rails",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
    //     tooltip: `Ruby on Rails is a server-side web application framework written in 
    //         Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default 
    //         structures for a database, a web service, and web pages.`,
    //     link: "",
    //     tag: FRAMEWORK,
    // },
    {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        tooltip: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that 
            runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, 
            which was designed to build scalable network applications.`,
        link: "",
        tag: FRAMEWORK,
    },
    {
        name: "Webflow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
        tooltip: `Webflow is a SaaS application that allows designers to build responsive websites
         with browser-based visual editing software. While designers use the tool, Webflow automatically 
         generates HTML, CSS, and JavaScript.`,
        link: "",
        tag: BUILDER,
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        tooltip: `Figma is a collaborative web application for interface design.`,
        link: "",
        tag: IMAGE,
    },
    {
        name: "npm",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        tooltip: `npm (originally short for Node Package Manager) is a package manager for the 
            JavaScript programming language maintained by npm, Inc.`,
        link: "",
        tag: WORKPLACE,
    },
    // {
    //     name: "Google SEO",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg",
    //     tooltip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh lectus.
    //         Integer consectetur massa non libero consectetur fermentum sed at ligula.`,
    //     link: "",
    // },
    {
        name: "Trello",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg",
        tooltip: `Trello is a web-based, Kanban-style, list-making application.`,
        link: "",
        tag: WORKPLACE,
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
        tooltip: `Git is free and open source software for distributed version control: tracking 
            changes in any set of files, usually used for coordinating work among programmers collaboratively 
            developing source code during software development.`,
        link: "",
        tag: WORKPLACE,
    },

    // {
    //     name: "Python",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    //     tooltip: `Python is a high-level, general-purpose programming language. Its design philosophy 
    //         emphasizes code readability with the use of significant indentation.`,
    //     link: "",
    //     tag: LANGUAGE,
    // },
    // {
    //     name: "Arduino",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg",
    //     tooltip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh lectus.
    //         Integer consectetur massa non libero consectetur fermentum sed at ligula.`,
    //     link: "",
    // },
    // {
    //     name: "Rasberry Pi",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original-wordmark.svg",
    //     tooltip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh lectus.
    //         Integer consectetur massa non libero consectetur fermentum sed at ligula.`,
    //     link: "",
    // },
    {
        name: "Wordpress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        tooltip: `WordPress is a free and open-source content management system (CMS) written in PHP.`,
        link: "",
        tag: BUILDER,
    },
    // {
    //     name: "Heroku",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg",
    //     tooltip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh lectus.
    //         Integer consectetur massa non libero consectetur fermentum sed at ligula.`,
    //     link: "",
    // },
    {
        name: "mongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        tooltip: `MongoDB is a source-available cross-platform document-oriented database program. Classified 
            as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.`,
        link: "",
        tag: DATABASE,
    },
    {
        name: "Gimp",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original-wordmark.svg",
        tooltip: `GIMP (GNU Image Manipulation Program) is a free and open-source raster graphics 
            editor used for image manipulation (retouching) and image editing, free-form drawing, transcoding 
            between different image file formats, and more specialized tasks.`,
        link: "",
        tag: IMAGE,
    },
    // {
    //     name: "Gatsby",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain-wordmark.svg",
    //     tooltip: `Gatsby is an open-source static site generator built on top of Node.js using React and GraphQL.`,
    //     link: "",
    //     tag: FRAMEWORK,
    // },
    ,
    {
        name: "Slack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg",
        tooltip: `Slack is a messaging program designed specifically for the office.`,
        link: "",
        tag: WORKPLACE,
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        tooltip: `Express.js, or simply Express, is a back end web application framework for Node.js. 
            It is designed for building web applications and APIs.`,
        link: "",
        tag: FRAMEWORK,
    },
    {
        name: "Three.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg",
        tooltip: `Three.js is a cross-browser JavaScript library and application programming interface (API) 
            used to create and display animated 3D computer graphics in a web browser using WebGL.`,
        link: "",
        tag: FRAMEWORK,
    },
];
