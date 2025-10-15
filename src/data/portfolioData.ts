import type { PortfolioData } from "../interface";

export const portfolioData: PortfolioData = {
    "main": {
        "name": "Viona Kaleb",
        "fullname": "Viona Z. A. Kaleb",
        "description": "A Software Engineer",
        "image": "profilepic.jpg",
        "bg": "profile-bg.JPG",
        "bios": [
            "Hello, I've been a Front-End Developer since 2018 (5+ years of experience)."
        ],
        "bios2": [
            "My daily tasks are to: ",
            "- Translate designs from Figma, develop them into web apps.",
            "- Create logically functioning features, integrate API data.",
            "- Also creating unit tests."
        ],
        "bios3": [
            "Skills in Software Development: ",
            "- FE: React.js, Typescript, Next.js, Vue.js, Angular.js. ",
            "- BE: Few experience in .NET, Express.js, PHP & GraphQL.",
            "- Data Analysis: Few experience in Python & Power BI.",
            "- Redux, Hooks, RTK Query, Unstated Next, Vuex. ",
            "- Axios, GraphQL, Firebase. ",
            "- Tailwind, SCSS/SASS, LESS. ",
            "- Material UI, Ant Design, Bootstrap, Nuxt, Foundation. ",
            "- Jest, React Testing Library.",
            "- Git, Postman, Jira, Trello."
        ],
        "contactmessage": "vionakaleb@gmail.com",
        "email": "vionakaleb@gmail.com",
        "phone": "",
        "address": {
            "street": "",
            "city": "Tangerang Regency",
            "state": "Banten",
            "zip": "15336",
            "country": "Indonesia",
            "gmaps": "https://www.google.com/maps/place/Kabupaten+Tangerang,+Banten/@-6.1818662,106.3924998,11z/data=!3m1!4b1!4m6!3m5!1s0x2e69ffb6b0ad7ae3:0x301576d14feb9b0!8m2!3d-6.1870007!4d106.487658!16zL20vMGdicjht"
        },
        "social": [
            { "name": "Github", "url": "https://github.com/vionakaleb", "className": "fa fa-github" },
            { "name": "LinkedIn", "url": "https://linkedin.com/in/vionakaleb", "className": "fa fa-linkedin" },
            { "name": "Behance", "url": "https://behance.net/gallery/71544345/Vio-Web-Portfolio", "className": "fa fa-behance" },
            { "name": "Email", "url": "mailto:vionakaleb@gmail.com", "className": "fa fa-envelope" }
        ]
    },
    "resume": {
        "skillmessages": [],
        "education": [
            { "school": "President University", "degree": "MSIT", "graduated": "Now", "description": "Studying Postgraduate Master of Science in IT.", "logo": "campus.png" },
            { "school": "President University", "degree": "B.Sc.IT", "graduated": "2018", "description": "Graduated as Bachelor of Computer Science in IT.", "logo": "campus.png" }
        ],
        "work": [
            { "company": "Bank Mandiri", "title": "Front-End Web Developer", "years": "2024", "descriptions": ["Using Angular js & Typescript", "IT Digital Channel Delivery Group:", "Smart Branch - Back-office: Develop and maintain features that is used by Bank Mandiri branches, like transaction & card maintenance.", "Smart Branch - E-Form: Develop and maintain features that is used by Bank Mandiri Customers to fill in forms when they visit a branch.", "KOPRA: Maintain and bugfixing for Mandiri Global Trade (MGT) and Mandiri Cash Management (MCM) features in KOPRA."], "projects": ["Smart Branch", "KOPRA"], "website": "https://www.bankmandiri.co.id/smart-branch", "skills": ["Angular", "Typescript", "Jest"], "logo": "company-mandiri.jpeg" },
            { "company": "Hypestacks", "title": "Front-End Web Developer", "years": "2023", "descriptions": ["Worked for a multi-national company based in UK & Singapore to develop foreign exchange dashboard.", "As Front End Developer, using React.js & Typescript:", "- Creating a Dashboard for firm prop trading. Slicing designs & develop features.", "As junior .NET Developer:", "- Helping to develop logic, DynamoDB queries & Lambda functions.", "As junior Data Analyst:", "- Transforming, querying & building trading data visualizations using Microsoft Power BI."], "projects": ["YourPropFirm"], "website": "https://yourpropfirm.com/", "skills": ["React.js", "Typescript", "RTK Query", "Redux", "Hooks"], "logo": "company-hypestacks.jpeg" },
            { "company": "Aplikasi Super", "title": "Front-End Web Developer", "years": "2021-2023", "descriptions": ["Develop back-office for master data, orders, logistic, supply chain, and e-commerce web.", "Create client-side features, integrate API from BE. Translate designs from UI/UX.", "Create unit test with Jest & React Testing Library."], "projects": ["Internal dashboard", "Agent webview"], "website": "https://superapp.id/", "skills": ["React.js", "Typescript", "RTK Query", "Redux", "Hooks"], "logo": "company-super.jpg" },
            {
                "company": "Tristan Artha Media", "title": "Front-End Web Developer", "years": "2020-2021", "descriptions": ["Develop back-office & tournament platform in web and mobile responsive.", "Create features, integrate API from BE. Translate designs from UI/UX."], "website": "http://www.tristancorp.com/", "skills": ["Next.js", "React.js", "Angular.js", "Apollo GraphQL"], "logo": "company-tristan.jpg",
                projects: []
            },
            { "company": "Adactive Asia", "title": "Front-End Developer", "years": "2020", "descriptions": ["Worked fully remote on a Singapore-based company.", "Create wayfinding apps for touchscreen display, installed in Singapore buildings.", "Create features & integrate from CMS. Translate designs from UI/UX.", "Develop apps for LG Smart TVs."], "projects": ["Singapore Discovery Centre", "Singapore Supreme Courts", "Singapore State Courts", "Family Justice Courts", "Woodsquare", "Republic Plaza"], "website": "https://www.adactive.asia/", "skills": ["React.js", "Vanilla.js", "Firebase", "Canvas", "GSAP", "webOS"], "logo": "company-adactive.jpeg" },
            { "company": "Yamisok Platform", "title": "Front-End Web Developer", "years": "2018-2020", "descriptions": ["Maintain and revamp web platform for esports tournaments.", "Develop single-page apps for project microsites.", "Integrate API from BE. Translate designs from UI/UX."], "projects": ["Yamisok Platform", "IESPL by Tokopedia", "IHSL by JD.ID", "Firstwarrior by Firstmedia"], "website": "https://yamisok.com", "skills": ["Vue.js", "Vuex", "Nuxt.js", "Bootstrap Vue"], "logo": "company-yamisok.jpeg" },
            {
                "company": "Jababeka", "title": "IT Technician Intern", "years": "2018", "descriptions": ["Troubleshooting computers.", "Solve ticketing requests from employees.", "Maintain some company softwares."], "website": "https://www.jababeka.com/", "skills": ["IT", "Hardware", "Networking"], "logo": "company-jababeka.png",
                projects: []
            },
            {
                "company": "BMICG", "title": "Web Developer", "years": "2017", "descriptions": ["Maintain and revamp project websites."], "website": "https://www.linkedin.com/company/brand-marketing-institute-consulting-group-bmicg-/about/", "skills": ["PHP", "CodeIgniter", "SQL", "jQuery"], "logo": "company-bmicg.png",
                projects: []
            }
        ],
        "skills": [
            { "name": "Typescript", "level": "80%" },
            { "name": "Next.js", "level": "70%" },
            { "name": "React.js", "level": "80%" },
            { "name": "Angular.js", "level": "70%" },
            { "name": "Vue.js", "level": "70%" },
            { "name": "Redux/Hooks", "level": "80%" },
            { "name": "RTK/React Query", "level": "70%" },
            { "name": "GraphQL", "level": "70%" },
            { "name": "Firebase", "level": "70%" },
            { "name": "Tailwind/SCSS", "level": "90%" }
        ]
    },
    "portfolio": {
        "project": "https://behance.net/gallery/71544345/Vio-Web-Portfolio",
        "project_web": [
            { "name": "Company Management", "url": "https://vionakaleb.github.io/company-management", "github": "https://github.com/vionakaleb/company-management", "technology": ["React.js", "Typescript", "Redux", "Tailwind"] },
            { "name": "Chat App", "url": "https://vionakaleb.github.io/chat-app", "github": "https://github.com/vionakaleb/chat-app", "technology": ["ReactJS", "Socket.IO", "Tailwind"] },
            { "name": "Todo List API", "url": "", "github": "https://github.com/vionakaleb/TodoListAPI", "technology": [".NET", "C#"] }
        ],
        "projects": []
    }
};
