# React Basics — playground care crește pas cu pas

[![Live](https://img.shields.io/badge/live-react--basics.github.io-brightgreen?style=for-the-badge)](https://react-basics.github.io/)

**→ https://react-basics.github.io/**

Aplicație **Vite + React + TypeScript** folosită la cursul **„AI & Automation cu React"**
(Transilvania IT / FutureReady IT). Un singur app care **crește pas cu pas**: fiecare buton din meniu
e un concept nou, adăugat separat, cu explicația lui.

> Acest repo conține **doar build-ul publicat** (folderul [`docs/`](docs/), servit de GitHub Pages).
> Codul sursă stă în repo-ul de curs al trainerului și se publică aici automat, la deploy.

---

## 🎯 De ce există aplicația

Pentru că „am înțeles React din tutorial" și „pot citi un PR de React" sunt două lucruri diferite.
Situațiile pe care le rezolvă, concret:

- **„Sunt dev Java/backend și React mi se pare magie."**
  Aici nu vezi un app terminat din care nu înțelegi nimic, ci **piesele, una câte una**: de ce ai nevoie
  de `useState` ca să se redeseneze ecranul, ce face de fapt `useEffect`, de unde vine build-ul.

- **„Agentul AI mi-a generat 300 de linii. Sunt bune?"**
  Abilitatea care contează acum e să **citești și să judeci** codul generat, nu să-l scrii din memorie.
  Fiecare pas are un **slide de cod** (cele 2-4 linii de reținut) și un **slide de prompt** — exact
  cererea pe care i-o dai unui agent ca să obții pasul respectiv. Poți regenera orice pas și compara.

- **„Am copiat dintr-un tutorial și nu merge."**
  De obicei lipsește o piesă de config, nu o linie de cod. Pașii trec explicit prin **Vite, TypeScript,
  path alias `@/`, Prettier, Tailwind, shadcn/ui** — nu ca rețete de copiat, ci explicând **rolul fiecăreia**.

- **„De ce mi se execută `useEffect` de două ori?"**
  Sunt întrebările care opresc un backend dev o zi întreagă. Pașii cu `useEffect` + cleanup, props &
  lifting state, custom hooks și `useContext` există fix pentru capcanele acestea.

- **„Unde am rămas data trecută?"**
  Aplicația ține minte pasul și tab-ul în `localStorage`. O deschizi și continui — în clasă sau acasă.

---

## 📚 Ce găsești în app

Două tab-uri, fiecare cu propria serie de pași numerotați:

| Tab | Pași | Ce acoperă |
| --- | --- | --- |
| **React Basics** | 15 | Scaffold, `useState`, class components, funcții pure, Prettier, `useEffect` + cleanup, props & lifting state, meniu de demo-uri, path alias `@/`, Tailwind CSS, shadcn/ui, custom hooks, `useContext`, finisaje, deploy pe GitHub |
| **Next.js Intro** | 17 | Traseul complet al aplicației construite la curs (**SkillForge**): primul app Next.js, streaming SSE, chat real în UI, persona, deploy pe Vercel, Zustand, temă, al doilea provider, cost & cache, auth, persistență, tool calling, search & export, multi-provider |

Fiecare pas se termină cu două „slide-uri" pliabile:

- 🖥️ **Cod** — cele 2-4 linii reprezentative de reținut din pasul respectiv;
- 🤖 **Prompt** — cererea completă pentru un agent AI, cu secțiunea de cerințe tehnice, ca să obții
  același rezultat în proiectul tău.

Ambele au buton de **copiere** (copiază sursa markdown, nu textul randat).

> 🔐 Tab-ul **Next.js Intro** e protejat cu un cod de acces, primit la curs. Tab-ul **React Basics**
> e deschis pentru toată lumea.

Mai sunt: comutator **light/dark**, plus un selector didactic `useState` / `localStorage` care arată,
la refresh, diferența dintre stare care se pierde și stare care se persistă.

---

## 📄 Curricula cursului

Curricula cursului **„AI & Automation cu React"**, publicată tot aici, în două limbi:

| Limbă | Link |
| --- | --- |
| 🇷🇴 Română | https://react-basics.github.io/curicula |
| 🇬🇧 English | https://react-basics.github.io/curicula.en |

---

## 🌍 Unde e publicată

Același build merge pe două domenii — folosește-l pe oricare:

| Adresă | Repo |
| --- | --- |
| https://react-basics.github.io/ | acesta (`react-basics/react-basics.github.io`, branch `main`, folder `/docs`) |
| https://nmatei.github.io/web-intro-presentation/react-basics/ | `nmatei/web-intro-presentation` |

---

## 🚀 Cum se actualizează

Nu se editează nimic direct aici. Din repo-ul sursă (`examples/react-basics`):

```bash
npm run deploy
```

Comanda face build-ul, copiază `dist/` peste `docs/` în ambele repo-uri de publicare, apoi comite și
dă push. Tot ea copiază aici și cele două fișiere de curriculă (`curicula.md`, `curicula.en.md`), pe care
GitHub Pages le convertește în pagini HTML. Conținutul din [`docs/`](docs/) e **generat** — orice modificare manuală se pierde la
următorul deploy.
