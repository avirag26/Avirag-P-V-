export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Shown as a badge for commercial work, e.g. "Client · UK". */
  client?: string;
  tagline: string;
  summary: string;
  overview: string[];
  highlights: { title: string; body: string }[];
  stack: string[];
  live?: string;
  repo?: string;
  /** Path inside /public without extension — .jpg, .jpeg, .png, .webp and .avif are detected automatically. */
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "scholaro",
    name: "Scholaro",
    category: "E-Learning Platform",
    tagline: "A complete online learning platform — live in production.",
    summary:
      "A full-stack e-learning platform where students discover and enroll in courses and tutors publish and manage their content, with role-based dashboards for every user.",
    overview: [
      "Scholaro is my flagship product: a production e-learning platform built and deployed end-to-end. It brings students, tutors and administrators onto a single platform, each with their own experience and permissions.",
      "I owned the entire lifecycle — data modelling, API design, authentication, the learning experience, the admin tooling and deployment to a custom domain.",
    ],
    highlights: [
      {
        title: "Three roles, one platform",
        body: "Separate, permission-guarded experiences for students, tutors and admins — from course discovery and enrollment to content management and platform moderation.",
      },
      {
        title: "Course & curriculum management",
        body: "Tutors create structured courses with lessons and media; students follow a clean, distraction-free learning flow and track their progress.",
      },
      {
        title: "Secure by design",
        body: "Token-based authentication, protected routes and server-side validation keep user data and paid content safe.",
      },
      {
        title: "Shipped to production",
        body: "Deployed on a custom domain at scholaro.site with a fully responsive interface that works across mobile, tablet and desktop.",
      },
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    live: "https://scholaro.site",
    image: "/img/projects/scholaro",
    featured: true,
  },
  {
    slug: "cocospice",
    name: "Cocospice",
    category: "Restaurant Website",
    client: "Client · UK",
    tagline: "The online home of a South Indian restaurant in Lincoln, UK — live and taking orders.",
    summary:
      "A production ordering website built for a client in the United Kingdom, now powering a running South Indian restaurant in Lincoln — with a full menu, cart, customer accounts and local-SEO optimization.",
    overview: [
      "Cocospice is commercial work delivered for a client in the UK. The site is live today and serves as the digital front door of a South Indian restaurant — the first thing customers see before they order.",
      "I translated the restaurant's premium brand into a fast, mobile-first experience where customers can explore authentic dishes and order for delivery, and built it to be discovered by people searching for Indian food nearby.",
    ],
    highlights: [
      {
        title: "Real client, real business",
        body: "Delivered end-to-end for an international client — from requirements to deployment — and running in production for a live restaurant.",
      },
      {
        title: "Menu, cart & accounts",
        body: "An appetite-driven menu, a persistent cart and customer sign-in — a smooth path from browsing dishes to placing an order.",
      },
      {
        title: "Built to be found",
        body: "Semantic markup, rich metadata and local-SEO best practices so the restaurant ranks when nearby customers search.",
      },
      {
        title: "Mobile-first & fast",
        body: "Most customers order from their phones, so every screen is designed mobile-first and served from the edge on Vercel for instant loads.",
      },
    ],
    stack: ["Next.js", "React", "Local SEO", "Responsive UI", "Vercel"],
    live: "https://cocospice.uk",
    image: "/img/projects/cocospice",
  },
  {
    slug: "micro-c-media",
    name: "Micro C Media",
    category: "Creative Agency Website",
    client: "Client · Kerala & UK",
    tagline: "A motion-rich agency website that sells creativity from the first scroll.",
    summary:
      "The official website of Micro C Media, a creative digital agency in Kerala and the UK — crafted with smooth, high-end animations, a clear story across nine service lines and SEO plus AI-search optimization.",
    overview: [
      "An agency's website is its portfolio, so it has to feel premium the moment it loads. I built Micro C Media's site around motion: animated typography, scroll-triggered reveals and fluid transitions that make the brand feel alive.",
      "Underneath the visuals, the site is engineered for discovery and performance — structured content for search engines and AI answer platforms, and a fast, responsive build on Next.js.",
    ],
    highlights: [
      {
        title: "Motion-first design",
        body: "Split-text headline reveals, scroll-driven animations and smooth transitions — tuned to feel premium without hurting performance.",
      },
      {
        title: "Clear service storytelling",
        body: "Nine service lines — from social media and branding to web development and digital marketing — organized into a narrative that converts visitors into enquiries.",
      },
      {
        title: "SEO & AEO ready",
        body: "Semantic structure, structured data and local-SEO content targeting Kerala and the UK, optimized for both search engines and AI answer engines.",
      },
      {
        title: "Fast & responsive",
        body: "Built with Next.js and deployed on Vercel, with every animation and layout adapted for mobile, tablet and desktop.",
      },
    ],
    stack: ["Next.js", "React", "Web Animations", "SEO", "Vercel"],
    live: "https://microcmedia.com",
    image: "/img/projects/micro-c-media",
  },
  {
    slug: "streamdrop",
    name: "StreamDrop",
    category: "Peer-to-Peer File Sharing",
    tagline: "Browser-to-browser file transfer over WebRTC — no uploads, no storage.",
    summary:
      "A peer-to-peer file sharing app that streams files directly between browsers over WebRTC data channels, with chunking and backpressure control so even large files transfer smoothly.",
    overview: [
      "Most file sharing tools upload your file to a server and make the other person download it again. StreamDrop removes the middleman: files travel directly from one browser to another over an encrypted WebRTC connection.",
      "The server is only used for signaling — introducing the two peers so they can connect. Once connected, the file data never touches a server, which makes transfers private, fast and free of storage costs.",
    ],
    highlights: [
      {
        title: "Direct peer-to-peer channel",
        body: "Peers exchange connection offers and network candidates through a lightweight signaling server, then open an RTCDataChannel that carries the file directly between devices.",
      },
      {
        title: "Streamed in chunks",
        body: "Files are read as a stream and sliced into small binary chunks instead of being loaded into memory at once, so large files don't freeze or crash the browser.",
      },
      {
        title: "Backpressure handling",
        body: "The sender watches the channel's buffered amount and pauses when the buffer is full, resuming only when it drains — keeping throughput high without overflowing the connection.",
      },
      {
        title: "Private by default",
        body: "WebRTC encrypts all data in transit, and because nothing is stored server-side, files exist only on the sender's and receiver's devices. The receiver reassembles chunks and saves the file locally with live progress.",
      },
    ],
    stack: ["WebRTC", "RTCDataChannel", "Streams API", "Socket.io", "React", "Node.js"],
    image: "/img/projects/streamdrop",
  },
  {
    slug: "synoro-chat",
    name: "Synoro",
    category: "Real-time Chat Application",
    tagline: "Connect. Chat. Collaborate — in real time, on every device.",
    summary:
      "A real-time chat application built with React, Node.js, Socket.io and MongoDB Atlas — fully responsive, deployed on Vercel and Render, and engineered to stay always-on.",
    overview: [
      "Synoro is a real-time messaging app where messages are delivered instantly over persistent WebSocket connections powered by Socket.io, with conversations stored in MongoDB Atlas.",
      "Beyond the features, I focused on production concerns: a split deployment with the frontend on Vercel and the backend on Render, and an external uptime trigger that keeps the backend warm so users never wait for a cold start.",
    ],
    highlights: [
      {
        title: "Instant delivery",
        body: "Socket.io event-driven messaging pushes messages to recipients the moment they're sent — no refreshing, no polling.",
      },
      {
        title: "Persistent conversations",
        body: "Users, chats and message history are stored in MongoDB Atlas, so conversations are always there when users return.",
      },
      {
        title: "Always live",
        body: "An external scheduled trigger pings the Render backend to prevent free-tier sleep, keeping response times consistent around the clock.",
      },
      {
        title: "100% responsive",
        body: "A mobile-first interface that works flawlessly on phones, tablets and desktops.",
      },
    ],
    stack: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB Atlas", "Vercel", "Render"],
    live: "https://chat-app-mu-wheat.vercel.app/",
    image: "/img/projects/chat-app",
  },
  {
    slug: "santa-app",
    name: "Santa App",
    category: "Workshop Management App",
    tagline: "Where kids send wishes and Santa runs the workshop.",
    summary:
      "Santa's Workshop — a full-stack app with separate portals for kids and Santa: wish lists, gift production, elf assignments, a message centre and live Santa tracking, wrapped in games and festive interactions.",
    overview: [
      "Santa's Workshop is a festive full-stack application with two sides. Children get a playful portal to register, send wishes and letters, and play games; Santa gets a management system to run the entire North Pole operation.",
      "Behind the fun is a real role-based product: children management, gift production workflows, messaging and analytics — built with a strong focus on UI/UX for young users.",
    ],
    highlights: [
      {
        title: "Kids portal & Santa login",
        body: "Role-based access with separate experiences — a joyful portal for children and a management dashboard for Santa.",
      },
      {
        title: "Children & gift management",
        body: "Track children, behaviour scores and wish lists; manage gift production, assign elves and track delivery status.",
      },
      {
        title: "Message centre & live tracking",
        body: "Santa reads letters from children and sends replies, while kids follow Santa live and watch the Christmas countdown.",
      },
      {
        title: "Designed for kids",
        body: "Games, music, animations and friendly visuals — with simple navigation and responsive layouts for a safe, delightful experience.",
      },
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Vercel"],
    live: "https://sanda-app.vercel.app/",
    image: "/img/projects/santa-app",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
