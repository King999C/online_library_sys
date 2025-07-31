// src/data/books.js

const booksData = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-fi",
    description: "A desert planet, a prophecy, and a young hero shaping the fate of the universe.",
    rating: 4.8
  },
  {
    id: 2,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-fi",
    description: "A hacker is hired for one last job in a cyberpunk world of AIs and megacorporations.",
    rating: 4.4
  },
  {
    id: 3,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-fi",
    description: "A mathematician develops psychohistory to save a crumbling Galactic Empire.",
    rating: 4.6
  },
  {
    id: 4,
    title: "Snow Crash",
    author: "Neal Stephenson",
    category: "Sci-fi",
    description: "Pizza delivery, sword fights, and virtual reality collide in this dystopian satire.",
    rating: 4.2
  },
  {
    id: 5,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-fi",
    description: "An astronaut is stranded on Mars and must use science to survive.",
    rating: 4.7
  },
  {
    id: 6,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "Sci-fi",
    description: "A child genius is trained to lead Earth's defense against alien invaders.",
    rating: 4.6
  },
  {
    id: 7,
    title: "Hyperion",
    author: "Dan Simmons",
    category: "Sci-fi",
    description: "Seven pilgrims travel to the distant world of Hyperion to face a deadly mystery.",
    rating: 4.5
  },
  {
    id: 8,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "Sci-fi",
    description: "An envoy explores a planet where gender is fluid, challenging his worldview.",
    rating: 4.4
  },
  {
    id: 9,
    title: "Ready Player One",
    author: "Ernest Cline",
    category: "Sci-fi",
    description: "A teen hunts for an Easter egg in a VR world filled with 80s nostalgia.",
    rating: 4.3
  },
  {
    id: 10,
    title: "The Time Machine",
    author: "H.G. Wells",
    category: "Sci-fi",
    description: "A Victorian scientist travels to the future and witnesses humanity's fate.",
    rating: 4.1
  },
  {
    id: 11,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A mysterious millionaire's lavish life hides deep emotional scars and lost love.",
    rating: 4.4
  },
  {
    id: 12,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A child's eyes reveal the injustice and racism of the American South.",
    rating: 4.8
  },
  {
    id: 13,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian tale of surveillance, control, and rebellion in a totalitarian regime.",
    rating: 4.7
  },
  {
    id: 14,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    description: "Wit, romance, and social commentary unfold in 19th-century England.",
    rating: 4.5
  },
  {
    id: 15,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    description: "A teen navigates identity and alienation in post-war America.",
    rating: 4.2
  },
  {
    id: 16,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    description: "A shepherd follows a dream and discovers the true meaning of destiny.",
    rating: 4.6
  },
  {
    id: 17,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "Fiction",
    description: "In Nazi Germany, a girl finds comfort in books and words as bombs fall.",
    rating: 4.7
  },
  {
    id: 18,
    title: "Life of Pi",
    author: "Yann Martel",
    category: "Fiction",
    description: "A boy survives a shipwreck with a tiger, raising questions of truth and faith.",
    rating: 4.5
  },
  {
    id: 19,
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    category: "Fiction",
    description: "A grumpy old man finds unexpected friendship in a new neighborhood.",
    rating: 4.6
  },
  {
    id: 20,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    description: "A powerful story of friendship, guilt, and redemption set in Afghanistan.",
    rating: 4.8
  },
  {
    id: 21,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-fiction",
    description: "A sweeping history of the human race from evolution to modern civilization.",
    rating: 4.7
  },
  {
    id: 22,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-fiction",
    description: "A woman escapes a strict and abusive household to earn a PhD at Cambridge.",
    rating: 4.6
  },
  {
    id: 23,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-fiction",
    description: "Tiny changes, remarkable results—how to build good habits and break bad ones.",
    rating: 4.8
  },
  {
    id: 24,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Non-fiction",
    description: "A guide to spiritual awakening through living in the present moment.",
    rating: 4.5
  },
  {
    id: 25,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-fiction",
    description: "Explores the dual systems that shape our thinking—intuitive and logical.",
    rating: 4.6
  },
  {
    id: 26,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Non-fiction",
    description: "A brutally honest guide to living a meaningful life by caring less.",
    rating: 4.3
  },
  {
    id: 27,
    title: "Quiet: The Power of Introverts",
    author: "Susan Cain",
    category: "Non-fiction",
    description: "Celebrates the strength and value of introverted individuals in a loud world.",
    rating: 4.4
  },
  {
    id: 28,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "Non-fiction",
    description: "A Holocaust survivor’s lessons on finding purpose in the face of suffering.",
    rating: 4.8
  },
  {
    id: 29,
    title: "Grit",
    author: "Angela Duckworth",
    category: "Non-fiction",
    description: "Success isn't about talent, it's about passion and perseverance.",
    rating: 4.5
  },
  {
    id: 30,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-fiction",
    description: "A deeply personal memoir from the former First Lady of the United States.",
    rating: 4.7
  },
  {
    id: 31,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    description: "Explains why civilizations developed differently across the globe.",
    rating: 4.5
  },
  {
    id: 32,
    title: "A People's History of the United States",
    author: "Howard Zinn",
    category: "History",
    description: "Tells American history from the perspective of marginalized groups.",
    rating: 4.4
  },
  {
    id: 33,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    category: "History",
    description: "Chronicles Lincoln’s cabinet and his leadership during the Civil War.",
    rating: 4.6
  },
  {
    id: 34,
    title: "The Wright Brothers",
    author: "David McCullough",
    category: "History",
    description: "The true story of the inventors of the world’s first successful airplane.",
    rating: 4.6
  },
  {
    id: 35,
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    category: "History",
    description: "A detailed biography of the founding father and financial visionary.",
    rating: 4.7
  },
  {
    id: 36,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    description: "A Jewish girl’s haunting account of hiding from the Nazis during WWII.",
    rating: 4.8
  },
  {
    id: 37,
    title: "Postwar",
    author: "Tony Judt",
    category: "History",
    description: "A monumental history of Europe after World War II.",
    rating: 4.3
  },
  {
    id: 38,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    category: "History",
    description: "A sweeping narrative of ancient civilizations around the world.",
    rating: 4.5
  },
  {
    id: 39,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    category: "History",
    description: "A new look at history through the lens of trade routes and globalization.",
    rating: 4.4
  },
  {
    id: 40,
    title: "The Crusades",
    author: "Thomas Asbridge",
    category: "History",
    description: "A comprehensive account of the bloody Christian-Muslim wars for Jerusalem.",
    rating: 4.2
  },
  {
    id: 41,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Fiction",
    description: "A futuristic society driven by pleasure and control raises ethical questions.",
    rating: 4.4
  },
  {
    id: 42,
    title: "Catch-22",
    author: "Joseph Heller",
    category: "Fiction",
    description: "A darkly comedic war novel criticizing bureaucracy and absurdity.",
    rating: 4.3
  },
  {
    id: 43,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    category: "Fiction",
    description: "A time-traveling soldier experiences the horrors of WWII and alien abduction.",
    rating: 4.2
  },
  {
    id: 44,
    title: "Frankenstein",
    author: "Mary Shelley",
    category: "Sci-fi",
    description: "A scientist plays god, creating a monster that turns against humanity.",
    rating: 4.4
  },
  {
    id: 45,
    title: "The War of the Worlds",
    author: "H.G. Wells",
    category: "Sci-fi",
    description: "Martians invade Earth, challenging mankind’s survival.",
    rating: 4.3
  },
  {
    id: 46,
    title: "The Road",
    author: "Cormac McCarthy",
    category: "Fiction",
    description: "A father and son journey through a post-apocalyptic wasteland.",
    rating: 4.5
  },
  {
    id: 47,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    category: "Non-fiction",
    description: "The story of the woman behind the world’s most important cell line.",
    rating: 4.6
  },
  {
    id: 48,
    title: "Into the Wild",
    author: "Jon Krakauer",
    category: "Non-fiction",
    description: "A young man’s quest for meaning leads him into the Alaskan wilderness.",
    rating: 4.4
  },
  {
    id: 49,
    title: "The Code Breaker",
    author: "Walter Isaacson",
    category: "Non-fiction",
    description: "The race to edit genes and the science of CRISPR by following Jennifer Doudna.",
    rating: 4.6
  },
  {
    id: 50,
    title: "The Splendid and the Vile",
    author: "Erik Larson",
    category: "History",
    description: "Winston Churchill’s leadership during the darkest year of WWII.",
    rating: 4.7
  },
];

export default booksData;
