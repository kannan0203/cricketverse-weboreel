

# THE CRICKET UNIVERSE 🏏

A visually explosive, single-page cricket encyclopedia website for the VishwaNova AI Hackathon.

## Design System
- **Background**: Deep green (#0a2e1a), accents in yellow (#FFD700) and red (#FF3B30), white text
- **Fonts**: Bebas Neue (headings), Rajdhani (body) via Google Fonts
- **Mood**: Bold IPL broadcast energy with sports editorial styling

## Sections & Features

### 1. Cricket Ball Loader
- Bouncing cricket ball CSS animation on page load, disappears after 2 seconds

### 2. Hero Section
- Big bold "THE CRICKET UNIVERSE 🏏" title with animated cricket ball flying across screen
- Subtitle + 3 animated stat badges (12 Teams • 94 Countries • 1 Billion Fans)

### 3. IPL Teams Grid
- 10 interactive team cards (CSK, MI, RCB, KKR, SRH, DC, PBKS, RR, GT, LSG)
- Each with team color, name, city, famous player — glows on hover with team color

### 4. Cricket Formats Explainer
- 3 animated cards for TEST, ODI, T20 with overs, duration, fun facts
- Slide-in animation on scroll

### 5. Interactive Batting Scorecard
- Fake live match scoreboard (India vs Australia)
- 2 batsmen with runs, balls, 4s, 6s, strike rate
- "FOUR!" and "SIX!" text popups flashing randomly via setInterval

### 6. Legendary Players Hall of Fame
- Horizontal scroll with 6 player cards (Sachin, Kohli, Dhoni, Rohit, Bumrah, Jadeja)
- Name, role, stat, country flag — neon glow border on hover

### 7. Cricket Quiz
- 5 multiple choice questions with score tracking
- Green flash for correct, red shake for wrong answers
- Confetti burst on completion (canvas-confetti)

### 8. Did You Know? Facts Ticker
- Auto-scrolling horizontal news ticker with 8 fun cricket facts

### 9. Footer
- Hackathon credit line + Twitter/WhatsApp share buttons

## Interactions & Technical
- Background crowd cheer audio with floating mute/unmute button (bottom-left)
- All sections fade+slide in on scroll via Intersection Observer
- Smooth scroll navigation with mobile hamburger menu
- Fully responsive down to 375px with touch-friendly 48px tap targets
- Confetti on quiz completion

