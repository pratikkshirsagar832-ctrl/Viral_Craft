export const NAV_LINKS = [
  { page: "home", label: "Home" },
  { page: "services", label: "Services" },
  { page: "portfolio", label: "Portfolio" },
  { page: "industries", label: "Industries" },
  { page: "pricing", label: "Pricing" },
  { page: "about", label: "About" },
  { page: "testimonials", label: "Testimonials" },
  { page: "faq", label: "FAQ" },
  { page: "contact", label: "Contact" },
] as const;

export const WHATSAPP_URL =
  "https://wa.me/919170326268?text=" +
  encodeURIComponent(
    "Hi ViralCraft Media! I'm interested in AI & UGC Video Ads for my brand. Let's connect!",
  );

export const EMAIL_INQUIRY_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=viralcraftai32@gmail.com&su=AI%20Video%20Inquiry%20-%20ViralCraft%20Media&body=Hi%20ViralCraft%20Team,%0A%0AI%20am%20interested%20in%20creating%20AI%20video%20ads%20for%20my%20brand.";

export const EMAIL_INQUIRY_MAILTO =
  "mailto:viralcraftai32@gmail.com?subject=AI%20Video%20Inquiry%20-%20ViralCraft%20Media&body=Hi%20ViralCraft%20Team,%0A%0AI%20am%20interested%20in%20creating%20AI%20video%20ads%20for%20my%20brand.";

export const HERO_SLIDES = [
  {
    badgeValue: "+3.8x",
    badgeTitle: "Meta ROAS",
    badgeSub: "15s Custom AI Ad",
    videoSrc:
      "/videos/video-1.mp4",
    handle: "@ViralCraftMedia",
    caption:
      '"Launch Week Special Trial: 15-second custom AI video ad for E-commerce & Local Brands."',
    statLabel: "25M+ Organic",
    statRating: "4.9 ★ Rating",
  },
  {
    badgeValue: "A vs B",
    badgeTitle: "AI Ad Style",
    badgeSub: "Talking vs B-Roll",
    videoSrc:
      "/videos/video-2.mp4",
    handle: "@ViralCraftMedia",
    caption:
      '"Option A: AI Talking Head Expert vs Option B: Cinematic B-Roll. Which converts better?"',
    statLabel: "12M+ Organic",
    statRating: "5.0 ★ Rating",
  },
  {
    badgeValue: "+310%",
    badgeTitle: "Hook Rate",
    badgeSub: "Content Converts",
    videoSrc:
      "/videos/video-3.mp4",
    handle: "@ViralCraftMedia",
    caption:
      '"90% of business owners make aesthetic videos with zero strategy. We build hook-first AI UGC!"',
    statLabel: "8.1M Views",
    statRating: "4.9 ★ Rating",
  },
  {
    badgeValue: "+6.1x",
    badgeTitle: "Peak ROAS",
    badgeSub: "4K Property & Gym",
    videoSrc:
      "/videos/video-4.mp4",
    handle: "@ViralCraftMedia",
    caption:
      '"Luxury Real Estate walkthroughs & AI Fitness Promotions that give your brand a high-end feel."',
    statLabel: "14.4M Views",
    statRating: "5.0 ★ Rating",
  },
  {
    badgeValue: "+260%",
    badgeTitle: "CTR Surge",
    badgeSub: "3D Motion & Sora",
    videoSrc: "/videos/video-5.mp4",
    handle: "@ViralCraftMedia",
    caption:
      '"Sora AI avatars & Apple-grade 3D motion graphics created to scale D2C brands."',
    statLabel: "9.5M Views",
    statRating: "4.9 ★ Rating",
  },
] as const;

export const CLIENT_AVATARS = [
  { id: "avatar-1", alt: "Client avatar" },
  { id: "avatar-2", alt: "Client avatar" },
  { id: "avatar-3", alt: "Client avatar" },
  { id: "avatar-4", alt: "Client avatar" },
];

export const STATS = [
  { value: "50K", suffix: "+", label: "Creators", icon: "Users" },
  { value: "25M", suffix: "+", label: "Views", icon: "Eye" },
  { value: "7K", suffix: "+", label: "Brands", icon: "Building2" },
  { value: "4.9", suffix: "/5.0", label: "Rating", icon: "Star" },
] as const;

export type Capability = {
  badge: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
};

