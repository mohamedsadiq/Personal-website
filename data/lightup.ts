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
            title: "Project Overview",
            content: "Today, I'm thrilled to introduce LightUp—a browser extension designed to make understanding and interacting with web content effortless.\n\nLightUp helps you understand text quickly with explanations, summaries, translations, and analyses. Just highlight any text, and LightUp gives you clear, useful insights without leaving the page."
        },
        {
            title: "Boxes Inside Boxes: A Representation of What Knowledge Could Be.",
            content: "Knowledge is not a flat surface but a dynamic structure—boxes inside boxes, each containing layers of meaning waiting to be unpacked. Every concept holds the potential to expand, revealing deeper connections and insights.\n\nLightUp embodies this vision. Highlight a sentence, and a small window opens—a box that unveils hidden depths. From there, new dimensions of understanding unfold, allowing you to explore ideas without losing your place.\n\nBy keeping this exploration within the bounds of the same page, LightUp creates a dynamic representation of how knowledge grows: contained yet infinite, simple yet profound."
        },
        {
            title: "The inspiration.",
            content: "The web is a big part of work, learning, and daily tasks, but switching tabs to find information can break focus. LightUp simplifies this by letting you explore and understand any web content instantly, inspired by how Genius.com explains song lyrics—now powered by AI for even deeper insights"
        },
        {
            title: "Annotation and AI.",
            content: "Annotations have always been a way to make sense of information, from notes in ancient texts to highlights in eBooks. They help add context, capture ideas, and revisit complex topics.\n\nTraditional annotations, though, are limited by one person's knowledge. What if they could go further, connecting to a wider pool of knowledge for deeper insights, broader context, and instant answers?\n\nThis is where AI transforms annotation into something extraordinary."
        },
        {
            title: "Open source.",
            content: "LightUp is open-source and available on GitHub. Developers, enthusiasts, and users are encouraged to contribute ideas, suggest features, and provide feedback to enhance the experience."
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
