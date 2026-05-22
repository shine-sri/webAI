# webAI - Full-Stack AI Website Generator

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## Live Demo
**[Experience webAI Live](https://web-ai-frontend-five.vercel.app)**

## 📖 Overview
webAI is a decoupled full-stack application designed to transform natural language prompts into functional, styled websites. By integrating the OpenRouter API, the application dynamically generates and renders HTML and Tailwind CSS components. The project features a highly secure, cross-domain authentication system and relies on a relational database architecture for persistent storage.

##  Key Features
- **Prompt-to-UI Generation:** Routes complex user text prompts to LLMs to instantly generate styled web components.
- **Cross-Domain Authentication:** Utilizes Better Auth with custom CORS policies and proxy configurations to maintain secure session cookies across decoupled frontend and backend environments.
- **Relational Data Management:** Manages user states, project versioning, and session histories using a robust PostgreSQL schema.
- **Serverless Architecture:** Configured for automated CI/CD pipelines via GitHub, deployed on Vercel for rapid iteration and zero-downtime updates.

##  Tech Stack
### Frontend
- **Framework:** React (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Authentication:** Better Auth

### Database & Infrastructure
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **AI Routing:** OpenRouter API
- **Deployment:** Vercel

##  Local Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- Git

### 1. Clone the Repository
```bash
git clone [https://github.com/shine-sri/webAI.git](https://github.com/shine-sri/webAI.git)
cd webAI
