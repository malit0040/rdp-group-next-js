# RdP Group - Saudi City Marketing Website

## Project Overview
Luxury marketing website for RdP Group, a Saudi city marketing company specializing in urban consulting, visitor experience, investment services, and community engagement.

## Key Features

### Bilingual System (English/Arabic)
- **Default Language**: Arabic (ar)
- **Language Toggle**: Functional toggle button in header to switch between English and Arabic
- **RTL Support**: Automatic right-to-left layout for Arabic language
- **Context-Based Translation**: Uses React Context (LanguageContext) for centralized translation management
- All content across the website is fully translated including:
  - Navigation menu
  - Hero section
  - Services descriptions and offerings
  - Journey section
  - Contact form and information
  - Footer
  - All pages (Home, Services, Projects, News, Contact)

### Multi-Page Structure
- Home
- Services
- Projects
- News
- Contact

### Design Features
- Auto-sliding hero carousel with 4 slides
- Elegant curved overlay designs
- Responsive horizontal/vertical accordion services showcase (vertical on mobile)
- Mobile-friendly hamburger menu with slide-out sidebar

### Brand Colors
- Deep Green: #024442
- Bright Green: #1bc195
- Royal Purple: #8c55b7
- Charcoal: #262624
- Off-White: #f6f7ed

### Contact Information
- General Inquiries: support@rdp-ksa.com
- Executive Contact: ceo@rdp-ksa.com
- Phone: +966 11 234 5678
- Location: Riyadh, Saudi Arabia

## Technical Stack
- **Frontend**: React with TypeScript, Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context for language management
- **Data Fetching**: TanStack Query
- **Storage**: In-memory storage (MemStorage)

## Language Implementation

### Translation System
The translation system is implemented using React Context:

1. **LanguageContext** (`client/src/contexts/LanguageContext.tsx`):
   - Provides `language` state (ar/en)
   - Provides `toggleLanguage()` function
   - Provides `t(key)` function for translations
   - Manages RTL/LTR document direction
   - Sets document language attribute

2. **Usage in Components**:
   ```typescript
   import { useLanguage } from '@/contexts/LanguageContext';
   
   const { t, toggleLanguage } = useLanguage();
   
   // Use translations
   <h1>{t('hero.title')}</h1>
   ```

3. **Translation Keys**:
   All translation keys are centralized in the LanguageContext file with comprehensive English and Arabic translations for every piece of content on the website.

## Project Structure
```
client/
  src/
    components/     # Reusable UI components
    contexts/       # React contexts (LanguageContext)
    pages/          # Page components
    lib/            # Utilities
server/             # Express backend
shared/             # Shared types and schemas
```

## Development
- Run `npm run dev` to start the development server
- Frontend served on port 5000
- Hot module reloading enabled

## Recent Updates
- Implemented comprehensive bilingual system with Arabic as default
- Added functional language toggle in header
- Translated all content across the entire website
- Added RTL support for Arabic language
- Updated all pages and components to use the translation system
