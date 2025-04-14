import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Francesco",
  lastName: "Strano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Junior Developer",
  avatar: "/images/avatar.jpeg",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Italiano 🇮🇹", "English 🇺🇸"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Iscriviti alla NewsLetter di {person.firstName}</>,
  description: (
    <>
      Ti scriverò per notizie riguardante sconti o nuovi servizi disponibili, è gratis.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "Instagram",
    link: "https://instagram.com/stranofrancesco17",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:info@sharkdigital.it",
  },
];

const home = {
  label: "Home",
  title: `Portfolio di ${person.name}`,
  description: `Mostrando i miei lavori da ${person.role}`,
  headline: <>Junior Developer. Ecommerce, Site, Menù builder.</>,
  subline: (
    <>
      Sono Francesco, un'aspirante programmatore  <InlineCode>full stack</InlineCode>.
      <br /> Il mio obiettivo è quello di rendere la tua immagine o quella del tuo brand 
      il più professionale possibile.
    </>
    
  ),
  
};

const about = {
  label: "About",
  title: "About me",
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
    link: "https://cal.com/francesco-mqkfjq/20min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sono Francesco, un Junior Developer, gestore di diversi ecommerce per aziende 
        e sviluppatore di prodotti digitali ai fini di migliorarne la visibilità, lo styling,
        o l'intera struttura.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Esperienze Lavorative: ",
    experiences: [
      
       {
        company: "Skin Tennis",
        timeframe: "2024: Agosto - Ottobre",
        role: "Ecommerce Developer",
        achievements: [
          <>
            Mi sono occupato della realizzazione di un ecommerce basato su prodotti a tema lusso. 
            Ho utilizzato svariate tecnologie per lo styling, pagamenti e newsletter.
          </>,
          <>
            Accordandomi con il brand, abbiamo scelto i copy adatti e basati sul buyer personas, configurato i profili social 
            e successivamente aggiunto uno store locator e molto altro.
            
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-05.png",
            alt: "Project image",
            width: 16,
            height: 9,
            
          },
        ],
        
      },
      {
        company: "Seven Paradise",
        timeframe: "2023-2024",
        role: "Designer, Site Developer",
        achievements: [
          <>
            Seven Paradise è stato un ecommerce di magliette personalizzate con diverse tematiche,
            rappresentava uno stile di libertà associato ad un design dai colori molto accesi.
          </>,
          <>
            Mi sono occupato dello sviluppo totale del sito, oltre alla realizzazione dei prodotti
            via strumenti di fotomontaggio, per poi mandarli in produzione e occuparmi delle vendite fino a 
            esaurimento scorte.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-02.png",
            
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Presentazione Teatro Bellini",
        timeframe: "2021",
        role: "Site Developer",
        achievements: [
          <>
            Come ultimo lavoro di presentazione delle medie, ho presentato un sito riguardante il Teatro
            Massimo Bellini, descrivendone la storia, la posizione geografica e l'importanza del monumento in sè.
          </>,
          <>
            Questo è stato uno dei più grandi progetti a cui ho preso parte autonomamente nel 2021.
            
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-03.png",
            
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Titoli di Studio",
    institutions: [
      {
        name: "IIS Marconi-Mangano",
        description: <>Scuola superiore di secondo grado: informatico.</>,
      },
      {
        name: "Algorithmics",
        description: <>Corso di programmazione Python</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Shopify",
        description: <>Una delle mie tecnologie / tools preferiti è Shopify, attraverso il cui realizzo la maggior parte degli ecommerce che mi vengono commissionati.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-05.png",
            alt: "Project image",
            width: 16,
            height: 9,
            
          },
          
          {
            src: "/images/projects/project-01/cover-06.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Photoshop",
        description: <>Photoshop è il mio tool preferito per la realizzazione o modifica di contenuti per i miei siti o lavori.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Works",
  title: "My projects",
  description: `Design e progetti di ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
