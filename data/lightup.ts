// Project content data structure
export interface ProjectContent {
    title: string;
    description: string;
    date: string;
    projectLink: string;
    tags: string[];
    sections: {
        title: string;
        content: string;
        image?: boolean;
        gallery?: boolean;
        media?: { 
            type: 'image' | 'video'; 
            src: string; 
            alt?: string; 
            caption?: string;
            autoPlay?: boolean;
            loop?: boolean;
            muted?: boolean;
        }[];
        markdownSlug?: string;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    workflow: {
        title: string;
        steps: string[];
    }[];
}

// Project content data
export const projectContent: ProjectContent = {
    title: "LightUp",
    description: "AI-Powered Annotations for every page on the web.",
    date: "Dec 2024",
    projectLink: "https://www.boimaginations.com/lightup",
    tags: ["Artificial Intelligence", "Chrome", "Open Source"],
    sections: [
        {
            title: "The Itch: 'The Tab-Switching Hell'",
            content: `It was kind of personal. I mean reading online is a battlefield for focus. We've all been there. You're deep into a fascinating article, you hit a complex term or a name you don't know, and the "curiosity tax" kicks in.

You highlight the text. You open a new tab. You search. You click a link. You skim. You find the answer. You try to find your original tab.

By the time you get back, your flow is shattered. Your "deep read" has turned into a shallow-click-fest.

This exact frustration was the starting point. I was inspired by the simple, elegant inline notes on lyric sites like Genius.com  and thought, "Why can't we have this... for everything?`,
            markdownSlug: "the-itch",
        },
        {
            title: "Boxes Inside Boxes: A Representation of What Knowledge Could Be.",
            content: "Knowledge is not a flat surface but a dynamic structure—boxes inside boxes, each containing layers of meaning waiting to be unpacked. Every concept holds the potential to expand, revealing deeper connections and insights. i was just obessed with this concpet for a perid of time, this phareses kept the fire of the idea in my head\n\nLightUp embodies this vision. Highlight a sentence, and a small window opens—a box that unveils hidden depths. From there, new dimensions of understanding unfold, allowing you to explore ideas without losing your place.\n\nBy keeping this exploration within the bounds of the same page, LightUp creates a dynamic representation of how knowledge grows: contained yet infinite, simple yet profound.",
            image: true,
            markdownSlug: "boxes-inside-boxes",
        },
        {
            title: "The problem I set out to solve",
            content: "I wanted an experience that:  \n• Lives where the words are (no new tabs)  \n• Is gentle and minimal (stays out of the way)  \n• Can scale across any page and language with AI\n\nThat shaped both the UX and the technical choices from day one.",
            image: true,
            media: [
                { 
                    type: 'video', 
                    src: '/aiproject2.mp4', 
                    caption: 'An eraly prototype of LightUp',
                    autoPlay: true,
                    loop: true,
                    muted: true
                }
            ],
            markdownSlug: "problem-to-solve",
        },
        {
            title: "From idea to shape — the design and interaction",
            content: "I kept the UI deliberately small and modest. LightUp sits as a toolbar icon; you highlight text and a compact popup appears with clear options: Explain, Summarize, Translate, Analyze, or an open 'Ask anything' flow. Keyboard shortcuts make the experience fluid for power users. The goal was to make discovery feel like margin notes coming alive—quick, contextual, and reversible.",
            gallery: true,
            media: [
                { type: 'video', src: '/lightup/vidoes/8.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/3.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/4.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/5.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/6.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/7.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/X Twitter Video Downloader.mp4', caption: '' },
            ],
            markdownSlug: "from-idea-to-shape",
        },
       
        {
            title: "The technical journey — pragmatic choices that let me ship",
            content: "I needed something that would feel native in the browser and be straightforward to develop and iterate on. A few pragmatic decisions:\n\nPlasmo framework & modern web tooling: I used a browser extension framework and standard Node tooling so development is fast and the build can target Chrome MV3 easily. The repo includes developer instructions—clone, pnpm install, pnpm dev—and a path to load a dev build into Chrome.\n\nFlexible AI backends: Rather than lock the product to a single model, I built LightUp to work with OpenAI, Google Gemini, Grok (xAI), and even local LLMs (llama.cpp / Text Generation WebUI). That choice felt important for openness and for users who prefer local-first privacy. It also meant adding a configuration layer to let users pick a backend and an API key.\n\nSimple activation and state: Selection-triggered popups, modes, and keyboard shortcuts kept the runtime logic focused; this reduced permissions and surface area for bugs. I also tuned the UI to respect light/dark themes and to animate subtly so the tool feels alive but not distracting.",
            image: true,
            // media: [
            //     { type: 'image', src: '/lightup/boxes.jpg', alt: 'Boxes Inside Boxes', caption: 'Knowledge as nested boxes' }
            // ]
        },
        // {
        //     title: "What LightUp does (the shipped product)",
        //     content: "At launch LightUp provides:\n- Instant explanations for selected text\n- Short and long summaries\n- Translations\n- Deeper analyses and follow-up questions\n- Multiple layout options (floating popup, sidebar, centered modal)\n- Keyboard-driven flows for speed\n\nYou can download releases or get the extension from the Chrome Web Store; the project is open-source under Apache-2.0 on GitHub.",
        //     image: true
        // },
        {
            title: "What users are saying",
            content: "",
            image: true,
            media: [
                { type: 'image', src: '/lightup/GrKWWxqWkAA2zie.png', alt: 'Boxes Inside Boxes', caption: '' },
                 { type: 'image', src: '/lightup/GqFpAIGXwAAabN0.png', alt: 'Boxes Inside Boxes', caption: '' },
                  { type: 'image', src: '/lightup/Gq7LBA2XMAAApxq.png', alt: 'Boxes Inside Boxes', caption: '' },
                   { type: 'image', src: '/lightup/GoRtowjWEAA3JP1.jpeg', alt: 'Boxes Inside Boxes', caption: '' }
            ]
        },
        // {
        //     title: "Trade-offs I accepted",
        //     content: "Simplicity vs. features: I intentionally resisted surface bloat. Some advanced annotation features (complex note-taking or heavy multi-document context) were deferred so the core selection → explanation loop could be fast and reliable.\n\nBackend flexibility vs. polish: Supporting many AI backends increased accessibility and robustness, but it meant more configuration complexity and testing. I judged access and openness more important at this stage than one-click perfect integration.\n\nOpen source vs. easy monetization: Making the code public invites contributions and trust, but it complicates commercial distribution and feature gating. For now, openness felt right—it aligns with the project's mission of helping people learn."
        // },
        {
            title: "What I learned",
            content: "Preserve the reader's rhythm: The smallest interruptions matter; a tool that saves seconds but saves cognitive momentum is more valuable than one that adds shiny features.\n\nDesign for graceful defaults: Users should be able to install and get value in seconds—then dive into settings if they want more control.\n\nOpenness scales trust: Shipping as open source made conversations with other developers and early users easier, and it opened a path to contributions that I wasn't equipped to build alone."
        },
        {
            title: "Closing — why this project matters to me",
            content: "LightUp began as a small, personal fix for a tiny frustration: the friction of curiosity. Building it taught me that design's quiet heroism is about preserving attention and creating small windows of clarity. For me, LightUp is less about replacing deep reading and more about honoring it—offering just enough light where a sentence asks to be understood."
        }
    ],
    features: [
        {
            title: "Stay in Flow:",
            description: "LightUp's clean interface keeps you focused on your work—no need to leave the page."
        },
        {
            title: "Instant Depth::",
            description: "Highlight any text to get detailed explanations, definitions, and even historical context within seconds."
        },
        {
            title: "Expand Your Understanding:",
            description: "Go beyond the basics with follow-up questions, related concepts, and insightful analyses."
        }
    ],
    workflow: [
        {
            title: "Choose Your AI Source:",
            steps: ["Opt for Local AI to prioritize privacy and keep data on your device, or select OpenAI's Cloud AI for faster processing and enhanced performance."]
        },
        {
            title: "Select Your Focus:",
            steps: ["Choose what you need—Explain, Summarize, Analyze, or Translate."]
        },
        {
            title: "Highlight and Explore:",
            steps: ["Highlight text on any page, and LightUp processes your selection instantly."]
        }
    ]
};