export const CAPABILITIES: Capability[] = [
  {
    badge: "Highest ROI",
    title: "AI UGC Videos",
    description:
      "Hyper-realistic AI avatar & voice-over user generated videos built for rapid ad testing.",
    icon: "Bot",
    highlight: true,
  },
  {
    badge: "Top Conversion",
    title: "Real Human UGC",
    description:
      "Relatable, high-converting organic style videos crafted by top creator talent.",
    icon: "Users",
  },
  {
    badge: "Next-Gen",
    title: "AI Models & Photorealism",
    description:
      "Virtual brand ambassadors and digital models tailored to your brand identity.",
    icon: "Sparkles",
  },
  {
    badge: "Cinematic",
    title: "3D Product Ads",
    description:
      "Cinematic 3D motion graphics and product teardowns that grab immediate attention.",
    icon: "Box",
  },
  {
    badge: "Essential",
    title: "Viral Video Editing",
    description:
      "High-retention editing with magnetic captions, sound effects, and fast pacing.",
    icon: "Video",
  },
  {
    badge: "Growth Core",
    title: "Creative Strategy & Hooks",
    description:
      "Data-driven ad scriptwriting and angle research to unlock profitable ad spend.",
    icon: "Lightbulb",
  },
  {
    badge: "Scale Fast",
    title: "Performance Creative Suite",
    description:
      "End-to-end creative testing matrix for Meta, TikTok, YouTube Shorts & Google.",
    icon: "TrendingUp",
  },
  {
    badge: "Luxury Feel",
    title: "Brand Identity & Motion",
    description:
      "Luxury visual branding, motion guidelines, and 3D brand asset libraries.",
    icon: "Palette",
  },
  {
    badge: "Organic Growth",
    title: "Social Media Growth Engine",
    description:
      "Full-stack organic short-form content production and channel management.",
    icon: "Share2",
  },
  {
    badge: "Enterprise",
    title: "Full Content Production",
    description:
      "On-location commercial shoots, studio lighting, and high-end brand films.",
    icon: "Camera",
  },
];

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  capabilities: { name: string; desc: string }[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-video",
    number: "01",
    title: "AI Video Production",
    tagline: "Ideas into impossible-looking films.",
    description:
      "Cinematic AI-powered films for brands, products and campaigns — from a single product image to complete advertising movies. No sets, no crews, no weeks of waiting.",
    icon: "Bot",
    gradient: "from-orange-500/15 to-amber-500/10",
    capabilities: [
      { name: "AI Product Films", desc: "One product becomes a cinematic, ad-ready film." },
      { name: "AI UGC & Creator Ads", desc: "Creator-style ads at scale, without a single shoot." },
      { name: "AI Models & Digital Humans", desc: "Campaign-ready spokespeople and digital personalities." },
      { name: "AI Commercials", desc: "Big-commercial impact without the production chaos." },
      { name: "AI Social Reels", desc: "Scroll-stopping AI content for every social platform." },
      { name: "AI Brand Films", desc: "Launch films and brand stories that feel like cinema." },
      { name: "AI Product-to-Ad", desc: "A single product photo becomes a full ad creative." },
    ],
  },
  {
    id: "ugc-human",
    number: "02",
    title: "UGC & Human Content",
    tagline: "Real people. Real reactions. Real content.",
    description:
      "Real people, real reactions, real content. Creator-led videos matched to your audience — from testimonials and unboxings to founder stories — that make your brand feel human, relatable and conversion-ready.",
    icon: "Users",
    gradient: "from-blue-500/15 to-sky-500/10",
    capabilities: [
      { name: "UGC Ads", desc: "Creator-style performance videos your audience believes." },
      { name: "Product Reviews", desc: "Honest-feeling reviews that build instant trust." },
      { name: "Testimonials", desc: "Customer stories that turn skeptics into buyers." },
      { name: "Unboxing", desc: "First-impression content that triggers curiosity and desire." },
      { name: "Spokesperson", desc: "A professional face and voice for your brand." },
      { name: "Product Demos", desc: "Show the product working — answer objections visually." },
      { name: "Founder Videos", desc: "Put your founder in front of the story." },
    ],
  },
  {
    id: "cgi-vfx",
    number: "03",
    title: "CGI, 3D & VFX",
    tagline: "When reality isn't enough.",
    description:
      "When reality isn't enough. Photoreal 3D, liquid simulations and cinematic VFX that turn ordinary products into extraordinary advertising.",
    icon: "Box",
    gradient: "from-purple-500/15 to-indigo-500/10",
    capabilities: [
      { name: "3D Product Animation", desc: "Cinematic product motion renders that feel expensive." },
      { name: "CGI Product Ads", desc: "Photoreal products that never existed on a set." },
      { name: "Product Transformation", desc: "Morphing, reveal and evolution effects that hypnotize." },
      { name: "Liquid Simulation", desc: "Fluid dynamics that make products look premium." },
      { name: "Particle Effects", desc: "Energy, dust and atmosphere in perfect motion." },
      { name: "VFX & Compositing", desc: "Seamless visual effects integrated into every frame." },
      { name: "Anamorphic / 3D OOH", desc: "Billboards that break the frame and stop traffic." },
    ],
  },
  {
    id: "short-form",
    number: "04",
    title: "Short-Form Content",
    tagline: "Built for the scroll. Designed for attention.",
    description:
      "A complete scroll-stopping system — concept, script, production, editing and CTA — engineered for the first three seconds and built to hold attention till the last.",
    icon: "Video",
    gradient: "from-emerald-500/15 to-teal-500/10",
    capabilities: [
      { name: "Instagram Reels", desc: "Native-optimized vertical content for maximum reach." },
      { name: "YouTube Shorts", desc: "Discovery-engine short-form that brings new audiences." },
      { name: "Facebook Reels", desc: "Cross-platform social ads that multiply your reach." },
      { name: "Product Reels", desc: "Products made for the scroll — visual and persuasive." },
      { name: "Educational Reels", desc: "Authority content that teaches and converts." },
      { name: "Ad Creatives", desc: "Scroll-stopping paid ad variations, ready to test." },
      { name: "Founder & Brand Content", desc: "Personality-led storytelling that builds connection." },
    ],
  },
  {
    id: "creative-ad",
    number: "05",
    title: "Creative Ad Production",
    tagline: "Creative that doesn't just look good. It has a job to do.",
    description:
      "From one product to dozens of ad variations — a creative testing system that lowers CAC, beats ad fatigue and unlocks profitable spend.",
    icon: "Lightbulb",
    gradient: "from-amber-500/15 to-yellow-500/10",
    capabilities: [
      { name: "Creative Strategy", desc: "Data-driven creative direction before anything is made." },
      { name: "Ad Concepts", desc: "Campaign concepts engineered to convert, not just look good." },
      { name: "Hook Development", desc: "First-3-second attention engineering that stops the scroll." },
      { name: "Scriptwriting", desc: "Psychology-backed ad scripts that sell without sounding salesy." },
      { name: "Creative Variations", desc: "One winning idea, executed across every format." },
      { name: "Multiple Ad Angles", desc: "Test more angles, find winners faster." },
      { name: "Performance Creative", desc: "Creative measured by CPA and ROAS — never by vibes." },
    ],
  },
  {
    id: "product-visuals",
    number: "06",
    title: "Product Visuals",
    tagline: "One product. Infinite possibilities.",
    description:
      "AI-powered product photography, lifestyle scenes and animation for e-commerce and advertising — listing-ready visuals that sell, without a studio.",
    icon: "Camera",
    gradient: "from-rose-500/15 to-pink-500/10",
    capabilities: [
      { name: "AI Product Photography", desc: "Studio-grade product shots from a single image." },
      { name: "AI Lifestyle Images", desc: "Products placed in real-life scenes your audience sees." },
      { name: "AI Model Photography", desc: "Campaign-ready model visuals without a photoshoot." },
      { name: "E-commerce Visuals", desc: "Listing-ready hero images that lift conversion rates." },
      { name: "Product Retouching", desc: "Pixel-perfect cleanup and color grading." },
      { name: "Background Replacement", desc: "Any scene, perfectly lit, in seconds." },
      { name: "Product-to-Video", desc: "Turn still product shots into moving creative." },
    ],
  },
  {
    id: "performance-marketing",
    number: "07",
    title: "Performance Marketing",
    tagline: "Creative that's measured. Spend that works.",
    description:
      "We plan, launch and optimize paid campaigns across Meta, Google, YouTube, TikTok, Pinterest and more — with ad creatives built in-house so every rupee of spend is backed by the right ad.",
    icon: "TrendingUp",
    gradient: "from-cyan-500/15 to-sky-500/10",
    capabilities: [
      { name: "Meta Ads", desc: "Facebook & Instagram full-funnel paid campaigns." },
      { name: "Google Ads", desc: "Search, Shopping & Performance Max done right." },
      { name: "YouTube Ads", desc: "Pre-roll, Shorts & video discovery campaigns." },
      { name: "TikTok Ads", desc: "Spark Ads and paid creative testing at scale." },
      { name: "Pinterest Ads", desc: "Visual discovery campaigns for lifestyle brands." },
      { name: "Campaign Management", desc: "Targeting, budget and optimization handled end-to-end." },
      { name: "Performance Reporting", desc: "ROAS, CPA and creative analytics — transparent, always." },
    ],
  },
  {
    id: "social-media-management",
    number: "08",
    title: "Social Media Management",
    tagline: "Your brand, posting daily.",
    description:
      "Complete social media management — strategy, content calendar, posting, community management and reporting across Instagram, Facebook, YouTube and LinkedIn. Your brand shows up daily with content that grows reach, engagement and trust.",
    icon: "Instagram",
    gradient: "from-fuchsia-500/15 to-pink-500/10",
    capabilities: [
      { name: "Social Media Strategy", desc: "A platform-wise growth roadmap built on data." },
      { name: "Content Calendar & Planning", desc: "A month of content, planned and ready in advance." },
      { name: "Reels & Short-Form Strategy", desc: "A scroll-stopping content system for every platform." },
      { name: "Content Creation", desc: "Design, video and copy — all produced in-house." },
      { name: "Community Management", desc: "Comments, DMs and engagement handled daily." },
      { name: "Social Media Growth", desc: "Follower growth, reach and retention that compounds." },
      { name: "Analytics & Reporting", desc: "Monthly performance reports in plain language." },
    ],
  },
];

