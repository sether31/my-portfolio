const projects = [
    {
        id: '1',
        video: '../../assets/project/fate.mp4',
        pageImage: {
            image1: '../../assets/project/oh-studio/oh-studio.png',
            image2: '../../assets/project/oh-studio/oh-studio.png',
            image3: '../../assets/project/oh-studio/oh-studio.png',
        },
        name: 'OH.Studio',
        type: 'Landing Page',
        description: 'A challenge from Frontend Practice, where I recreated a landing page from an existing website. While it doesn\'t include animations or JavaScript, the project focuses on replicating the layout and design using HTML5 and vanilla CSS.',
        technologies: {
            tech1: {
                icon: '../../assets/icons/html5_icon.svg',
                name: 'HTML5'
            },
            tech2: {
                icon: '../../assets/icons/CSS3_icon.svg',
                name: 'CSS3'
            }
        },
        techss: function(index){
            return `projects.technologies.tech${1 + index}`
        },
        githubLink: 'https://github.com/sether31/frontend-practice-challenge-ohstudio',
        liveLink: 'https://frontend-practice-challenge-ohstudio-sether31.vercel.app/',
        animationType: 'zoom-in-right',
        animationDuration: '1000'
    },
    {
        id: '2',
        video: '../../assets/project/fate.mp4',
        pageImage: {
            image1: '../../assets/project/oh-studio/oh-studio.png',
            image2: '../../assets/project/oh-studio/oh-studio.png',
            image3: '../../assets/project/oh-studio/oh-studio.png',
        },
        name: 'Huddle Landing Page',
        type: 'Landing Page',
        description: 'A challenge from Frontend Mentor where i recreated a responsive landing page based on given Figma designs.',
        technologies: {
            tech1: {
                icon: '../../assets/icons/html5_icon.svg',
                name: 'HTML5'
            },
            tech2: {
                icon: '../../assets/icons/CSS3_icon.svg',
                name: 'CSS3'
            }
        },
        githubLink: 'https://github.com/sether31/Frontend-Mentor-Challenges/tree/master/huddle-landing-page',
        liveLink: 'https://huddle-landing-page-challenge-sether31.vercel.app/',
        animationType: 'zoom-in-left',
        animationDuration: '1000'
    },
    {
        id: '3',
        video: '../../assets/project/fate.mp4',
        pageImage: {
            image1: '../../assets/project/oh-studio/oh-studio.png',
            image2: '../../assets/project/oh-studio/oh-studio.png',
            image3: '../../assets/project/oh-studio/oh-studio.png',
        },
        name: 'Fylo Landing Page',
        type: 'Landing Page',
        description: 'A challenge from Frontend Mentor where i recreated a responsive landing page based on given Figma designs.',
        technologies: {
            tech1: {
                icon: '../../assets/icons/html5_icon.svg',
                name: 'HTML5'
            },
            tech2: {
                icon: '../../assets/icons/CSS3_icon.svg',
                name: 'CSS3'
            }
        },
        githubLink: 'https://github.com/sether31/Frontend-Mentor-Challenges/tree/master/fylo-landing-page-with-two-column-layout-master',
        liveLink: 'https://fylo-landing-page-sether31.vercel.app/',
        animationType: 'zoom-in-right',
        animationDuration: '1500'
    },
    {
        id: '4',
        video: '../../assets/project/fate.mp4',
        pageImage: {
            image1: '../../assets/project/oh-studio/oh-studio.png',
            image2: '../../assets/project/oh-studio/oh-studio.png',
            image3: '../../assets/project/oh-studio/oh-studio.png',
        },
        name: 'CODE Co-Working Space',
        type: 'Landing Page',
        description: 'A collaborative project completed as part of my work immersion. A responsive website for CODE Co-Working Space.',
        technologies: {
            tech1: {
                icon: '../../assets/icons/html5_icon.svg',
                name: 'HTML5'
            },
            tech2: {
                icon: '../../assets/icons/bootstrap4_icon.svg',
                name: 'Bootstrap4'
            }
        },
        githubLink: 'https://github.com/sether31/seth',
        liveLink: 'https://code-coworking-space.netlify.app/',
        animationType: 'zoom-in-left',
        animationDuration: '1500'
    }
];

export default projects;