import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ephraim",
  lastName: "Elakhe",
  name: `Ephraim Elakhe`,
  role: "Data Engineer and Web Developer",
  avatar: "/images/avatar.jpg",
  email: "elakhe.ephraim.9@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about data and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Lake-Commander",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/ephraimelakhe",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between data and everyday work</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">DATA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
  I’m Ephraim, a data engineer and web developer at{" "}
  <Text as="span" size="xl" weight="strong">IIARD</Text>, where I design and build scalable
  data systems and intuitive web experiences that transform complex information
  into clear, usable products.
  <br /><br />
  My work spans data pipelines, backend architecture, and frontend interfaces,
  ensuring performance, reliability, and thoughtful user interaction.
  <br /><br />
  Outside of work, I actively build and experiment with personal projects,
  exploring modern frameworks, data-driven applications, and creative solutions
  that continuously sharpen my engineering and design instincts.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ephraim is a Nigeria-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans data systems, web interfaces and interactive experiences, sitting at the intersection of engineering, design and technology.
      </>
    ),
  },
  work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "IIARD (International Institute of Academic Research and Development)",
      timeframe: "Jun 2024 - Oct 2025",
      role: "Database Administrator & Web Analyst",
      achievements: [
        <>
          Owned the database layer for a multi-journal publishing platform, improving data integrity and operational reliability.
        </>,
        <>
          Improved content discoverability by aligning metadata, internal linking, and crawl behavior across high-volume journal pages.
        </>,
        <>
          Reduced query overhead through indexing, cleanup routines, and safer access patterns for read-heavy traffic.
        </>,
        <>
          Maintained access control, backups, and monitoring routines to protect research records and editorial workflows.
        </>,
      ],
      images: [
        {
          // Clickable banner placeholder
          src: "https://placehold.co/1600x900/png?text=IIARD+Journals+%E2%80%94+Banner",
          alt: "IIARD Journals platform banner",
          width: 16,
          height: 9,
          href: "https://iiardjournals.org",
        },
      ],
    },

    {
      company: "Ignatius Ajuru University of Education (Faculty of Education)",
      timeframe: "Aug 2024 - Feb 2025",
      role: "Database Administrator",
      achievements: [
        <>
          Stabilized faculty records by enforcing consistent schemas, cleaner constraints, and repeatable update workflows.
        </>,
        <>
          Reduced data inconsistencies by strengthening validation rules and improving record-handling procedures for staff.
        </>,
        <>
          Supported platform maintainability by keeping backend changes minimal, predictable, and easy to document.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=IAUE+Faculty+Website+%E2%80%94+Banner",
          alt: "IAUE Faculty of Education website banner",
          width: 16,
          height: 9,
          href: "https://foeiaue.ng",
        },
      ],
    },

    {
      company: "Wallfashion House",
      timeframe: "Jun 2024 - Mar 2025",
      role: "E-Commerce Database Specialist",
      achievements: [
        <>
          Maintained accurate inventory and product data to keep storefront listings consistent with backend records.
        </>,
        <>
          Supported sales operations by tracking product movement and identifying mismatches affecting availability and updates.
        </>,
        <>
          Improved reporting clarity by structuring product and transaction data for faster operational decisions.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=E-Commerce+Inventory+System+%E2%80%94+Banner",
          alt: "E-commerce database banner",
          width: 16,
          height: 9,
          href: "https://placehold.co", // replace with real store link if public
        },
      ],
    },

    {
      company: "Yiwuke Limited",
      timeframe: "Jun 2024",
      role: "Data Warehouse Specialist",
      achievements: [
        <>
          Designed a warehouse-style data structure that unified catalog, stock, and transaction records into one system.
        </>,
        <>
          Connected operational workflows to secure web access, improving visibility for internal users without exposing sensitive data.
        </>,
        <>
          Delivered a maintainable backend foundation that supported growth, reporting needs, and controlled access patterns.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=Yiwuke+Data+Warehouse+%E2%80%94+Banner",
          alt: "Yiwuke corporate and data warehousing platform banner",
          width: 16,
          height: 9,
          href: "https://yiwukelimited.com.ng",
        },
      ],
    },

    {
      company: "Code Quest (Federal University of Technology, Owerri)",
      timeframe: "Apr 2024 - May 2024",
      role: "Technical Team Lead",
      achievements: [
        <>
          Led a technical team to deliver a large-scale event while coordinating tasks, timelines, and technical execution.
        </>,
        <>
          Improved delivery consistency by assigning clear ownership areas and tracking completion across multiple contributors.
        </>,
        <>
          Supported stakeholders with structured updates, reducing last-minute risk during event execution.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=Code+Quest+%E2%80%94+Technical+Leadership+Banner",
          alt: "Code Quest technical leadership banner",
          width: 16,
          height: 9,
          href: "https://placehold.co", // replace with event page if available
        },
      ],
    },

    {
      company: "Scoop Inc (Remote)",
      timeframe: "Sep 2023 - Apr 2024",
      role: "Lead Web Developer",
      achievements: [
        <>
          Shipped a student-focused web platform and owned the core build decisions from early structure to deployment.
        </>,
        <>
          Improved stability by defining practical backend boundaries and reducing fragile dependencies during development.
        </>,
        <>
          Coordinated delivery with remote collaborators using clear milestones and review-friendly implementation changes.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=Scoop+Inc+%E2%80%94+Platform+Banner",
          alt: "Scoop Inc platform banner",
          width: 16,
          height: 9,
          href: "https://placehold.co", // replace with real product link if public
        },
      ],
    },

    {
      company: "BitDegree (Remote)",
      timeframe: "Apr 2019 - May 2021",
      role: "Data Analyst",
      achievements: [
        <>
          Cleaned and analyzed 4,000+ user records and produced decision-ready summaries for product stakeholders.
        </>,
        <>
          Built a simple recommendation system that increased user engagement by approximately fifteen percent.
        </>,
        <>
          Improved reporting speed by standardizing data preparation steps and reducing repeated manual analysis work.
        </>,
      ],
      images: [
        {
          src: "https://placehold.co/1600x900/png?text=BitDegree+%E2%80%94+Analytics+Banner",
          alt: "BitDegree analytics banner",
          width: 16,
          height: 9,
          href: "https://www.bitdegree.org",
        },
      ],
    },
  ],
},
  