export const PRODUCT_PIPELINE = [
  { name: "One Product", desc: "A single photo of your product." },
  { name: "AI Product Image", desc: "Campaign-ready visuals generated." },
  { name: "AI Video", desc: "Cinematic AI ad built from stills." },
  { name: "UGC Ad", desc: "Creator-style performance ad." },
  { name: "CGI Ad", desc: "Photoreal 3D product film." },
  { name: "Reel", desc: "Scroll-stopping short-form content." },
  { name: "Performance Creative", desc: "Ad variations measured by ROAS." },
];

export const SHORT_FORM_SYSTEM = [
  { name: "Hook", desc: "Stop the scroll in the first 3 seconds." },
  { name: "Story", desc: "Hold attention with a narrative arc." },
  { name: "Visual", desc: "High-retention pacing and motion." },
  { name: "Retention", desc: "Pattern interrupts and re-engagement." },
  { name: "CTA", desc: "Clear next step for the viewer." },
];

export const SPOTLIGHT = {
  eyebrow: "Highest ROI Spotlight",
  popularFor: "Popular for: D2C, Ecommerce & SaaS Brands",
  title: "AI UGC Videos",
  description:
    "Combine cutting-edge AI avatar synthesis, emotion-tailored voiceovers, and dynamic hooks to churn out 50+ ad variations per week at 1/10th traditional production cost.",
  metric: "+310% Hook Rate boost across Meta & TikTok ads",
  deliverables: [
    "1080x1920 Vertical Ads",
    "Multilingual Script Translation",
    "Hook Variations (3x per video)",
    "Raw MP4 + Editable Captions",
  ],
  cta: "Book Strategy Call For AI UGC Videos",
};

