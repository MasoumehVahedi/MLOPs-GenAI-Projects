# My SaaS Business Idea Generator

This is my personal SaaS project — a simple AI-powered business idea generator.  
The goal is to create a working prototype that combines a modern frontend with a Python backend and streaming AI responses, ready for future deployment.

---

## What I Built

- **Frontend:** Next.js with Pages Router + TypeScript  
- **Backend:** FastAPI (Python)  
- **AI:** LLM-powered idea generation with real-time streaming  
- **Styling:** Tailwind CSS  
- **Deployment:** Prototype works locally; full deployment planned on AWS  
- **Extras:** Future plans include authentication, subscriptions, and idea persistence

---

## Tech Stack

- **Next.js** — Pages Router, TypeScript  
- **FastAPI** — Python backend  
- **LLM Integration** — AI idea generation streaming to frontend  
- **Tailwind CSS** — utility-first styling  
- **Node.js** — prerequisite for frontend  
- **Deployment** — AWS (planned)  

---

## Getting Started

### 1. Create Next.js Project

In our projects folder, run:

```bash
npx create-next-app saas --typescript
```

When prompted:

- ESLint → Yes
- Tailwind CSS → Yes
- Use `src/` directory → No
- Use App Router → No (we need Pages Router)
- Turbopack → No
- Customize alias → No

This scaffolds the frontend with Pages Router, TypeScript, Tailwind, and ESLint.

---

## 2. Set Up Backend

1- Create an `api/` folder at the project root  
2- Add `requirements.txt` with:

```bash
fastapi
uvicorn
openai
```


3- Create `api/index.py` to handle AI requests and stream responses.

---

## 3. Streaming AI Responses

- Frontend calls FastAPI backend using `"use client"` components  
- Real-time AI responses are rendered in Markdown using `react-markdown` and `remark-gfm`  
- Tailwind styling makes the UI clean and readable

---

## 4. Deployment (Future)

- Currently running locally for testing  
- Production deployment planned on AWS  
- Backend and streaming fully functional in the prototype

---

## Next Steps / Ideas

- Add authentication and subscription system  
- Save generated ideas in a database  
- Add UI enhancements (buttons, copy-to-clipboard, categories)  
- Deploy to AWS with monitoring and logging


