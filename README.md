# Shaun Benedict's Interactive Terminal Website

Welcome to the repository for my **interactive terminal-style personal website**, hosted at [http://shaunbenedict.vercel.app](http://shaunbenedict.vercel.app).  

This website simulates a **terminal environment** where visitors can explore my projects, contact info, and even interact with my personal assistant, **Ava**.
---

## 🔍 Overview

- **Type:** Interactive terminal-style personal website  
- **Hosted on:** [Vercel](http://shaunbenedict.vercel.app)  
- **Purpose:** Showcase my projects, skills, and personal info in a fun, interactive way  
- **Special feature:** AI-powered assistant (`ava <question>`)

---

## 🖥️ Features

- **Terminal Simulation**: Mimics a Bash terminal with prompt, directories, and files  
- **Simulated Filesystem**:
  - `/about/about.sh` — Introduction about me  
  - `/projects/projects.sh` — Lists my projects  
  - `/contact/contact.sh` — Displays contact info  
- **Custom Commands**:
  - `ls` — List files and directories  
  - `cd <dir>` — Change directory  
  - `./<script>.sh` — Run script files  
  - `ava <question>` — Ask my AI assistant, Ava
  - `clear` — Clear the terminal screen  
  - `help` — Show available commands  
- **Responsive Design** — Works on desktop and mobile  
- **Interactive AI** — Live queries and responses

---

## 🛠️ Technologies Used

| Technology      | Purpose |
|-----------------|---------|
| HTML5           | Structure of the page |
| CSS3            | Styling and terminal look |
| JavaScript      | Terminal simulation & interactive commands |
| Node.js         | Backend API to handle Gemini AI queries |
| Gemini API      | AI-powered assistant |
| Vercel          | Hosting and deployment |

---

## 📂 Repository Structure

```
/index.html       - Main terminal page
/logo.png         - Site logo
/api/ask          - Backend API route for Gemini AI
```

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/shaunbenedict/shaunbenedict.github.io.git
cd shaunbenedict.github.io
```

2. Install dependencies (for API routes):

```bash
npm install
```

3. Set environment variables (Gemini API key):

```bash
# .env.local
GEMINI_API_KEY=your_api_key_here
```

4. Start the local server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💬 Usage

- **Explore the filesystem**: `ls`, `cd /about`, `./about.sh`  
- **View projects**: `cd /projects && ./projects.sh`  
- **Contact me**: `cd /contact && ./contact.sh`  
- **Ask AI assistant**: `ava <your question>`  
- **Clear terminal**: `clear`  
- **Show help**: `help`  

---

## 🌐 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shaunbenedict/)  
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:s.shaunbenedict@gmail.com)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/s.shaunbenedict)

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

>  Enjoy exploring my terminal world! Type `help` to get started.