export const PORTFOLIO_TABS = [
  "All",
  "Beauty",
  "Fashion",
  "Food",
  "Electronics",
  "Home",
  "Lifestyle",
  "AI",
  "UGC",
];

export type CaseStudy = {
  id: string;
  title: string;
  brand: string;
  category: string;
  videoUrl: string;
  posterId: string;
  views: string;
  ctrIncrease: string;
  roas: string;
  tags: string[];
  description: string;
  clientQuote: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "glow-beauty-ai",
    title: "GlowSkin AI Hydration Hook",
    brand: "GlowSkin Botanicals",
    category: "Beauty",
    videoUrl:
      "/videos/video-1.mp4",
    posterId: "a girl with perfume",
    views: "4.2M",
    ctrIncrease: "+180%",
    roas: "4.8x",
    tags: ["AI Model", "UGC Beauty", "Meta Ads"],
    description:
      "A 15-second viral UGC video combining an AI voiceover hook with high-definition facial hydration closeups.",
    clientQuote:
      "ViralCraft boosted our Meta ROAS from 1.9x to 4.8x within 2 weeks of launching this creative.",
  },
  {
    id: "urban-threads-streetwear",
    title: "Aura Streetwear 3D Unboxing",
    brand: "Aura Apparel",
    category: "Fashion",
    videoUrl:
      "/videos/video-2.mp4",
    posterId: "athleate ",
    views: "2.8M",
    ctrIncrease: "+220%",
    roas: "5.2x",
    tags: ["3D Motion", "Fashion Reel", "TikTok Ad"],
    description:
      "Dynamic fast-cut streetwear showcase featuring 3D product particle disintegrations and bass-boosted sound design.",
    clientQuote:
      "The 3D floating jacket effect made this video go insanely viral on TikTok.",
  },
  {
    id: "nutri-blend-protein",
    title: "NutriBlend Daily Energy Shake",
    brand: "NutriBlend Organic",
    category: "Food",
    videoUrl:
      "/videos/video-3.mp4",
    posterId: "cat-food",
    views: "6.1M",
    ctrIncrease: "+310%",
    roas: "4.2x",
    tags: ["Problem-Solution", "Real Human UGC", "Instagram Reel"],
    description:
      "Authentic 3-step morning routine video showcasing instant morning energy without coffee jitters.",
    clientQuote: "Hands down our best performing ad asset of Q2 2026.",
  },
  {
    id: "sonic-earbuds-pro",
    title: "SonicBuds Noise-Canceling Teardown",
    brand: "SonicTech Audio",
    category: "Electronics",
    videoUrl:
      "/videos/video-4.mp4",
    posterId: "samsung new phone galaxy A56",
    views: "8.4M",
    ctrIncrease: "+400%",
    roas: "6.1x",
    tags: ["3D Teardown", "Product Ad", "YouTube Short"],
    description:
      "Apple-inspired explode-view 3D animation highlighting active noise cancellation technology.",
    clientQuote:
      "Looked like an official Apple launch commercial. Generated $140K in direct sales.",
  },
  {
    id: "luxe-home-aroma",
    title: "AromaLuxe Smart Diffuser",
    brand: "AromaLuxe Living",
    category: "Home",
    videoUrl:
      "/videos/video-5.mp4",
    posterId: "home beutifull in indipendence day",
    views: "1.9M",
    ctrIncrease: "+140%",
    roas: "3.9x",
    tags: ["Aesthetic Home", "AI UGC", "Pinterest & Meta"],
    description:
      "Minimalist aesthetic home video with serene ambient soundscapes and AI narrator.",
    clientQuote:
      "Super clean aesthetic that captured our high-net-worth audience immediately.",
  },
  {
    id: "zen-fit-smartwatch",
    title: "ZenPulse Fitness Tracker",
    brand: "ZenPulse Wearables",
    category: "Lifestyle",
    videoUrl: "/videos/video-6.mp4",
    posterId: "cat-fitness",
    views: "3.5M",
    ctrIncrease: "+260%",
    roas: "4.5x",
    tags: ["Active Lifestyle", "Human UGC", "Reels"],
    description:
      "High-energy outdoor running reel with live heart-rate overlay graphics and instant stats.",
    clientQuote:
      "The fast pacing and live data overlays drove incredible engagement.",
  },
  {
    id: "cyber-ai-saas",
    title: "PromptCraft AI Creator Suite",
    brand: "PromptCraft Inc",
    category: "AI",
    videoUrl: "/videos/video-7.mp4",
    posterId: "Webinar",
    views: "12.1M",
    ctrIncrease: "+510%",
    roas: "7.4x",
    tags: ["AI Avatar", "SaaS Demo", "LinkedIn & Meta"],
    description:
      "Futuristic AI avatar walk-through explaining complex workflow automation in under 30 seconds.",
    clientQuote: "Our CPA dropped by 45% on day 1. ViralCraft is magic.",
  },
  {
    id: "pure-matcha-blend",
    title: "Kyoto Pure Matcha Whisk",
    brand: "Kyoto Rituals",
    category: "UGC",
    videoUrl:
      "/videos/video-7.mp4",
    posterId: "quick express dilevering parsels",
    views: "5.0M",
    ctrIncrease: "+290%",
    roas: "5.0x",
    tags: ["ASMR UGC", "Organic TikTok", "D2C Food"],
    description:
      "ASMR matcha preparation with crisp sound engineering and customer reaction shot.",
    clientQuote: "Outperformed every paid creative we have ever run.",
  },
];

