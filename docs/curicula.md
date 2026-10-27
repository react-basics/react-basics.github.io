# AI & Automation cu React — aplicații web cu AI, scrise cu ajutorul AI

**De la fundamentele web la o aplicație full-stack cu AI, construită împreună cu un agent AI de cod**

- **Durată totală:** 60 de ore — 20 de sesiuni live, online, a câte 3 ore
- **Nivel:** începător → mediu pe partea de web
- **Tehnologii principale:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Vercel AI SDK, Supabase, Playwright
- **Versiune:** 1.0 (draft) · octombrie 2026
- 🇷🇴 Română · 🇬🇧 [English](curicula.en.md)

> 🤖 **AI apare în curs în două roluri:**
> 1. **AI în aplicație** — integrăm un LLM în aplicația SkillForge (chat, streaming, unelte apelate de model);
> 2. **AI care scrie codul** — fiecare pas îl generăm cu un agent AI de cod, iar tu înveți să-l ghidezi și să-i
>    citești rezultatul.

---

## Cuprins

- [Sumar tehnologii (cu linkuri)](#sumar-tehnologii-cu-linkuri)
- [Obiective curs](#obiective-curs)
- [Publicul-țintă](#publicul-țintă)
  - [Pentru cine este cursul](#pentru-cine-este-cursul)
  - [Pentru cine nu este](#pentru-cine-nu-este)
- [Cerințe preliminare](#cerințe-preliminare)
  - [Cunoștințe obligatorii](#cunoștințe-obligatorii)
  - [Nice to have](#nice-to-have)
  - [Setup necesar](#setup-necesar)
- [Cum lucrăm](#cum-lucrăm)
- [Etapa 1 — Fundamente web](#etapa-1--fundamente-web)
  - [1.1 Cum funcționează web-ul](#11-cum-funcționează-web-ul)
  - [1.2 HTML și CSS](#12-html-și-css)
  - [1.3 JavaScript pentru cine vine din alt limbaj](#13-javascript-pentru-cine-vine-din-alt-limbaj)
  - [1.4 DOM, evenimente și cod asincron](#14-dom-evenimente-și-cod-asincron)
  - [1.5 Proiect — mini-aplicație fără framework](#15-proiect--mini-aplicație-fără-framework)
- [Etapa 2 — React + TypeScript](#etapa-2--react--typescript)
  - [2.1 Componente și stare](#21-componente-și-stare)
  - [2.2 Efecte, liste și compoziție](#22-efecte-liste-și-compoziție)
  - [2.3 TypeScript, stilizare și unelte](#23-typescript-stilizare-și-unelte)
  - [2.4 Proiect — `react-basics`, publicată pe GitHub Pages](#24-proiect--react-basics-publicată-pe-github-pages)
- [Etapa 3 — Integrăm AI în aplicație: SkillForge](#etapa-3--integrăm-ai-în-aplicație-skillforge)
  - [3.1 Next.js și API-ul propriu](#31-nextjs-și-api-ul-propriu)
  - [3.2 Primul chat cu un LLM](#32-primul-chat-cu-un-llm)
  - [3.3 Publicare și experiența în interfață](#33-publicare-și-experiența-în-interfață)
  - [3.4 Provideri, cost și cache](#34-provideri-cost-și-cache)
  - [3.5 Utilizatori și date](#35-utilizatori-și-date)
  - [3.6 Unelte (tool calling)](#36-unelte-tool-calling)
  - [3.7 Securitate](#37-securitate)
  - [3.8 Proiect — SkillForge, publicată pe Vercel](#38-proiect--skillforge-publicată-pe-vercel)
- [Etapa 4 — Testare automată](#etapa-4--testare-automată)
  - [4.1 Teste end-to-end cu Playwright](#41-teste-end-to-end-cu-playwright)
  - [4.2 Cum testezi o aplicație cu AI](#42-cum-testezi-o-aplicație-cu-ai)
  - [4.3 Un LLM local cu Ollama](#43-un-llm-local-cu-ollama)
  - [4.4 Teste rulate automat](#44-teste-rulate-automat)
  - [4.5 Proiect — suita de teste pentru SkillForge](#45-proiect--suita-de-teste-pentru-skillforge)
- [Etapa 5 — Proiectul personal](#etapa-5--proiectul-personal)
  - [5.1 Repere](#51-repere)
  - [5.2 Criterii de evaluare](#52-criterii-de-evaluare)
- [Firul roșu al cursului — codul îl generăm cu un agent AI](#firul-roșu-al-cursului--codul-îl-generăm-cu-un-agent-ai)
  - [Cum ceri](#cum-ceri)
  - [Cum controlezi rezultatul](#cum-controlezi-rezultatul)
  - [Securitate](#securitate)
- [Dacă timpul permite](#dacă-timpul-permite)
- [Resurse & materiale](#resurse--materiale)
  - [Materialele cursului](#materialele-cursului)
  - [Cursuri recomandate pentru aprofundare](#cursuri-recomandate-pentru-aprofundare)
- [Ce ai la final](#ce-ai-la-final)
- [Certificare](#certificare)

---

## Sumar tehnologii (cu linkuri)

Doar tehnologiile pe care le folosim efectiv în curs, grupate pe categorii.

**Fundamente web**
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

**AI în aplicație**
- [Vercel AI SDK](https://ai-sdk.dev/docs)
- [OpenAI](https://platform.openai.com/docs)
- [Anthropic (Claude)](https://docs.anthropic.com)
- [Ollama](https://docs.ollama.com) — LLM rulat local

**Backend / DB / Auth**
- [Supabase](https://supabase.com/docs)
- [Auth.js (NextAuth)](https://authjs.dev)

**Testare**
- [Playwright](https://playwright.dev/docs/intro)
- [GitHub Actions](https://docs.github.com/actions)

**Deploy**
- [GitHub Pages](https://docs.github.com/pages)
- [Vercel](https://vercel.com/docs)

**Agenți AI de cod**
- [GitHub Copilot](https://docs.github.com/copilot)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)

---

## Obiective curs

La finalul acestui curs, participanții vor putea:

- Citi și scrie **HTML, CSS și JavaScript modern** și depana o pagină cu DevTools
- Construi o aplicație **React + TypeScript** din componente și o publica
- **Integra un LLM într-o aplicație web** full-stack, cu Next.js: streaming, mai mulți provideri, cost controlat,
  autentificare, bază de date, unelte apelate de model
- Scrie **teste end-to-end** pentru propria aplicație, inclusiv pentru părțile care depind de un model AI
- **Genera cod cu un agent AI**: să-i dea cerințe clare, să-i citească și să-i judece rezultatul
- Livra și prezenta un **proiect personal** publicat

---

## Publicul-țintă

### Pentru cine este cursul

Pentru oameni care **știu deja să programeze**, dar **nu au lucrat pe web**:

- **QA automation** — știi selectori și scenarii de test, vrei să înțelegi aplicația pe care o testezi;
- **developeri juniori** — vrei o bază solidă de front-end și o primă aplicație completă în portofoliu;
- **developeri backend** (Java, C#, Python…) care vor să treacă spre **full-stack** și să înțeleagă ce se întâmplă
  în browser.

### Pentru cine nu este

Pentru developeri web care lucrează deja cu React — ritmul și primele etape ar fi prea lente.

---

## Cerințe preliminare

### Cunoștințe obligatorii

- Programare de bază în orice limbaj: variabile, funcții, structuri de date
- **Git** elementar: clone, commit, push

**Nu este nevoie de experiență web.**

### Nice to have

- Noțiuni de HTTP / API REST
- Experiență cu o bază de date (SQL)
- Experiență cu un framework de testare automată

### Setup necesar

- Laptop cu **Node.js** (versiunea LTS curentă), **Git** și **VS Code**
- Cont **GitHub**
- Acces la un **agent AI de cod** (GitHub Copilot, Claude Code sau echivalent)
- Conturi gratuite pe **Vercel** și **Supabase** (create în timpul cursului)
- Chei de API pentru cel puțin un provider de LLM (detalii în prima sesiune)
- *Opțional:* un laptop pe care poate rula **Ollama** (ideal 16 GB RAM sau mai mult), pentru partea cu LLM local

---

## Cum lucrăm

- **O aplicație care crește pas cu pas**, nu exerciții izolate. Fiecare pas adaugă un singur concept nou.
- **Fiecare pas are două materiale publicate:** promptul cu care îl generezi cu agentul tău și codul de reținut
  (cele 2–4 linii care contează). Poți reface orice pas acasă, singur.
- **Înțelegere înaintea acoperirii.** Preferăm să stăm mai mult pe un concept decât să bifăm o listă de tehnologii.
- **Teme cu termen și prezentare.** Ce lucrezi acasă arăți la lecția următoare, pe ecranul tău — formatul din care
  învață tot grupul.
- **Feedback în scris**, cu întrebări precise, la finalul fiecărei etape.

---

## Etapa 1 — Fundamente web

### 1.1 Cum funcționează web-ul

- Browser, server, request / response, HTTP
- **DevTools**: Elements, Console, Network
- Structura unui proiect web și primul fișier versionat cu Git

### 1.2 HTML și CSS

- **HTML** semantic: structură, formulare, accesibilitate de bază
- **CSS**: selectori, box model (`margin` / `padding` / `border`)
- Layout cu **flexbox** și **grid**, layout responsive
- **Selectorii** văzuți din DevTools — puntea directă spre testarea automată

### 1.3 JavaScript pentru cine vine din alt limbaj

- Tipuri, variabile, funcții și arrow functions
- Obiecte și array-uri: `map` / `filter` / `reduce`
- Spread, destructuring, module

### 1.4 DOM, evenimente și cod asincron

- **DOM și evenimente**: cum reacționează pagina la utilizator
- `Promise`, `fetch`, `async/await`
- Apeluri către un API real, stări de încărcare și de eroare

### 1.5 Proiect — mini-aplicație fără framework

O pagină care citește date dintr-un API și le afișează, scrisă în HTML, CSS și JavaScript simplu.

---

## Etapa 2 — React + TypeScript

### 2.1 Componente și stare

- De ce un framework: componente, stare, randare declarativă
- Scaffold cu **Vite**, `npm` și dependențe
- **Componente și props**, **`useState`**
- Funcții pure

### 2.2 Efecte, liste și compoziție

- **`useEffect`** și curățarea efectelor
- Liste cu `map` și `key`
- **Lifting state** între componente
- **Custom hooks** și stare globală cu **`useContext`**

### 2.3 TypeScript, stilizare și unelte

- **TypeScript** de bază: tipuri, interfețe, tipuri pentru props
- Stilizare cu **Tailwind CSS**, componente gata făcute cu **shadcn/ui**
- Formatare automată cu **Prettier**, path alias-uri

### 2.4 Proiect — `react-basics`, publicată pe GitHub Pages

Aplicația `react-basics`, construită pas cu pas — fiecare pas un concept — și publicată online pe **GitHub Pages**.

---

## Etapa 3 — Integrăm AI în aplicație: SkillForge

**SkillForge** este un asistent de carieră, construit de la un repo gol până la o aplicație publică.

### 3.1 Next.js și API-ul propriu

- **Next.js** (App Router): rute, layout-uri
- Componente de server vs. componente de client
- **API-ul propriu ca proxy** către LLM: cheia rămâne pe server, modelul se decide pe server

### 3.2 Primul chat cu un LLM

- **Streaming**: cum apare răspunsul cuvânt cu cuvânt (SSE)
- Chat-ul real în interfață, cu **Vercel AI SDK**
- **Promptul de sistem și persona**: cum configurezi comportamentul modelului

### 3.3 Publicare și experiența în interfață

- **Deploy pe Vercel** din primele zile: fiecare commit ajunge în producție
- Stare în aplicație cu **Zustand**, temă cu `useContext`
- **Markdown randat** în răspunsurile modelului
- Acțiuni pe conversație și export

### 3.4 Provideri, cost și cache

- **Mai mulți provideri de LLM** (OpenAI, Anthropic) și schimbarea între ei
- **Tokeni și cost**: raport de cost per conversație
- **Cache**: evitarea apelurilor repetate

### 3.5 Utilizatori și date

- **Autentificare** cu GitHub (OAuth, Auth.js)
- **Persistență** cu **Supabase**: conversații și profil salvate în baza de date
- Memorie: sumarizarea conversațiilor lungi

### 3.6 Unelte (tool calling)

- Modelul cere aplicației să execute o acțiune
- Definirea uneltelor și **validarea răspunsului cu o schemă** (Zod)
- Aprobarea utilizatorului înainte de acțiunile importante

### 3.7 Securitate

- Variabile de mediu: ce ajunge în browser și ce nu
- Chei separate pentru local și pentru producție
- Ce fișiere vede agentul AI de cod

### 3.8 Proiect — SkillForge, publicată pe Vercel

SkillForge cu login, istoric salvat, mai mulți provideri și unelte, publicată pe **Vercel**.

---

## Etapa 4 — Testare automată

### 4.1 Teste end-to-end cu Playwright

- Instalare și primul test pe propria aplicație SkillForge
- **Selectori stabili** și cum îi pregătești în cod (`data-testid`, roluri accesibile)
- Scenarii reale: login, trimiterea unui mesaj, istoricul conversației

### 4.2 Cum testezi o aplicație cu AI

- **Mock** pentru răspunsul modelului
- Verificări pe un **output nedeterminist**
- Testele scrise **împreună cu agentul** — și revizuite de tine

### 4.3 Un LLM local cu Ollama

Un demo scurt, cu integrare practică pentru cei care au un laptop pe care poate rula (opțional):

- Ce este **Ollama** și cum rulezi un model pe propriul laptop
- **Ollama ca provider local în SkillForge**, alături de cei din cloud — doar în mediul de dezvoltare
- **La ce îl folosim**: teste fără cost și fără chei de API, dezvoltare offline, date care nu trebuie să plece
  de pe laptop
- **Limitele**: calitatea răspunsurilor, viteza, resursele necesare — și când rămâi la un model din cloud

### 4.4 Teste rulate automat

- Testele rulate la fiecare push, în **GitHub Actions**

### 4.5 Proiect — suita de teste pentru SkillForge

O suită de teste end-to-end pentru SkillForge, rulată automat în CI.

---

## Etapa 5 — Proiectul personal

Proiectul personal este **cerința de acreditare** și are **fir propriu pe tot cursul**, nu doar la final.
Tema o alegi tu; dacă nu ai una, varianta de rezervă este SkillForge extins cu un feature propriu.

### 5.1 Repere

| Reper | Când | Ce predai |
| --- | --- | --- |
| **Lansare** | la începutul etapei 3 | tema aleasă + documentul de cerințe, scris ca prompt, versionat în repo |
| **Checkpoint 1** | în timpul etapei 3 | scheletul aplicației + primul apel către un LLM, publicat pe Vercel |
| **Checkpoint 2** | la finalul etapei 4 | feature-urile principale + cel puțin un test Playwright |
| **Lucru ghidat** | ultimele sesiuni | lucrezi la proiect în lecție; review live pe ecranul voluntarilor |
| **Prezentare** | ultima sesiune | demo live + ce ai învățat + ce ai cerut agentului și ce ai corectat |

### 5.2 Criterii de evaluare

Anunțate din prima sesiune:

- aplicația funcționează și este publicată;
- folosește cel puțin un LLM, cu cheia protejată pe server;
- are cel puțin un test end-to-end;
- repo-ul are `README.md` și fișierul de cerințe;
- prezentarea arată și codul, nu doar interfața.

---

## Firul roșu al cursului — codul îl generăm cu un agent AI

Nu e o etapă separată: **în toate cele cinci etape, codul este generat de un agent AI** (GitHub Copilot, Claude Code
sau echivalent), iar tu îl ghidezi și îl verifici.

### Cum ceri

- **Plan înainte de cod** — agentul îți pune întrebări înainte să scrie ceva
- **Promptul în două părți**: nevoia (ce vrei) + cerințele tehnice (cum trebuie să arate rezultatul)
- **Fișiere de reguli** (`CLAUDE.md` și echivalentele lor) — ca agentul să păstreze convențiile proiectului
- **Skill-uri**: proceduri repetate, salvate o dată și refolosite

### Cum controlezi rezultatul

- **Citirea codului generat**: ce nu ceri explicit, nu primești — și primești în schimb varianta implicită
- Commit-uri mici și dese, ca să poți reveni oricând
- **Alegerea modelului per pas** și **costul în tokeni**

### Securitate

- Ce fișiere vede agentul și ce permisiuni îi dai
- Chei care nu trebuie să ajungă niciodată în cod

---

## Dacă timpul permite

Subiecte pregătite, pe care le abordăm **doar dacă ritmul grupului o permite** — nu fac parte din promisiunea cursului:

- RAG: răspunsuri din documentele proprii (CV, notițe)
- Comparație între provideri, pe același prompt
- Căutare în conversații și export PDF

---

## Resurse & materiale

### Materialele cursului

- [Web intro (HTML/CSS)](https://nmatei.github.io/web-intro-presentation/)
- [JavaScript](https://nmatei.github.io/web-intro-presentation/js)
- [React (introducere)](https://nmatei.github.io/web-intro-presentation/react)
- [React Basics](https://react-basics.github.io/) — pașii aplicației, cu promptul și codul de reținut pentru fiecare

### Cursuri recomandate pentru aprofundare

- [Become a WEB Developer from Scratch, step by step Guide](https://nmatei.github.io/web) — cursul trainerului:
  HTML și CSS de la zero (layout, flexbox, grid), cu cel mai bun cupon de reducere Udemy activ
- [Modern React with Redux](https://www.udemy.com/course/react-redux/) — fundamente React și state management
- [Next.js 15 & Firebase](https://www.udemy.com/course/nextjs-firebase/) — Next.js (App Router), deploy,
  backend-as-a-service (auth, DB, storage)
- [ChatGPT and LangChain: The Complete Developer's Masterclass](https://www.udemy.com/course/chatgpt-and-langchain-the-complete-developers-masterclass/)
  — LangChain, agenți, memorie; pentru după curs, dincolo de ce acoperim

---

## Ce ai la final

- **2 aplicații publicate**: `react-basics` (GitHub Pages) și SkillForge (Vercel)
- **O suită de teste** end-to-end, rulată în CI
- **Proiectul personal**, publicat și prezentat
- Promptul și codul de reținut pentru **fiecare pas**, ca material de recapitulare

---

## Certificare

La finalizare, cu **proiectul personal prezentat** și **prezența minimă** cerută de organizator.
