# BeatDHacker 

Welcome to **BeatDHacker**! A dynamic, gamified platform dedicated to raising global awareness about **cybersecurity** and **hacking systems**. This project is the culmination of 12 days of hard work, passion, and the desire to make cybersecurity knowledge accessible to everyone—beginners and experts alike.

---

## **Mission**
I created **BeatDHacker** to bridge the knowledge gap in cybersecurity. The inspiration came from witnessing how often casual device users fall victim to hacking due to a lack of technical awareness. This project aims to empower users with tools, knowledge, and confidence to safeguard their digital presence.

---

## **Features**
### **Core Functionalities**
- **Gamified Learning**: Engage in an interactive quiz game where:
  - Players fight a "hacker" by answering cybersecurity questions.
  - A health mechanic adds stakes—reduce the hacker's health to win!
- **Progressive Difficulty**:
  - Tackle challenges across four levels: **Easy**, **Medium**, **Hard**, and **Hacker**.
- **Streak Mechanics**:
  - Track your best streaks and aim for the leaderboard.

### **Highlights**
- **Leaderboard**: Compete with global users and showcase your skills.
- **Ask_AI**: Learn actionable cybersecurity tips to stay safe online and ask any questions related to cybersecurity.
- **Dynamic Content**: Content scales based on difficulty, ensuring a consistent learning curve.
- **Gamified Content**: Utilized gaming sounds and background music to make the challenge more interesting and entertaining.

### **Technologies Used**
- **React.js** for the frontend
- **Vite** for fast development and optimized builds
- **Firebase** for authentication and database
- **Redux** for state management
- **Framer Motion** for animations
- **Responsive Design** to ensure usability across devices


### **Acknowledgement**
- Inspired by the **1 Million YouTube Subscribers Hackathon!** and **Adrian Hajdin's** work.

---

## **Setup Instructions**
Follow these steps to set up BeatDHacker locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/beatdhacker.git
   ```
2. **Install Dependencies**:
```bash
npm install
```
3. **Environment Variables**: Create a .env file in the root directory and add your personal firebase keys/ID:

```Javascript
VITE_API_KEY=your-api-key
VITE_AUTH_DOMAIN=your-auth-domain
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-storage-bucket
VITE_MESSAGE_SENDER_ID=your-messaging-sender-id
VITE_APP_ID=your-app-id
VITE_MEASUREMENT_ID=your-measurement-id
```
4. **Start the Development Server**:
```bash
npm run dev
```
5. **Build for Production**:
```bash
npm run build
```
