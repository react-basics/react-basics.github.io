# AI & Automation with React — AI-powered web apps, built with AI

**From web fundamentals to a full-stack AI application, built together with an AI coding agent**

- **Total duration:** 60 hours — 20 live online sessions, 3 hours each
- **Level:** beginner → intermediate on the web side
- **Main technologies:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Vercel AI SDK, Supabase, Playwright
- **Version:** 1.0 (draft) · October 2026
- 🇷🇴 [Română](curicula.md) · 🇬🇧 English

> 🤖 **AI plays two roles in this course:**
> 1. **AI inside the application** — we integrate an LLM into the SkillForge application (chat, streaming, tools
>    called by the model);
> 2. **AI writing the code** — every step is generated with an AI coding agent, and you learn to guide it and read
>    what it produces.

---

## Table of contents

- [Technology summary (with links)](#technology-summary-with-links)
- [Course objectives](#course-objectives)
- [Target audience](#target-audience)
  - [Who this course is for](#who-this-course-is-for)
  - [Who it is not for](#who-it-is-not-for)
- [Prerequisites](#prerequisites)
  - [Required knowledge](#required-knowledge)
  - [Nice to have](#nice-to-have)
  - [Required setup](#required-setup)
- [How we work](#how-we-work)
- [Stage 1 — Web fundamentals](#stage-1--web-fundamentals)
  - [1.1 How the web works](#11-how-the-web-works)
  - [1.2 HTML and CSS](#12-html-and-css)
  - [1.3 JavaScript for people coming from another language](#13-javascript-for-people-coming-from-another-language)
  - [1.4 The DOM, events and asynchronous code](#14-the-dom-events-and-asynchronous-code)
  - [1.5 Project — a framework-free mini application](#15-project--a-framework-free-mini-application)
- [Stage 2 — React + TypeScript](#stage-2--react--typescript)
  - [2.1 Components and state](#21-components-and-state)
  - [2.2 Effects, lists and composition](#22-effects-lists-and-composition)
  - [2.3 TypeScript, styling and tooling](#23-typescript-styling-and-tooling)
  - [2.4 Project — `react-basics`, published on GitHub Pages](#24-project--react-basics-published-on-github-pages)
- [Stage 3 — Integrating AI into the application: SkillForge](#stage-3--integrating-ai-into-the-application-skillforge)
  - [3.1 Next.js and your own API](#31-nextjs-and-your-own-api)
  - [3.2 The first chat with an LLM](#32-the-first-chat-with-an-llm)
  - [3.3 Publishing and the user experience](#33-publishing-and-the-user-experience)
  - [3.4 Providers, cost and caching](#34-providers-cost-and-caching)
  - [3.5 Users and data](#35-users-and-data)
  - [3.6 Tools (tool calling)](#36-tools-tool-calling)
  - [3.7 Security](#37-security)
  - [3.8 Project — SkillForge, published on Vercel](#38-project--skillforge-published-on-vercel)
- [Stage 4 — Automated testing](#stage-4--automated-testing)
  - [4.1 End-to-end tests with Playwright](#41-end-to-end-tests-with-playwright)
  - [4.2 How to test an AI application](#42-how-to-test-an-ai-application)
  - [4.3 A local LLM with Ollama](#43-a-local-llm-with-ollama)
  - [4.4 Tests that run automatically](#44-tests-that-run-automatically)
  - [4.5 Project — the SkillForge test suite](#45-project--the-skillforge-test-suite)
- [Stage 5 — Your personal project](#stage-5--your-personal-project)
  - [5.1 Milestones](#51-milestones)
  - [5.2 Evaluation criteria](#52-evaluation-criteria)
- [Common thread — the code is generated with an AI agent](#common-thread--the-code-is-generated-with-an-ai-agent)
  - [How to ask](#how-to-ask)
  - [How to stay in control of the result](#how-to-stay-in-control-of-the-result)
  - [Security](#security)
- [If time allows](#if-time-allows)
- [Resources & materials](#resources--materials)
  - [Course materials](#course-materials)
  - [Recommended courses for going deeper](#recommended-courses-for-going-deeper)
- [What you leave with](#what-you-leave-with)
- [Certification](#certification)

---

## Technology summary (with links)

Only the technologies we actually use in the course, grouped by category.

**Web fundamentals**
- [HTML](https://developer.mozilla.org/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [Git](https://git-scm.com/doc) · [GitHub](https://docs.github.com)

**Frontend / UI**
- [React](https://react.dev)
- [Vite](https://vite.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Prettier](https://prettier.io/docs/)

**Full-stack**
- [Next.js (App Router)](https://nextjs.org/docs)
- [Zustand](https://zustand.docs.pmnd.rs)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [Zod](https://zod.dev)

**AI inside the application**
- [Vercel AI SDK](https://ai-sdk.dev/docs)
- [OpenAI](https://platform.openai.com/docs)
- [Anthropic (Claude)](https://docs.anthropic.com)
- [Ollama](https://docs.ollama.com) — an LLM running locally

**Backend / DB / Auth**
- [Supabase](https://supabase.com/docs)
- [Auth.js (NextAuth)](https://authjs.dev)

**Testing**
- [Playwright](https://playwright.dev/docs/intro)
- [GitHub Actions](https://docs.github.com/actions)

**Deployment**
- [GitHub Pages](https://docs.github.com/pages)
- [Vercel](https://vercel.com/docs)

**AI coding agents**
- [GitHub Copilot](https://docs.github.com/copilot)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## Course objectives

By the end of this course, participants will be able to:

- Read and write **modern HTML, CSS and JavaScript**, and debug a page with DevTools
- Build a **React + TypeScript** application from components and publish it
- **Integrate an LLM into a full-stack web application** with Next.js: streaming, several providers, controlled cost,
  authentication, a database, tools called by the model
- Write **end-to-end tests** for their own application, including the parts that depend on an AI model
- **Generate code with an AI agent**: give it clear requirements, then read and judge the result
- Deliver and present a published **personal project**

---

## Target audience

### Who this course is for

For people who **already know how to program** but **have not worked on the web**:

- **QA automation engineers** — you know selectors and test scenarios, and want to understand the application you test;
- **junior developers** — you want a solid front-end foundation and a first complete application in your portfolio;
- **backend developers** (Java, C#, Python…) moving towards **full-stack** who want to understand what happens in the
  browser.

### Who it is not for

Web developers already working with React — the pace and the first stages would be too slow.

---

## Prerequisites

### Required knowledge

- Basic programming in any language: variables, functions, data structures
- Basic **Git**: clone, commit, push

**No web experience required.**

### Nice to have

- Basic HTTP / REST API concepts
- Experience with a database (SQL)
- Experience with a test automation framework

### Required setup

- A laptop with **Node.js** (current LTS), **Git** and **VS Code**
- A **GitHub** account
- Access to an **AI coding agent** (GitHub Copilot, Claude Code or equivalent)
- Free **Vercel** and **Supabase** accounts (created during the course)
- API keys for at least one LLM provider (details in the first session)
- *Optional:* a laptop that can run **Ollama** (ideally 16 GB RAM or more), for the local LLM part

---

## How we work

- **One application that grows step by step**, not isolated exercises. Each step adds a single new concept.
- **Every step comes with two published materials:** the prompt that generates it with your agent, and the code to
  remember (the 2–4 lines that matter). You can redo any step at home, on your own.
- **Understanding before coverage.** We would rather stay longer on a concept than tick off a list of technologies.
- **Homework with a deadline and a presentation.** What you build at home you show at the next lesson, on your own
  screen — the format the whole group learns from.
- **Written feedback**, with precise questions, at the end of each stage.

---

## Stage 1 — Web fundamentals

### 1.1 How the web works

- Browser, server, request / response, HTTP
- **DevTools**: Elements, Console, Network
- The structure of a web project and the first file versioned with Git

### 1.2 HTML and CSS

- Semantic **HTML**: structure, forms, basic accessibility
- **CSS**: selectors, the box model (`margin` / `padding` / `border`)
- Layout with **flexbox** and **grid**, responsive layout
- **Selectors** seen from DevTools — the direct bridge to test automation

### 1.3 JavaScript for people coming from another language

- Types, variables, functions and arrow functions
- Objects and arrays: `map` / `filter` / `reduce`
- Spread, destructuring, modules

### 1.4 The DOM, events and asynchronous code

- **The DOM and events**: how the page reacts to the user
- `Promise`, `fetch`, `async/await`
- Calls to a real API, loading and error states

### 1.5 Project — a framework-free mini application

A page that reads data from an API and displays it, written in plain HTML, CSS and JavaScript.

---

## Stage 2 — React + TypeScript

### 2.1 Components and state

- Why a framework: components, state, declarative rendering
- Scaffolding with **Vite**, `npm` and dependencies
- **Components and props**, **`useState`**
- Pure functions

### 2.2 Effects, lists and composition

- **`useEffect`** and effect cleanup
- Lists with `map` and `key`
- **Lifting state** between components
- **Custom hooks** and global state with **`useContext`**

### 2.3 TypeScript, styling and tooling

- Basic **TypeScript**: types, interfaces, typing props
- Styling with **Tailwind CSS**, ready-made components with **shadcn/ui**
- Automatic formatting with **Prettier**, path aliases

### 2.4 Project — `react-basics`, published on GitHub Pages

The `react-basics` application, built step by step — one concept per step — and published online on **GitHub Pages**.

---

## Stage 3 — Integrating AI into the application: SkillForge

**SkillForge** is a career assistant, built from an empty repository to a public application.

### 3.1 Next.js and your own API

- **Next.js** (App Router): routes, layouts
- Server components vs. client components
- **Your own API as a proxy** to the LLM: the key stays on the server, the model is chosen on the server

### 3.2 The first chat with an LLM

- **Streaming**: how the answer appears word by word (SSE)
- The real chat in the UI, with the **Vercel AI SDK**
- **The system prompt and the persona**: how you configure the model's behaviour

### 3.3 Publishing and the user experience

- **Deploying on Vercel** from the first days: every commit reaches production
- Application state with **Zustand**, a theme with `useContext`
- **Rendered Markdown** in the model's answers
- Conversation actions and export

### 3.4 Providers, cost and caching

- **Several LLM providers** (OpenAI, Anthropic) and switching between them
- **Tokens and cost**: a cost report per conversation
- **Caching**: avoiding repeated calls

### 3.5 Users and data

- **Authentication** with GitHub (OAuth, Auth.js)
- **Persistence** with **Supabase**: conversations and profile saved in the database
- Memory: summarising long conversations

### 3.6 Tools (tool calling)

- The model asks the application to perform an action
- Defining tools and **validating the answer with a schema** (Zod)
- User approval before important actions

### 3.7 Security

- Environment variables: what reaches the browser and what does not
- Separate keys for local and production
- Which files the AI coding agent can see

### 3.8 Project — SkillForge, published on Vercel

SkillForge with login, saved history, several providers and tools, published on **Vercel**.

---

## Stage 4 — Automated testing

### 4.1 End-to-end tests with Playwright

- Installation and the first test on your own SkillForge application
- **Stable selectors** and how to prepare them in the code (`data-testid`, accessible roles)
- Real scenarios: login, sending a message, the conversation history

### 4.2 How to test an AI application

- **Mocking** the model's answer
- Assertions on **non-deterministic output**
- Tests written **together with the agent** — and reviewed by you

### 4.3 A local LLM with Ollama

A short demo, with hands-on integration for those whose laptop can run it (optional):

- What **Ollama** is and how to run a model on your own laptop
- **Ollama as a local provider in SkillForge**, next to the cloud ones — in the development environment only
- **What we use it for**: tests with no cost and no API keys, offline development, data that must not leave
  the laptop
- **The limits**: answer quality, speed, required resources — and when to stay with a cloud model

### 4.4 Tests that run automatically

- Tests run on every push, in **GitHub Actions**

### 4.5 Project — the SkillForge test suite

An end-to-end test suite for SkillForge, running automatically in CI.

---

## Stage 5 — Your personal project

The personal project is **the accreditation requirement** and runs **as its own thread through the whole course**, not
only at the end. You choose the topic; if you have none, the fallback is SkillForge extended with a feature of your own.

### 5.1 Milestones

| Milestone | When | What you hand in |
| --- | --- | --- |
| **Kick-off** | at the start of stage 3 | the chosen topic + the requirements document, written as a prompt, versioned in the repo |
| **Checkpoint 1** | during stage 3 | the application skeleton + the first LLM call, published on Vercel |
| **Checkpoint 2** | at the end of stage 4 | the main features + at least one Playwright test |
| **Guided work** | the last sessions | you work on your project during the lesson; live review on volunteers' screens |
| **Presentation** | the last session | live demo + what you learned + what you asked the agent and what you corrected |

### 5.2 Evaluation criteria

Announced in the first session:

- the application works and is published;
- it uses at least one LLM, with the key protected on the server;
- it has at least one end-to-end test;
- the repository has a `README.md` and the requirements file;
- the presentation shows the code, not only the UI.

---

## Common thread — the code is generated with an AI agent

Not a separate stage: **in all five stages, the code is generated by an AI agent** (GitHub Copilot, Claude Code or
equivalent), and you guide and check it.

### How to ask

- **Plan before code** — the agent asks you questions before writing anything
- **The two-part prompt**: the need (what you want) + the technical requirements (what the result must look like)
- **Rule files** (`CLAUDE.md` and its equivalents) — so the agent keeps the project's conventions
- **Skills**: repeated procedures, saved once and reused

### How to stay in control of the result

- **Reading the generated code**: what you do not ask for explicitly, you do not get — you get the default instead
- Small, frequent commits, so you can always go back
- **Choosing the model per step** and **the cost in tokens**

### Security

- Which files the agent can see and which permissions you give it
- Keys that must never end up in the code

---

## If time allows

Prepared topics we cover **only if the group's pace allows it** — they are not part of the course's promise:

- RAG: answers from your own documents (CV, notes)
- Comparing providers on the same prompt
- Searching conversations and exporting to PDF

---

## Resources & materials

### Course materials

- [Web intro (HTML/CSS)](https://nmatei.github.io/web-intro-presentation/)
- [JavaScript](https://nmatei.github.io/web-intro-presentation/js)
- [React (introduction)](https://nmatei.github.io/web-intro-presentation/react)
- [React Basics](https://react-basics.github.io/) — the application's steps, with the prompt and the code to remember for each

### Recommended courses for going deeper

- [Become a WEB Developer from Scratch, step by step Guide](https://nmatei.github.io/web) — the trainer's course:
  HTML and CSS from scratch (layout, flexbox, grid), with the best active Udemy discount coupon
- [Modern React with Redux](https://www.udemy.com/course/react-redux/) — React fundamentals and state management
- [Next.js 15 & Firebase](https://www.udemy.com/course/nextjs-firebase/) — Next.js (App Router), deployment,
  backend-as-a-service (auth, DB, storage)
- [ChatGPT and LangChain: The Complete Developer's Masterclass](https://www.udemy.com/course/chatgpt-and-langchain-the-complete-developers-masterclass/)
  — LangChain, agents, memory; for after the course, beyond what we cover

---

## What you leave with

- **2 published applications**: `react-basics` (GitHub Pages) and SkillForge (Vercel)
- **An end-to-end test suite**, running in CI
- **Your personal project**, published and presented
- The prompt and the code to remember for **every step**, as revision material

---

## Certification

On completion, with the **personal project presented** and the **minimum attendance** required by the organiser.
