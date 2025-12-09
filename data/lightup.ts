// Project content data structure
import type { StaticImageData } from 'next/image'

export interface ProjectContent {
    title: string;
    description: string;
    date: string;
    projectLink: string;
    tags: string[];
    sections: {
        title: string;
        content?: string;
        image?: boolean;
        gallery?: boolean;
        media?: {
            type: 'image' | 'video';
            src: StaticImageData | string;
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
import jayKadamImage from '../public/lightup/GrKWWxqWkAA2zie.png'
import studentTestimonialA from '../public/lightup/GqFpAIGXwAAabN0.png'
import studentTestimonialB from '../public/lightup/Gq7LBA2XMAAApxq.png'
import teacherTestimonial from '../public/lightup/GoRtowjWEAA3JP1.jpeg'
import peerlistProjectDay from '../public/lightup/1748282477575.jpeg'
import peerlistLeaderboard from '../public/lightup/launchpad-leaderboard-sadiqo.png'
import peerlistPage from '../public/lightup/lightuponpeerlist.png'
import lightupLogo from '../public/lightup/logo.png'
import brandPalette from '../public/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png'
import brandPosters from '../public/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp'

export const projectContent: ProjectContent = {
    title: "LightUp",
    description: "AI-Powered Annotations for every page on the web.",
    date: "December 2024",
    projectLink: "https://www.boimaginations.com/lightup",
    tags: ["Product Design", "Chrome Extension", "Open Source", "AI/ML"],
    sections: [
        // ============================================
        // SECTION 1: THE PROBLEM
        // ============================================
        {
            title: "The Problem",
            content: `**Tab-switching was killing my reading flow.**

You know the moment: you're deep into an article when you hit a term you don't understand. You highlight, open a new tab, search, skim results, then hunt for your original tab among seventeen others.

Research shows it takes **23 minutes to refocus** after an interruption. Each context-switch compounds into hours of lost focus.

I remembered the inline annotations on Genius.com—hover over a lyric, meaning appears in context. No tab-switching. Just understanding.

And I thought: *Why can't we have this for everything?*`,
            markdownSlug: "the-problem",
        },

        // ============================================
        // SECTION 2: THE GOALS
        // ============================================
        {
            title: "Success Criteria",
            content: `Before writing code, I set three measurable targets:

**1. Reduce context switches** — Get answers without leaving the page. Target: 80% fewer "look-it-up" tabs.

**2. Preserve flow** — Instant interactions. Target: <2 seconds from highlight to insight.

**3. Organic adoption** — Valuable enough that users share it. Target: 30%+ retention with zero marketing spend.`,
            markdownSlug: "goals",
        },

        // ============================================
        // SECTION 3: THE SOLUTION
        // ============================================
        {
            title: "The Solution",
            content: `I kept the UI deliberately quiet.

Highlight any text → a compact popup appears with clear options: Explain, Summarize, Translate, or Ask anything. Keyboard shortcuts for power users. no assumptions, no noise.

The breakthrough came from stripping away features. My first prototype had a permanent sidebar, auto-detection, and 5 action buttons. The simpler version—selection-triggered, 2 primary actions, subtle animations—outperformed in every metric.`,
            gallery: true,
            media: [
                { type: 'video', src: '/lightup/vidoes/8.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/3.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/4.mp4', caption: '' },
                { type: 'video', src: '/lightup/vidoes/5.mp4', caption: '' },
            ],
            markdownSlug: "solution",
        },

        // ============================================
        // SECTION 4: BRAND (images only, minimal text)
        // ============================================
        {
            title: "Brand & Identity",
            content: `The name "LightUp" captures the action: a quiet spark that makes meaning visible. The brand follows three rules: gentle clarity, calm luminosity, and a single glow-yellow accent.`,
            image: true,
            media: [
                {
                    type: 'image',
                    src: lightupLogo,
                    alt: 'LightUp logomark',
                    caption: 'Spark-inspired logomark'
                },
                {
                    type: 'image',
                    src: brandPalette,
                    alt: 'Brand palette',
                    caption: 'Color & typography system'
                },
                {
                    type: 'image',
                    src: brandPosters,
                    alt: 'Brand applications',
                    caption: 'Launch assets'
                }
            ],
        },

        // ============================================
        // SECTION 5: OPEN SOURCE
        // ============================================
        {
            title: "Why Open Source",
            content: `Extensions live inside your browser—they see everything you read. Open code is the only real transparency.

The community has fixed bugs I missed, suggested features I hadn't considered, and translated the interface into languages I don't speak. The repo is on GitHub under Apache-2.0.`,
            markdownSlug: "open-source",
        },

        // ============================================
        // SECTION 6: RESULTS & RECEPTION
        // ============================================
        {
            title: "Results",
            content: `Launched with zero marketing budget. First install within an hour.

Featured as "Project of the Day" on Peerlist and listed among top Chrome Extension builders. Users range from students translating papers to teachers walking classes through it.`,
            image: true,
            media: [
                { type: 'image', src: peerlistProjectDay, alt: 'Peerlist Project of the Day', caption: 'Project of the Day on Peerlist' },
                { type: 'image', src: jayKadamImage, alt: 'Jay Kadam testimonial', caption: 'Jay Kadam - Product Designer at Peerlist' },
                { type: 'image', src: studentTestimonialA, alt: 'Student testimonial', caption: 'Student feedback' },
                { type: 'image', src: teacherTestimonial, alt: 'Teacher testimonial', caption: 'Teacher feedback' }
            ]
        },

        // ============================================
        // SECTION 7: ITERATION STORY
        // ============================================
        {
            title: "What I Threw Away",
            content: `The first version was intentionally rough—and that's exactly why I shipped it.
                **What failed:**
                • **Sidebar layout** — felt invasive; users said it "took over" their reading
                • **Auto word detection** — technically clever, utterly annoying; users wanted control
                • **5 action buttons** — overwhelming; most people only needed 2

                **The breakthrough:** Making everything quieter. A compact popup that appears only on selection. no assumptions.

                Stripping features felt like losing progress. In reality, it was finding the product.`,
            markdownSlug: "iteration",
        },

        // ============================================
        // SECTION 8: KEY DECISIONS
        // ============================================
        {
            title: "Key Decisions",
            content: `**UI: Selection-triggered popup** — Sidebars felt invasive. A popup that hugs highlighted text preserves reading flow.

**AI: Multi-provider support** — OpenAI, Gemini, Grok, and local LLMs. Users pick based on privacy and preference.

**Permissions: Minimal** — Selection-triggered = fewer permissions = more trust. Extensions that ask for less get installed more.

**Open source** — Extensions see everything you read. Open code is the only real transparency.`,
            markdownSlug: "decisions",
        },

        // ============================================
        // SECTION 9: REFLECTIONS
        // ============================================
        {
            title: "What I Learned",
            content: `**Preserve rhythm over speed.** A tool that saves 2 seconds but breaks concentration is worse than one that takes 5 seconds and keeps you in flow.

**Design for graceful defaults.** Value in seconds, depth on demand. Complexity should be opt-in, never mandatory.

**Constraints breed clarity.** Chrome extension limitations—isolated styles, minimal APIs, hostile CSS environments—forced better design decisions than unlimited freedom would have.`,
            markdownSlug: "reflections",
        },

        // ============================================
        // SECTION 10: WHAT'S NEXT
        // ============================================
        {
            title: "What's Next",
            content: `On the roadmap: persistent annotations, smarter context awareness, collaborative reading features, and more AI providers.

Reading on the web is broken. We're drowning in information but starving for understanding. LightUp is my contribution to a more literate internet.`,
        }
    ],
    features: [
        {
            title: "Stay in Flow",
            description: "Get answers without leaving the page."
        },
        {
            title: "Instant Depth",
            description: "Highlight text, get explanations in seconds."
        },
        {
            title: "Your Choice of AI",
            description: "OpenAI, Gemini, Grok, or local LLMs."
        }
    ],
    workflow: [
        {
            title: "Choose Your AI",
            steps: ["Local AI for privacy, or cloud for speed."]
        },
        {
            title: "Highlight & Explore",
            steps: ["Select text, get instant insights."]
        }
    ]
};
