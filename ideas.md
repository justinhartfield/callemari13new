# Martí 13 | El Gremio del Almorzar - Design Ideas

## Project Context
A private social club and dining experience in Valencia celebrating the Valencian "Almorzar" tradition. The design system is already defined as **Neo-Brutalist** with specific guidelines.

---

<response>
## Idea 1: "Zine Bodega" - Raw Editorial Neo-Brutalism
<probability>0.08</probability>

<text>
### Design Movement
**Neo-Brutalist Zine Culture** - Inspired by punk zines, underground food magazines, and Spanish bodega aesthetics. Heavy on typography, raw textures, and deliberate "imperfection."

### Core Principles
1. **Tactile Physicality** - Every element should feel like it could be printed, cut out, and pasted
2. **Organized Chaos** - Asymmetric layouts that feel spontaneous but are carefully composed
3. **Typography as Art** - Headlines become visual statements, not just text
4. **Analog Warmth** - Digital design that evokes hand-made quality

### Color Philosophy
- **Cream (#fdf6e3)** - Aged paper, warmth, tradition
- **Ink Black (#1a1a1a)** - Bold statements, definition, authority
- **Valencia Orange (#ff6b35)** - Energy, appetite, Mediterranean sun
- **Sticker Yellow (#f7eb00)** - Highlights, urgency, playfulness

### Layout Paradigm
- **Collage Grid** - Overlapping cards at slight rotations
- **Sticky Notes Effect** - Information presented as "posted" items
- **Newspaper Columns** - Dense text areas balanced with bold imagery
- **Floating Elements** - Cards that appear to lift off the page

### Signature Elements
1. **Hard Shadow Cards** - 8px offset shadows that expand on hover
2. **Rotated Sticker Badges** - -3deg rotation for hand-placed feel
3. **Thick Border Everything** - 4px borders define all containers

### Interaction Philosophy
- **Physical Press** - Buttons depress 2px on click
- **Lift on Hover** - Cards translate up and shadows expand
- **Snap Transitions** - Fast 0.1-0.2s animations, no easing curves

### Animation
- Quick translate transforms (0.1s)
- Shadow color changes on hover (black → orange)
- No blur or fade effects - keep it sharp

### Typography System
- **Primary**: Bitter (Serif) - Editorial, established, warm
- **Weights**: 400 body, 700 headings, 800 buttons
- **Style**: Uppercase for emphasis, italic for quotes
</text>
</response>

---

<response>
## Idea 2: "Valencia Mercado" - Market Stall Brutalism
<probability>0.06</probability>

<text>
### Design Movement
**Market Stall Aesthetic** - Inspired by Spanish mercados, price tags, hand-written signs, and the organized chaos of food markets.

### Core Principles
1. **Price Tag Design** - Information presented like market labels
2. **Stacked Abundance** - Dense, layered content like market displays
3. **Hand-Lettered Feel** - Typography that suggests chalk boards
4. **Fresh & Immediate** - Everything feels current, available now

### Color Philosophy
- **Butcher Paper (#fdf6e3)** - Wrapping, freshness
- **Chalkboard Black (#1a1a1a)** - Signage, contrast
- **Tomato Red (#ff6b35)** - Produce, appetite
- **Lemon Yellow (#f7eb00)** - Citrus, brightness

### Layout Paradigm
- **Stall Grid** - Products/events displayed like market goods
- **Price Tag Cards** - Angled labels with bold pricing
- **Ticker Tape** - Scrolling market prices/specials
- **Vertical Stacking** - Content piled like produce

### Signature Elements
1. **Rotated Price Tags** - Cards at -3deg to 3deg angles
2. **Thick Border Frames** - Like market signage
3. **Stamp Effects** - "PRÓXIMO" badges like quality stamps

### Interaction Philosophy
- **Pick Up Effect** - Cards lift when hovered (selecting produce)
- **Weigh Scale** - Subtle bounce on selection
- **Cash Register** - Satisfying click sounds on actions

### Animation
- Lift transforms with shadow expansion
- Subtle rotation adjustments on hover
- Quick snappy transitions

### Typography System
- **Primary**: Bitter (Serif) - Traditional market feel
- **Display**: Extra bold for prices/dates
- **Body**: Regular weight for descriptions
</text>
</response>

---

<response>
## Idea 3: "Gremio Chronicle" - Guild Hall Documentation
<probability>0.07</probability>

<text>
### Design Movement
**Medieval Guild Meets Modern Zine** - The "Gremio" (Guild) concept taken literally - documenting the brotherhood's gatherings like a guild chronicle.

### Core Principles
1. **Chronicle Format** - Events as historical records
2. **Guild Hierarchy** - Visual distinction for different content types
3. **Seal of Approval** - Badge system for hall of fame
4. **Scroll Aesthetic** - Long-form content presentation

### Color Philosophy
- **Parchment (#fdf6e3)** - Ancient documents
- **Iron Ink (#1a1a1a)** - Permanent records
- **Guild Orange (#ff6b35)** - Official seal color
- **Gold Accent (#f7eb00)** - Honor, achievement

### Layout Paradigm
- **Chronicle Timeline** - Events as dated entries
- **Guild Cards** - Member/event cards with seal badges
- **Scroll Sections** - Full-width content blocks
- **Sidebar Navigation** - Table of contents feel

### Signature Elements
1. **Wax Seal Badges** - Circular badges for categories
2. **Chronicle Cards** - Dated entries with thick borders
3. **Guild Banner** - Prominent header with motto

### Interaction Philosophy
- **Unfurl Effect** - Content reveals like scrolls
- **Seal Press** - Buttons feel like stamping
- **Page Turn** - Transitions between sections

### Animation
- Reveal animations for content
- Stamp/press effects on buttons
- Smooth scroll between chronicle entries

### Typography System
- **Primary**: Bitter (Serif) - Chronicle authenticity
- **Headers**: Bold italic for dramatic effect
- **Dates**: Monospace or small caps for timestamps
</text>
</response>

---

## Selected Approach: "Zine Bodega" (Idea 1)

This approach best matches the provided design system documentation and creates the most distinctive, memorable experience. The Neo-Brutalist zine aesthetic perfectly captures the spirit of a private social club that celebrates food culture with friends.

### Implementation Notes
- Follow the exact color palette from the design system
- Use Bitter font family throughout
- Implement hard shadows (8px offset, no blur)
- Cards lift -4px on hover with shadow expansion to 12px
- Sticker badges rotate -3deg
- Glass navigation with backdrop blur
- Market ticker for dynamic content
- Fast, snappy transitions (0.1-0.2s)
