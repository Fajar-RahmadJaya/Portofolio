// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Fajar-RahmadJaya', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portofolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Fajar-RahmadJaya/KeyTik', 'Fajar-RahmadJaya/website-dev',
          'Fajar-RahmadJaya/keytik-pro', 'Fajar-RahmadJaya/keytik-website',
          'Fajar-RahmadJaya/google-dawg', 'GtSBK05/TrickTower',
          'CATSSRIN/FP-PemWeb-H', 'CATSSRIN/Final-Project-Struktur-Data'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
  },
  seo: { title: 'Portfolio of Fajar Rahmad Jaya', description: '', imageURL: '' },
  social: {
    linkedin: 'fajar-rahmadjaya',
    x: 'Fajar_RahmadJ',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'fajar_rahmadjaya',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'fajar.rahmad.jaya.profile@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1JMb3G6DXSrSTcC_uiuaq1xMdpDtfzVi_/export?format=pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'HTML/CSS',
    'PHP',
    'TypeScript/JavaScript',
    'Python',
    'Node.js',
    'SQL',
    'VitePress',
    'TailWind',
    'Eleventy',
  ],
  experiences: [
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'UPN "Veteran" Jawa Timur',
      degree: 'Sarjana Komputer',
      from: '2023',
      to: 'Sekarang',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer:'',

  enablePWA: true,
};

export default CONFIG;
