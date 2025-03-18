//Interfaces
interface Link {
  text: string;
  href: string;
  img?: string;
}

interface Card {
  title: string;
  content: string;
  img: string;
}

interface Hobbies {
  name: string;
  content: string;
  tag: string;
  img?: string[];
}

interface Tiles {
  img: string;
  title: string;
  type: string;
  date: string;
  link: string;
}

interface Navlinks {
  text: string;
  href: string;
}

//Arrays
const links: Link[] = [
  {
    text: "First App",
    href: "#",
    // img: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Upop",
    href: "https://upop-seven.vercel.app/",
    // img: "shot.webp",
  },
  {
    text: "Freedom Photos",
    href: "https://freedom-roan.vercel.app/",
    // img: "shot_1.webp",
  },
  {
    text: "Hairlo",
    href: "https://www.figma.com/proto/g3sIrJB07eXhsZTHZTBIAf/Hairlo?node-id=1-3&t=WYHzUPMf8VYRKxHs-1&starting-point-node-id=34%3A733&show-proto-sidebar=1",
    // img: "shot_2.webp",
  },
];

const cards: Card[] = [
  {
    title: "Design",
    content:
      "Design services are focused on transforming the essence of your brand into a visually appealing and intuitively",
    img: "design.svg",
  },
  {
    title: "Development",
    content:
      "Development services bring your vision to life with robust, scalable solutions tailored to your unique needs",
    img: "development.svg",
  },
  {
    title: "Performance",
    content:
      "Performance optimization ensures your digital presence is lightning-fast, reliable, and ready to exceed user expectations",
    img: "performance.svg",
  },
  {
    title: "Compatibility",
    content:
      "Compatibility services guarantee seamless user experiences across all devices and platforms, maximizing your reach and impact",
    img: "compatibility.svg",
  },
];

const hobbies: Hobbies[] = [
  {
    name: "Gaming",
    content:
      "As a die-hard Madridista, my relationship with FIFA has been a thrilling love-hate saga. It goes beyond just the game; it's become a part of me. I relish the thrill of dismantling my opponents 😹. I also had some great moments on Fortnite too. Through gaming, I've made invaluable friends and connected with fellow developers who share my passion for coding and gaming. Gaming has not just been a pastime for me; it's been a way to connect, compete, unwind, and annihilate others.",
    tag: "gaming",
  },
  {
    name: "Music",
    content:
      "Listening to music is a passion of mine. I enjoy a diverse range of genres that provide the perfect soundtrack to my day, whether I am coding, working out, or relaxing. Music has the power to transport me to another world, and I am always on the lookout for new artists and songs that inspire me. Music is a form of self-expression that connects me to my emotions and helps me process my thoughts. It's a constant source of joy and inspiration in my life. Here is my wrapped of 2023 from Spotify",
    tag: "music",
    img: ["wrapped_2023.jpg", "wrapped_2024.jpg"],
  },
  {
    name: "Movies & Tv Shows",
    content:
      "I love delving into the latest movies and TV shows, exploring everything from spine-chilling horror to captivating sci-fi. Storytelling in visual media intrigues me because it offers a diverse range of narratives and characters to explore. One of my favorite franchises is Game of Thrones. It blends epic battles, political intrigue, and complex relationships into a compelling narrative. The series has a unique way of blending fantasy elements with deep themes, making it a memorable and thought-provoking watch.",
    tag: "moviesandshows",
  },
  {
    name: "Anime & Manga",
    content: `I enjoy anime and manga, offering endless adventures with diverse characters and captivating new series. I am a perceptive critic with high standards, interested in rich narratives and unique art styles that ignite my imagination. Subpar stories usually do not cut it for me. I thrive on finding those exceptional stories that inspire and resonate deeply. My passion for unpredictable storytelling means I never settle for anything less than the best, with Attack on Titan currently being the only piece of art to exceed that criteria and Vagabond being one of the best reads in manga.`,
    tag: "animeandmanga",
  },
  {
    name: "Fitness",
    content: `Working out is one of my key hobbies. I believe in maintaining a healthy and active lifestyle, and I enjoy various forms of exercise, from weightlifting to cardio workouts. Living by the creed stated by Thomas Jefferson, "A strong body makes the mind strong," is not just a guiding principle but also a basis of motivation and discipline for me. With Bulgarian splits being the simplest, and #1 as everyone's favorite workout 🤣 (if you know, you know).`,
    tag: "fitness",
  },
];

const tiles: Tiles[] = [
  {
    img: "img_1.webp",
    title: "Weather Now",
    type: "Web App",
    date: "12 Oct 2022",
    link: "https://weather-app-dhrego.vercel.app/",
  },
  {
    img: "shot.webp",
    title: "Upop",
    type: "Website",
    date: "12 Dec 2023",
    link: "https://upop-seven.vercel.app/",
  },
  {
    img: "shot_1.webp",
    title: "Freedom Photos",
    type: "Website",
    date: "12 Sept 2023",
    link: "https://freedom-roan.vercel.app/",
  },
  {
    img: "shot_2.webp",
    title: "Hairlo",
    type: "Design",
    date: "1 Nov 2024",
    link: "https://www.figma.com/proto/g3sIrJB07eXhsZTHZTBIAf/Hairlo?node-id=1-3&t=WYHzUPMf8VYRKxHs-1&starting-point-node-id=34%3A733&show-proto-sidebar=1",
  },
];

const navlinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Myself",
    href: "/me",
  },
  {
    text: "Works",
    href: "/works",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

export { links, cards, hobbies, tiles, navlinks };