export const WORKFLOW_STEPS = [
  {
    number: "01",
    icon: "Search",
    title: "Discover",
    description:
      "We understand your product, audience and objective — mapping target market, winning ads, brand guidelines and CPA metrics.",
    deliverable: "Creative Audit & Testing Strategy",
  },
  {
    number: "02",
    icon: "Lightbulb",
    title: "Concept",
    description:
      "We develop the creative direction, hook and visual concept — scripting multiple psychological angles and ad variations.",
    deliverable: "Approved Scripts & Angle Matrix",
  },
  {
    number: "03",
    icon: "Video",
    title: "Create",
    description:
      "Our team produces the AI / UGC / CGI / human-led creative — rendered, filmed and edited to high-retention standards.",
    deliverable: "Raw Footage, Renders & First Cuts",
  },
  {
    number: "04",
    icon: "Rocket",
    title: "Deliver",
    description:
      "Final content optimized for your platform and campaign — launched, tracked and iterated into new winners.",
    deliverable: "Final 4K Assets & Performance Report",
  },
];

export const WORKFLOW_TRACKER = ["Discover", "Concept", "Create", "Deliver"];

export const ADVANTAGES = [
  {
    icon: "Clock",
    title: "48-Hour Delivery",
    description: "Rapid turnaround so you never run out of fresh ad creatives.",
  },
  {
    icon: "WandSparkles",
    title: "Premium Editing",
    description:
      "Apple-grade motion graphics, color grading & kinetic typography.",
  },
  {
    icon: "Award",
    title: "Professional Team",
    description:
      "Ex-Facebook & top agency creative directors leading your project.",
  },
  {
    icon: "Cpu",
    title: "AI Specialists",
    description:
      "Mastery over GenAI avatars, Midjourney, Sora & 3D render engines.",
  },
  {
    icon: "FileText",
    title: "Creative Scripts",
    description:
      "Psychology-backed scripts designed specifically to stop the thumb.",
  },
  {
    icon: "RotateCcw",
    title: "Unlimited Revisions",
    description: "We iterate until you are 100% delighted with the final cut.",
  },
  {
    icon: "MessageSquare",
    title: "Fast Communication",
    description:
      "Dedicated Slack / WhatsApp channel with direct agency leads.",
  },
  {
    icon: "DollarSign",
    title: "Affordable Pricing",
    description:
      "Enterprise creative quality at a fraction of traditional agency costs.",
  },
  {
    icon: "ChartColumn",
    title: "High Conversion Content",
    description:
      "Every frame engineered specifically to lower CAC and boost ROAS.",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarId: string;
  quote: string;
  result: string;
  rating: string;
  category?: string;
};

export const FEATURED_TESTIMONIAL: Testimonial = {
  id: "featured",
  name: "Rohan Sharma",
  role: "Founder & CMO,",
  company: "SkinGlow India",
  avatarId: "avatar-1",
  quote:
    '"ViralCraft transformed our Meta ad strategy. Their AI UGC videos gave us 3x higher hook rates compared to our old agency, cutting our CAC by 42%!"',
  result: "3.8x ROAS Generated",
  rating: "5.0",
  category: "Beauty",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan Sharma",
    role: "",
    company: "SkinGlow India",
    avatarId: "avatar-1",
    quote:
      '"ViralCraft transformed our Meta ad strategy. Their AI UGC videos gave us 3x higher hook rates compared to our old agency, cutting our CAC by 42%!"',
    result: "3.8x ROAS Generated",
    rating: "5.0",
  },
  {
    id: "t2",
    name: "Ananya Verma",
    role: "",
    company: "Kira Fashion",
    avatarId: "avatar-2",
    quote:
      '"The 3D motion product ads and photorealistic AI models look like they were produced by a $100K Studio in New York. The speed of execution is mind-blowing."',
    result: "+280% Revenue Increase",
    rating: "5.0",
  },
  {
    id: "t3",
    name: "Vikram Mehta",
    role: "",
    company: "VoltElectronics",
    avatarId: "avatar-3",
    quote:
      '"Their team produced 20 video ads in less than 5 days. 3 of those creatives scaled our Amazon store sales to 8 figures. Absolutely essential creative partner."',
    result: "10M+ Views Across Ads",
    rating: "5.0",
  },
  {
    id: "t4",
    name: "Priya Sundaram",
    role: "",
    company: "NourishOrganics",
    avatarId: "avatar-4",
    quote:
      '"Authentic creator UGC combined with high-retention editing. Their team delivers script-to-final video in 48 hours without compromising on quality."',
    result: "4.5x ROAS Achieved",
    rating: "5.0",
  },
  {
    id: "t5",
    name: "Devansh Roy",
    role: "",
    company: "UrbanLifestyle Goods",
    avatarId: "avatar-5",
    quote:
      '"If you want to stay ahead of creative fatigue on Meta and TikTok, ViralCraft is the undisputed secret weapon. Unbelievable return on investment."',
    result: "$1.2M Ad Revenue",
    rating: "5.0",
  },
];

