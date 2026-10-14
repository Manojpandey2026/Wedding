💍 Elegant Digital Wedding Reception
Invitation
A luxury, interactive single-page digital wedding reception invitation crafted with responsive
HTML5, modern CSS3 animations, and vanilla JavaScript. Designed with a rich royal maroon
and gold aesthetic, atmospheric lighting effects, background music, an interactive countdown
timer, and venue integration.
✨ Features
● Luxury Royal Theme: Styled with a dark maroon (#0c0807) and gold palette (#e6ca85,
#c9a759), complete with ambient background lighting and blurred backdrop cards.
● Background Music with Audio Control:
○ Includes a "Tap to Begin" splash overlay to gracefully bypass browser autoplay
restrictions.
○ Floating top-right audio toggle button with an animated golden pulse indicator.
● Traditional Blessings & Typography: Features dedicated sections for auspicious
shlokas, family lineage, and parents' invitation message.
● Live Event Countdown: Dynamic JavaScript countdown timer calculating remaining
days, hours, minutes, and seconds until the celebration.
● Interactive Venue Card: Venue address and a direct "Get Directions" button pre-linked to
Google Maps.
● Direct RSVP Actions: Click-to-call phone links for effortless guest communication.
● Mobile-First & Fully Responsive: Optimized for smooth scrolling and display on
smartphones, tablets, and desktops.
📁 Project Structure
.
├── index.html # Core invitation webpage (structure, CSS, & JS)
├── music.mp3 # Background music file
├── caricature_3.png # Couple's portrait or caricature illustration
└── README.md # Project documentation
🚀 Getting Started
1. Prerequisites
No build tools or Node.js required! All external fonts (Cinzel, Great Vibes, Montserrat) are
loaded via Google Fonts CDN.
2. Assets Setup
3. Make sure the following files are placed in the root folder alongside index.html:
● Audio file: Name it music.mp3 (or update the filename in the <audio> tag).
● Couple Image/Caricature: Name it caricature_3.png (or update the filename in the
<img> tag).
3. Running Locally
Simply open index.html in any web browser, or serve it locally using Python or VS Code Live
Server:
# Using Python 3
python -m http.server 8000
Visit http://localhost:8000 in your browser.
🛠️ Customization Guide
Look for the <!-- EDIT: ... --> comments inside index.html to easily update your event details:
Section Location What to Edit
Page Title <head> -> <title> Groom & Bride names for
browser tab
Hero Image Line ~106 Path to couple caricature /
photo (src="caricature_3.png")
Couple Names Line ~111 Main heading names
Host & Lineage Line ~126–147 Parents' names, family lineage,
and shloka
Event Date & Time Line ~155–156 Date, time, and occasion
details
Venue & Map Line ~166–181 Venue name, address, and
Google Maps search URL
Countdown Target <script> (TARGET_DATE) Change "2026-04-26T19:00:00"
to your event date/time
RSVP Contacts Line ~193–208 Names and tel: phone numbers
for RSVPs
🌐 Deployment (GitHub Pages)
You can easily host and share this digital card for free using GitHub Pages:
1. Push your files (index.html, music.mp3, caricature_3.png, README.md) to a GitHub
repository.
2. In your repository, go to Settings > Pages.
3. Under Branch, select main (or master) and folder / (root).
4. Click Save.
5. Your invitation link will be live at:
https://<your-username>.github.io/<repository-name>/ 🎨 Built With
● HTML5 & Vanilla JavaScript: Fast, dependency-free functionality.
● CSS3: Custom properties, keyframe animations, flexbox layouts, and glassmorphism.
● Google Fonts:
○ Cinzel (Headings & Accents)
○ Great Vibes (Script typography)
○ Montserrat (Body text)
