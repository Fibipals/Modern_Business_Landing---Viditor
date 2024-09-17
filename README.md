<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Application Landing</h3>

   <div align="center">
     Build this project with our detailed tutorial on <a href="https://www.youtube.com/@fibipals" target="_blank"><b>Fibipals</b></a> YouTube. Learn, Create, Achive!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📦 [Assets](#assets)
7. 💡 [Resources](#resources)

## 📚 Tutorial

This repository contains the code for an in-depth tutorial featured on our YouTube channel, <a href="https://www.youtube.com/@fibipals" target="_blank"><b>Fibipals</b></a>.

If you’re a visual learner, this tutorial is perfect for you. Follow along to build projects like these step-by-step with our beginner-friendly guide!

<a href="https://www.youtube.com/@fibipals" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

This is a modern, fully responsive Next.js website for Viditor, built with TailwindCSS. It features an engaging hero section, a fixed navbar with section highlighting, a dynamic pricing section with a toggle, and a connected payment system. Perfect for showcasing applications, games, SaaS products, or any business-oriented project.


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Fully Responsive Design**: Enjoy seamless access and optimal viewing on any device, thanks to a design that adapts to different screen sizes.

👉 **Integrated Payment System**: A connected payment system for easy and secure transactions.

👉 **Modern UI/UX Elements**: Sleek and intuitive interface with contemporary design elements.

👉 **Beginner-Friendly Setup**: Easy to set up and customize, perfect for showcasing apps, games, SaaS, and more.

and many more, including efficient code architecture and reusability!

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Fibipals/Viditor-App-Landing.git
cd Viditor-App-Landing
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue-gradient': 'radial-gradient(circle at center, #020617 0%, #1e40af 100%)'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".h1": {
          "@apply uppercase font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl  tracking-wide":
            {},
        },
        ".h2": {
          "@apply font-semibold text-2xl md:text-3xl lg:text-4xl":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".p": {
          "@apply text-slate-300":{},
        },
        ".p-sm": {
          "@apply text-sm text-slate-300":{},
        },
        ".p-xs": {
          "@apply text-xs text-slate-600 font-semibold":{},
        },
        '.text-slogan': {
          '@apply text-lime-300 uppercase font-semibold text-sm  tracking-wider': {},
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
```

</details>

<details>
<summary><code>pricingSvg.tsx</code></summary>

```javascript
const PricingSvg = () => {
    return(
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#020617' width='2000' height='1500'/><defs><path fill='none' strokeWidth='2.6' strokeOpacity='0.32' id='a' d='M0.74-509.63l485.39 352.65l-185.4 570.61h-599.97l-185.4-570.61L0.74-509.63 M0.74-510.87l-486.56 353.51l185.85 571.99h601.42L487.3-157.36L0.74-510.87L0.74-510.87z'/></defs><g  transform='scale(0.766)' style={{ transformOrigin: 'center' }}><g  transform='' style={{ transformOrigin: 'center' }}><g  transform='rotate(-80 0 0)' style={{ transformOrigin: 'center' }}><g transform='translate(1000 750)'><use  stroke='#020617' href='#a' transform='rotate(5 0 0) scale(1.05)'/><use  stroke='#03081c' href='#a' transform='rotate(10 0 0) scale(1.1)'/><use  stroke='#040920' href='#a' transform='rotate(15 0 0) scale(1.15)'/><use  stroke='#040b25' href='#a' transform='rotate(20 0 0) scale(1.2)'/><use  stroke='#050d29' href='#a' transform='rotate(25 0 0) scale(1.25)'/><use  stroke='#070f2e' href='#a' transform='rotate(30 0 0) scale(1.3)'/><use  stroke='#081032' href='#a' transform='rotate(35 0 0) scale(1.35)'/><use  stroke='#091236' href='#a' transform='rotate(40 0 0) scale(1.4)'/><use  stroke='#0a153a' href='#a' transform='rotate(45 0 0) scale(1.45)'/><use  stroke='#0c173e' href='#a' transform='rotate(50 0 0) scale(1.5)'/><use  stroke='#0e1942' href='#a' transform='rotate(55 0 0) scale(1.55)'/><use  stroke='#0f1b46' href='#a' transform='rotate(60 0 0) scale(1.6)'/><use  stroke='#111e4a' href='#a' transform='rotate(65 0 0) scale(1.65)'/><use  stroke='#13204d' href='#a' transform='rotate(70 0 0) scale(1.7)'/><use  stroke='#152251' href='#a' transform='rotate(75 0 0) scale(1.75)'/><use  stroke='#172554' href='#a' transform='rotate(80 0 0) scale(1.8)'/></g></g></g></g></svg>
    )
}

export default PricingSvg
```
</details>


<details>
<summary><code>global.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

.gradient-01 {
  background-image: radial-gradient(circle at 50% 50%, rgb(27, 45, 140), rgb(2, 6, 23));
  filter: blur(125px);
}

.gradient-02{
  background-image: radial-gradient(circle at 50% 50%, rgb(44, 62, 149), rgb(2, 6, 23));
  filter: blur(125px);
}

.gradient-03{
  background-image: linear-gradient(rgb(2, 6, 23), rgb(44, 62, 149), rgb(2, 6, 23));
  filter: blur(125px);
}
```

</details>

<details>
<summary><code>Data</code></summary>

```txt
/*** Hero section ***/

Experience a user-friendly, fast, and efficient video editing tool that's also surprisingly powerful, enabling you to create stunning quickly, without compromising on quality.


/*** Features section ***/

const featureCards = [
  {
    icon: GiBrain,
    slogan: "Automated Editing",
    heading: "Seamless and Smart",
    text: "Our AI-powered editor automatically cuts, trims, and enhances your footage with precision, enabling you to focus on creativity without manual editing hassles.",
    buttonIcon: SiGithubactions,
    buttonText: "See in Action"
  },
  {
    icon: MdVideoLibrary,
    slogan: "Media Library",
    heading: "Unlimited Resources",
    text: "Explore our extensive media library, featuring diverse stock footage, high-quality music tracks, and professional effects to enhance your videos effortlessly.",
    buttonIcon: PiRocketLaunchBold,
    buttonText: "Explore Now"
  }
];

const features = [
  { icon: FaRobot, name: "AI Smart Tools" },
  { icon: FaCut, name: "Precise Trimming" },
  { icon: FaVideo, name: "High-Quality Exports" },
  { icon: GiFilmStrip, name: "Advanced Filters" }
];


/*** Pricing section ***/

###  Plan2  ###

name="startup"
slogan="Perfect for small teams"
option1='10GB storage'
option2='Multi-track editing'
option3='Motion graphics'
option4='Team projects'
buttonIcon={FaRegSquare}

###  Plan3  ###

name="company"
slogan="Best for businesses"
option1='100GB storage'
option2='Advanced analytics'
option3='Custom branding'
option4='24/7 support'
buttonIcon={PiHexagonBold}


/*** FAQ section ***/

const faqs = [
  {
    question: "What is an AI video editor?",
    answer: "An AI video editor uses artificial intelligence to automate and enhance video editing processes, making it easier and faster to create professional-quality videos."
  },
  {
    question: "How does AI improve video editing?",
    answer: "AI can automate repetitive tasks, enhance video quality, provide smart editing suggestions, and use machine learning to understand and apply optimal edits based on the content."
  },
  {
    question: "Can AI video editors edit videos automatically?",
    answer: "Yes, AI video editors can automatically trim, cut, and arrange video clips, apply transitions, and even add music based on the content and style preferences set by the user."
  },
  {
    question: "Is AI video editing suitable for beginners?",
    answer: "Absolutely! AI video editors are designed to be user-friendly, making it easier for beginners to create high-quality videos without needing extensive editing skills."
  },
  {
    question: "Can I customize the edits made by the AI?",
    answer: "Yes, most AI video editors allow users to manually adjust and customize the edits made by the AI to match their specific preferences and vision."
  },
  {
    question: "What types of videos can I edit with an AI video editor?",
    answer: "AI video editors can be used to edit a wide range of videos, including vlogs, tutorials, promotional videos, social media content, and more."
  },
  {
    question: "How fast can an AI video editor process a video?",
    answer: "The speed of processing depends on the length and complexity of the video, but AI video editors generally process videos much faster than traditional methods."
  },
  {
    question: "Do AI video editors support multiple video formats?",
    answer: "Yes, most AI video editors support a wide range of video formats, allowing you to import and export videos in the format that best suits your needs."
  },
  {
    question: "Are there any privacy concerns with AI video editors?",
    answer: "It's important to use AI video editors from reputable providers that ensure your data and content are secure and not misused. Always check the privacy policy of the service you are using."
  },
  {
    question: "Do AI video editors offer templates and presets?",
    answer: "Yes, many AI video editors come with a variety of templates and presets that can help you quickly create professional-looking videos with minimal effort."
  }
];


/*** Reviews section ***/

const reviews = [
  {
    name: "John Doe",
    imgSrc: "/reviews/rev1.jpg",
    company: "Tech Innovators Inc.",
    review: "This AI video editor is a game-changer! It made editing our promotional videos so much easier and faster."
  },
  {
    name: "Jane Smith",
    imgSrc: "/reviews/rev2.jpg",
    company: "Creative Studios",
    review: "I love how user-friendly the AI video editor is. It’s perfect for beginners and professionals alike."
  },
  {
    name: "Emily Johnson",
    imgSrc: "/reviews/rev3.jpg",
    company: "Marketing Gurus",
    review: "The automated editing features saved us a ton of time. The final product was polished and professional."
  },
  {
    name: "Michael Brown",
    imgSrc: "/reviews/rev4.jpg",
    company: "Content Creators LLC",
    review: "The AI suggestions were spot on and really helped improve the quality of our videos. Highly recommend!"
  },
  {
    name: "David Wilson",
    imgSrc: "/reviews/rev5.jpg",
    company: "Digital Media Experts",
    review: "This AI video editor has become an essential tool for our team. It’s efficient and easy to use."
  },
  {
    name: "Sarah Davis",
    imgSrc: "/reviews/rev6.jpg",
    company: "Video Production House",
    review: "The AI editor exceeded our expectations. The quality of our video content has significantly improved."
  }
];

```
</details>


## <a name="assets">📦 Assets</a>

Public Assets used in the project can be found [here](https://drive.google.com/file/d/1NxH1HInL6KzprzrYy-aP-odQlmFRQlYP/view?usp=drive_link)

## <a name="resources">💡 Resources</a>

Check out <a href="https://www.fibipals.com" target="_blank"><b>Fibipals.com</b></a>. Here, you can find components for your site, a cool community, articles, and more.