export type Plan = {
  name: string;
  tag: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  turnaround: string;
  turnaroundStrong: string;
  ctaText: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter Sprint",
    tag: "Fast Testing",
    description:
      "Perfect for fast-growing D2C startups testing high-converting ad hooks.",
    priceMonthly: 499,
    priceYearly: 399,
    features: [
      "5 High-Converting Video Ads / Mo",
      "AI UGC or Real Human Creators",
      "3 Hook Variations Per Video",
      "Professional Scriptwriting Included",
      "Hermozi-Style Animated Captions",
      "48-Hour Turnaround Time",
      "1 Round of Free Revisions",
      "Commercial License Rights",
    ],
    turnaround: "48 Hours Per Asset",
    turnaroundStrong: "48 Hours Per Asset",
    ctaText: "Start Starter Plan",
  },
  {
    name: "Growth Engine",
    tag: "Most Popular",
    description:
      "Our most popular scaling package for aggressive e-commerce growth.",
    priceMonthly: 1299,
    priceYearly: 1039,
    features: [
      "15 High-Converting Video Ads / Mo",
      "Mix of AI Avatars, UGC & 3D Motion",
      "5 Hook Variations Per Video",
      "Dedicated Creative Strategist",
      "Competitor Angle Audit & Analysis",
      "Unlimited Revisions",
      "Multilingual AI Voice Translation",
      "Raw Footage & Project Files",
      "Dedicated Slack Communication Channel",
    ],
    turnaround: "24-48 Hours On-Demand",
    turnaroundStrong: "24-48 Hours On-Demand",
    ctaText: "Claim Growth Engine",
    popular: true,
  },
  {
    name: "Scale Matrix",
    tag: "Unlimited Power",
    description:
      "Full creative studio team dedicated to scaling 7 & 8-figure brand campaigns.",
    priceMonthly: 2999,
    priceYearly: 2399,
    features: [
      "40+ High-Converting Video Ads / Mo",
      "Full Creative Matrix (UGC, AI, 3D, CGI)",
      "Photorealistic Custom AI Brand Model",
      "Bi-Weekly Strategy & Data Review Calls",
      "Dedicated Creative Director & Editor Team",
      "Priority 24-Hour Express Delivery",
      "Custom Motion Graphic Design Systems",
      "Ad Account Creative Tagging & Analytics",
      "Custom SLA & Legal Commercial Rights",
    ],
    turnaround: "24-Hour Priority Express",
    turnaroundStrong: "24-Hour Priority Express",
    ctaText: "Book Enterprise Call",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How quickly can you deliver?",
    answer:
      "AI UGC videos: 48-72 hours. Human UGC videos: 5-7 working days. Rush delivery bhi available hai.",
    category: "Delivery",
  },
  {
    id: "faq-2",
    question: "Do you provide real creators?",
    answer:
      "Yes. Humare paas 200+ verified Indian UGC creators hain. Niche, age, language ke hisaab se match karte hain.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "Can I request AI UGC instead?",
    answer:
      "Bilkul. Hum AI UGC + CGI videos bhi banate hain jo ₹1,999 se start hote hain. Same quality, faster delivery.",
    category: "AI & UGC",
  },
  {
    id: "faq-4",
    question: "How many revisions are included?",
    answer:
      "Har order me 2 free revisions included hain. Uske baad ₹500/revision.",
    category: "Process",
  },
  {
    id: "faq-5",
    question: "Do you provide scripts?",
    answer:
      "Yes. Har video ke saath expert ad script + 3 hook options free milte hain.",
    category: "Process",
  },
  {
    id: "faq-6",
    question: "Can you create ads for Meta and TikTok?",
    answer:
      "Yes. Hum 9:16 Reels, TikTok, Instagram, YouTube Shorts, Meta Ads ke liye optimize karke dete hain.",
    category: "General",
  },
  {
    id: "faq-7",
    question: "Do you manage the ad campaigns too?",
    answer:
      "Yes, hum ad creatives ke saath-saath Meta, Instagram, TikTok aur Google Ads campaigns bhi run karte hain. Aapko bas product aur goal batana hai, targeting, budget aur optimization hum handle karenge.",
    category: "General",
  },
  {
    id: "faq-8",
    question: "What happens after I submit my brief?",
    answer:
      "1. Brief review → 2. Script approval → 3. Video production → 4. 2 Revisions → 5. Final delivery",
    category: "Process",
  },
  {
    id: "faq-9",
    question: "Do you offer refunds/cancellations?",
    answer:
      "Hum cancellation ke paise refund nahi karte. Lekin agar kaam start nahi hua hai to usko next order me credit kar denge.",
    category: "Pricing",
  },
  {
    id: "faq-10",
    question: "Who owns the final creative assets?",
    answer:
      "Payment ke baad 100% ownership tumhari. Tum kahin bhi ads, website, social media par use kar sakte ho.",
    category: "General",
  },
];

