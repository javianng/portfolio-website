---
title: No Nonsense Guide to Frontend Website Development for Beginners
date: 2021/3/18
description: Don't think, just code and learn along the way.
tag: web development, react, tailwindcss
author: Javian Ng
type: post
---

Chances are that if you are here, either my blog made it out or you are a recruiter scanning and looking through my portfolio to decide if I am an ideal candidate for the job I applied for. Well, I am happy to let you know that this article is for almost anyone, whether you are a recruiter or a student. It is not meant for those who are already coding for awhile now.

### Let's get stright into the point. How do I start? Here are the steps:

1. Read up on HTML tags and CSS styling properties. Briefly understand what they mean, and things like anchor text, margin, padding, flexbox... These are crucial knowledge but you will eventually learn along the way and these will be easily understood after awhile.
2. Start coding

### But How?!?!

In this guide, I will be encouraging you to use React and TailwindCSS, which most educators will not recommend for beginners. But I want immediate results and would rather seek out the nuances and best practices later. So I say enough talking and let's just f\*\*king to it.

#### Step 1: Set Up

I find that the easiest way to go about this is to use the t3 app instead of the classic `npx create-react-app`.

Head over to https://create.t3.gg/ and use the npm code to create your project - `npm create t3-app@latest`. I would recommend using `npm` but feel free to play around and mess up your computer anyway - Computer Science / Development is about screwing around and debugging anyway...

You will be greeted by this the below code block. Just follow the instructions and select what I have indicated below.

```bash
npm create t3-app@latest
    ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
   / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
  | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
   \___|_|_\___|_/¯¯\_\_| |___|   |_| |___/ /_/¯¯\_\_| |_|

? What will your project be called? (my-t3-app)
nameofyourproject

? Will you be using JavaScript or TypeScript?
TypeScript

? Will you be using Tailwind CSS for styling?
Yes

? Would you like to use tRPC?
No

? What authentication provider would you like to use?
None

? What database ORM would you like to use?
None

? EXPERIMENTAL  Would you like to use Next.js App Router?
No

? Should we initialize a Git repository and stage the changes?
No

? Should we run 'npm install' for you?
Yes
│
? What import alias would you like to use?
 ~/

✔ nameofyourproject scaffolded successfully!

Adding boilerplate...
✔ Successfully setup boilerplate for tailwind
✔ Successfully setup boilerplate for envVariables
✔ Successfully setup boilerplate for eslint

Next steps:
  cd nameofyourproject
  npm install
  npm run dev
  git init
  git commit -m "initial commit"
```

You can either follow the steps indicated by Next steps or you can just open the new folder created which is likely named as `nameofyourproject` in my case.

#### Step 2: Folder Structure

You should be greeted by this odd looking folder structure.

```
NAMEOFYOURPROJECT
├─ node_modules/
│ └─ \*
├─ public/
│ └─ favicon.ico
├─ src/
│ ├─ pages/
│ │ ├─ \_app.tsx
│ │ └─ index.tsx
│ └─ styles/
│ └─ globals.css
├─ env.js
├─ .env
├─ .env.example
├─ .eslintrc.cjs
├─ .gitignore
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ prettier.config.js
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

##### What do you really need to know?

`pages`

- This is how you access your website.
- By default, index is essentially your homepage → The very first page you see.
- If you want a structure like `/blog/article1`, how you implement it is that you create a folder called `blog` inside `pages`, and add `article1.tsx` inside the `blog` folder.
- If you want a structure like `/blog` assuming you have articles as well, create an `index.tsx` with the place you store your articles. This will be the "homepage" of `blog`.

`components`

- This is a folder I like to create and is quite useful. You create it inside the `src` folder and here is where I create components and add it to my `page` in `pages`.
- For example, you can create a `button.tsx` in components folder and use it inside your page so the code is less cluttered and more reusable if you want to reuse your button.

styling

- Use tailwindcss instead of the basic `css` files. The tailwindcss website will come in handy. https://tailwindcss.com/
- Inside your tags, you can use the className property to add the styling.
- E.g. if I want my text to be white:
  ```html
  <p className="text-white>
    Tempor eu ut laboris tempor officia.
  </p>
  ```

#### Step 3: Extra packages because I am lazy

Chances are that you have encountered things like DaisyUI, Material UI, Chakara UI... These are libraries to make it easier for you to implement your designs. Well, use their documentations to learn! It isn't that hard.

---

With the above 3 steps, you should be able to mess around and see your random creations come to live. Always learn from other's codes as that is the fastest way to learn. With that, it is enough reading and time to start coding!