studies: {
  display: true, // set to false to hide this section
  title: "Studies",
  institutions: [
    {
      name: "University of The People",
      description: <>B.Sc. Computer Science (June 2023).</>,
    },
    {
      name: "University of Benin",
      description: <>B.Eng. Structural Engineering (Feb 2017 - Sep 2023).</>,
    },
  ],
},

technical: {
  display: true, // set to false to hide this section
  title: "Technical skills",
  skills: [
    {
      title: "Backend + Data Engineering",
      description: (
        <>
          Building database-first systems with secure backend workflows, SEO-aware content
          pipelines, and practical ETL/data warehousing patterns for real production platforms.
        </>
      ),
      tags: [
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "sql" },
        { name: "PHP", icon: "php" },
        { name: "MySQL", icon: "mysql" },
        { name: "ETL", icon: "database" },
        { name: "APIs", icon: "api" },
      ],
      images: [
        {
          src: "/images/skills/backend/cover-01.jpg",
          alt: "Backend + Data engineering",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Modern Web Development",
      description: (
        <>
          Shipping responsive web interfaces and CMS-backed platforms with clean component
          structure, performance awareness, and maintainable deployments.
        </>
      ),
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "HTML/CSS", icon: "html" },
        { name: "Django", icon: "django" },
        { name: "Laravel", icon: "laravel" },
      ],
      images: [
        {
          src: "/images/skills/web/cover-01.jpg",
          alt: "Web development",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Tooling + Deployment",
      description: (
        <>
          Working comfortably across version control, local tooling, API testing, and practical
          deployment environments (VPS/cPanel/cloud hosting).
        </>
      ),
      tags: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Postman", icon: "postman" },
      ],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