export const FAQ_CATEGORIES = ["All", "General", "Process", "Pricing", "AI & UGC", "Delivery"];

export const INDUSTRIES = [
  {
    id: "d2c-ecom",
    name: "D2C & E-Commerce",
    subtitle: "Scale ROAS & Lower CPA on Meta & TikTok",
    description:
      "High-converting unboxings, problem-solution hooks, and 3D product teardowns designed specifically for Shopify and WooCommerce stores.",
    icon: "ShoppingBag",
    image: "cat-ecomm",
    stats: "3.8x Avg ROAS",
    keyFormats: ["Problem-Solution UGC", "3D Explosion Shots", "Unboxing Reels"],
    bgGradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    id: "beauty-wellness",
    name: "Beauty & Skincare",
    subtitle: "High-Definition Aesthetic Glow & Hydration Shots",
    description:
      "Macro skincare application closeups, ASMR textures, before/after transformations, and AI-model brand ambassadors.",
    icon: "Sparkles",
    image: "cat-beauty",
    stats: "+240% CTR",
    keyFormats: ["Macro Texture Closeups", "ASMR Audio UGC", "AI Brand Ambassador"],
    bgGradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    id: "fashion-apparel",
    name: "Fashion & Streetwear",
    subtitle: "Lookbooks, Try-On Hauls & 3D Garment Motion",
    description:
      "Trendy outfit transitions, street style walk-throughs, 3D clothing renders, and aesthetic urban lookbooks.",
    icon: "Shirt",
    image: "cat-fashion",
    stats: "4.2M Peak Reach",
    keyFormats: ["Transition Reels", "3D Garment Render", "Street Style UGC"],
    bgGradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    id: "electronics-tech",
    name: "Electronics & Gadgets",
    subtitle: "Futuristic 3D Teardowns & Unboxings",
    description:
      "3D exploded views highlighting internal chips, noise cancellation features, battery tech, and sleek ergonomic design.",
    icon: "Smartphone",
    image: "cat-tech",
    stats: "6.1x Peak ROAS",
    keyFormats: ["3D Internal Teardown", "Tech Comparison", "Feature Demo"],
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "amazon-sellers",
    name: "Amazon Sellers",
    subtitle: "A+ Content & High-Impact External Traffic Ads",
    description:
      "Drive high-intent Amazon attribution traffic with compliant, high-energy product review videos and hero listings.",
    icon: "Box",
    image: "cat-amazon",
    stats: "7K+ Products Featured",
    keyFormats: ["Amazon Listing Video", "External Meta Ad", "Comparison Grid"],
    bgGradient: "from-amber-500/10 to-yellow-500/10",
  },
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    subtitle: "Explain Complex Tech in 30 Seconds Flat",
    description:
      "AI avatars and animated motion UI demos that explain software value propositions clearly to founders and buyers.",
    icon: "Zap",
    image: "cat-saas",
    stats: "-45% CPA",
    keyFormats: ["AI Avatar Demo", "Motion UI Walkthrough", "Founder Story"],
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const REQUIREMENT_OPTIONS = [
  {
    id: "AI UGC Videos",
    label: "AI UGC Videos",
    badge: "3x ROAS",
    color: "text-orange-400",
    desc: "AI avatars & viral voiceover hooks",
  },
  {
    id: "Real Human UGC",
    label: "Real Human UGC",
    badge: "Authentic",
    color: "text-blue-400",
    desc: "Creator filming & product unboxing",
  },
  {
    id: "AI Models & Photorealism",
    label: "AI Photorealism",
    badge: "Luxury",
    color: "text-purple-400",
    desc: "Virtual model photoshoots",
  },
  {
    id: "3D Product Motion Ads",
    label: "3D Motion Ads",
    badge: "Apple Grade",
    color: "text-amber-400",
    desc: "CAD 3D teardowns & explode views",
  },
  {
    id: "Viral Video Editing",
    label: "Viral Video Editing",
    badge: "High Retention",
    color: "text-rose-400",
    desc: "Pacing, SFX & dynamic captions",
  },
  {
    id: "Performance Creative Suite",
    label: "Full Creative Suite",
    badge: "40+ Ads/mo",
    color: "text-emerald-400",
    desc: "Complete ad testing & scaling",
  },
];

export const BUDGET_OPTIONS = [
  {
    id: "$499 Starter Sprint",
    label: "$499 - $1,000 / mo (Starter Sprint)",
    badge: "Starter",
    desc: "3-5 Viral Ad Hooks",
  },
  {
    id: "$1,299 Growth Engine",
    label: "$1,299 - $3,000 / mo (Growth Engine)",
    badge: "Popular",
    desc: "15+ Ads & A/B Testing",
  },
  {
    id: "$2,999+ Scale Matrix",
    label: "$3,000+ / mo (Scale Matrix)",
    badge: "Enterprise",
    desc: "40+ Ads + Producer",
  },
];

export const BOOKING_TIME_SLOTS = [
  "11:00 AM IST",
  "02:00 PM IST",
  "05:00 PM IST",
  "08:00 PM IST",
];

export const BOOKING_SERVICES = [
  { id: "AI UGC Videos", label: "AI UGC Videos", icon: "Bot" },
  { id: "Real Human UGC", label: "Real Human UGC", icon: "Users" },
  { id: "AI Models & Photorealism", label: "AI Photorealism", icon: "Sparkles" },
  { id: "3D Product Motion Ads", label: "3D Motion Ads", icon: "Box" },
  { id: "Viral Video Editing", label: "Viral Editing", icon: "WandSparkles" },
  { id: "Full Performance Suite", label: "Full Suite", icon: "TrendingUp" },
];

export const FOOTER_SERVICES = [
  "AI UGC Videos",
  "Real Human UGC",
  "AI Models & Avatars",
  "3D Product Ads",
  "Viral Video Editing",
  "Creative Strategy",
  "Performance Creative",
  "Meta & Google Ads",
  "Social Media Management",
  "Brand Identity",
];

export const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/viralcraftmarketing", icon: "Facebook", label: "Facebook" },
  { href: "https://www.instagram.com/viralcraftstudios/", icon: "Instagram", label: "Instagram" },
  {
    href: "https://www.linkedin.com/company/viral-craft-media/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BWWBoPKNcRviELPYWpO%2BfVw%3D%3D",
    icon: "Linkedin",
    label: "LinkedIn",
  },
  { href: "https://youtube.com/@viralcrafmedia?si=kVjXaFuWuPZbfnti", icon: "Youtube", label: "YouTube" },
];
