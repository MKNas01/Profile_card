🌟 Frontend Wizards — Stage 0 Task: Profile Card

This project is my submission for the HNG-13 Frontend Track (Stage 0) task.
It’s a responsive and accessible Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.
The design follows all the requirements in the task document and includes additional animations to make the interface visually appealing.

🚀 Live Demo

🔗 Live URL: 

💻 GitHub Repo: 

🧠 Project Overview

The Profile Card displays key user details, including:

Full Name

Short Biography

Current Time (in milliseconds)

Avatar Image

Social Links

Hobbies List

Dislikes List

Every visible element includes a data-testid attribute to make automated testing easy and reliable.

🧩 Features Implemented
Feature	Description
🏗 Semantic HTML Structure	Used <article>, <header>, <section>, <figure>, <nav>, and other semantic elements for accessibility.
⏰ Dynamic Time	Displayed current time in milliseconds using Date.now() via JavaScript.
🎨 Responsive Design	Implemented with Flexbox and CSS media queries (max-width: 700px and min-width: 700px).
💫 Animations Added	Added subtle animations to enhance user experience:
- gradientShift for body background
- fadeInUp for article
- slideInDown for header
- scaleIn for figure
- fadeIn for paragraph
- pulse for div
- slideInLeft for section
♿ Accessibility	Included alt text for images, semantic tags, and ensured all links are keyboard-focusable.
🌍 Deployed on Netlify	Hosted live using Netlify for easy public access.
🛠 Technologies Used

HTML5

CSS3

Vanilla JavaScript (ES6)

Netlify (Deployment)

📂 Folder Structure
profile-card/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How to Run Locally

Clone the repository:

git clone https://github.com/yourusername/Profile_card.git


Navigate into the folder:

cd Profile_card


Open index.html in your browser.

That’s it 🎉

✅ Test IDs Checklist
Element	data-testid
Profile Card	test-profile-card
Name	test-user-name
Bio	test-user-bio
Current Time	test-user-time
Avatar	test-user-avatar
Social Links	test-user-social-links
Hobbies	test-user-hobbies
Dislikes	test-user-dislikes
🧾 Notes

All animations were implemented with pure CSS keyframes.

Time updates dynamically every second using JavaScript.

Layout adjusts seamlessly for mobile, tablet, and desktop screens.

👤 Author

Name: Muhammed Kabiru Nasiru
Track: HNG-13 Frontend Track
Stage: 0
Email: nasirumuhammedkabirux@gmail.com

Twitter: @m_k_nas_