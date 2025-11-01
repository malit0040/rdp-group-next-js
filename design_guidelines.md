# RdP Group Website Design Guidelines

## Brand Identity

**Name:** RdP Group  
**Tagline:** A pioneering step towards a promising future

**Core Values:** Royal Precision, Creative Integrity, Cultural Resonance, Innovation in Motion, Partnership for Impact

**Overall Aesthetic:** Luxurious Saudi-modern with confident, immersive scroll storytelling. Gradient greens + gold accents, clean typography, bold imagery combining tradition with digital innovation.

## Color System

**Primary Palette:**
- Main Deep Green: #024442 (primary backgrounds, buttons, CTAs)
- Bright Green: #1bc195 (accents, highlights, hover states)
- Charcoal Black: #262624 (typography, dark backgrounds)
- Off-White: #f6f7ed (text backgrounds, section dividers)

**Secondary Accents:**
- Royal Purple: #8c55b7 (special event highlights)
- Gold Accent: #cece45 (premium/royal highlights, callouts)

## Typography

**Primary:** Bahij Janna (Regular/Bold) for Arabic heritage  
**Secondary:** Poppins for English text

**Hierarchy:**
- Headings: Bahij Janna Bold, all caps
- Subheadings: Bahij Janna Regular
- Body: Poppins Regular, 16px
- Callouts: Italic or Gold accent (#cece45)

## Layout & Spacing

Use Tailwind spacing units: 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Sections:** Full-width with generous vertical padding (py-16 to py-24), alternating light and dark backgrounds

## Page Structure

### 1. Hero Section
- Dark green gradient background (#024442 → #1bc195)
- Large centered RdP Group logo (minimalistic)
- Tagline with subtext: "Building experiences, campaigns, and stories that move cities"
- Two prominent CTAs: "Explore Our Work" and "Contact Us"
- Subtle parallax background motion

### 2. About RdP
- Split layout: 50/50 image/video + text
- Image: Video montage of royal events or Saudi landmarks
- Headline: "Who We Are"
- Professional yet visionary copy about Saudi conglomerate specializing in city marketing, events, royal ceremonies

### 3. Our Services
- Grid layout (2-4 columns responsive)
- 8 service cards: City Marketing, Corporate Event Management, Royal Event Production, Creative Advertising, Media Content Writing, Visual Production, Infographics & Design, Campaign Management
- Cards: white background (#f6f7ed), subtle shadow, rounded 2xl corners
- Hover: 1px green border (#1bc195) + scale(1.02) + shadow enhancement

### 4. Our Impact (Statistics)
- Dark background (#262624)
- Animated number counters (scroll-triggered):
  - 400+ successful campaigns
  - 1,000+ followers
  - 1M+ post impressions
  - 500+ brand visits/month
  - 300+ monthly publications
- Gradient motion background for visual interest

### 5. Portfolio Showcase
- Masonry grid layout with hover overlays
- Filter categories: Events | Advertising | Production | Media
- Hover: show logo + project name overlay
- High-quality imagery from real events, cityscapes, Saudi culture

### 6. Meet the Team
- Light gradient background (#f6f7ed)
- Circular headshots with minimal white border
- Hover: reveals role and LinkedIn link icon
- Grid layout, responsive columns

### 7. Contact & Collaboration
- Contact form: name, email, company, message fields
- WhatsApp and phone integration prominently displayed
- CTA: "Let's Build the Next Big Story"
- Form styling: rounded inputs, green accent focus states

### 8. Footer
- Minimalist design
- RdP logo, copyright text
- Social media links (subtle icons)
- Off-white background (#f6f7ed)

## Component Design System

**Buttons:**
- Rounded 2xl corners, px-6 py-3 padding
- Default: green gradient (#024442 → #1bc195)
- Hover: brightened gradient with white text glow
- Buttons on images: blurred background for readability

**Cards:**
- White background (#f6f7ed)
- Shadow: 0 4px 20px rgba(0,0,0,0.08)
- Rounded 2xl corners
- Hover animations where appropriate

**Icons:**
- Minimal outline style (Lucide React/Feather-style)
- Colors: dark green or gold
- Use sparingly for clarity

## Animations & Interactions

**Approved Animations:**
- Subtle fade-ins on scroll
- Parallax background on hero
- Number counters animate on scroll-trigger
- Gradient motion background in statistics section
- Card hover effects (scale, border, shadow)
- Smooth page transitions

**Animation Principles:** Refined and purposeful, never distracting. Enhance luxury feel without overwhelming.

## Images

**Hero Section:** Yes - Large background with gradient overlay OR centered logo with gradient background (no stock imagery)

**Additional Images:**
- About section: Video montage or high-quality photo of royal events/Saudi landmarks
- Portfolio: Real project imagery in masonry grid
- Team: Professional circular headshots

**Image Treatment:**
- Slightly warm color grade with green tone
- Focus on emotion, movement, audience engagement
- Avoid stocky or artificial poses
- High-quality visuals only

## Bilingual Support

- English primary with Arabic RTL support option
- Toggle for language switching
- Ensure Arabic typography (Bahij Janna) renders beautifully

## Tone & Copy

**Voice:** Confident, refined, visionary, professional yet creative, royal but approachable, ambitious future-forward

**Sample CTAs:**
- "Your story deserves a royal stage"
- "We build connections that move cities"
- "From vision to visibility — discover RdP"

## Accessibility

- High-contrast text on all backgrounds
- Alt text for all images
- Arabic RTL support
- Keyboard navigation for all interactive elements
- WCAG AA compliance minimum