---
title: No Nonsense Guide to Frontend Website Development for Beginners
date: 2024/3/20
description: Don't think, just code and learn along the way.
tag: web development, react, tailwindcss
author: Javian Ng
type: post
---

# No Nonsense Guide to Frontend Website Development for Beginners

Don't think, just code and learn along the way.

![https://miro.medium.com/v2/resize:fit:720/format:webp/0*ja_dFkrg9zJRzgSB](https://miro.medium.com/v2/resize:fit:720/format:webp/0*ja_dFkrg9zJRzgSB)
Photo by Nathan Dumlao on Unsplash

Chances are that if you are here, either my blog made it or you are a recruiter scanning and looking through my profile to decide if I am an ideal candidate for the role I applied for. Well, I am happy to let you know that this article is for almost anyone without much technical background, whether you are a recruiter or a student. It is not meant for those who have been coding for awhile now.

### Let's get stright into the point. How do I start? Here are the steps:

1. Read up on HTML tags and CSS styling properties. Briefly understand what they mean, and things like anchor text, `margin`, `padding`, `flexbox…` These are crucial knowledge but you will eventually learn and understand them better as you code and mess up.

2. Start coding

### But How?!?!

In this guide, I will be encouraging you to use React and TailwindCSS, which most educators will not recommend for beginners because “you are skipping the foundations”. But I want immediate results and would rather seek out the nuances and best practices later. So I say let’s just f\*\*king do it.

#### Step 1: Set Up

I find that the easiest way to go about this is to create a t3 app instead of the classic `npx create-react-app`.

Head over to https://create.t3.gg/ and use the npm installation code to create your project — `npm create t3-app@latest`. I would recommend using `npm` but feel free to play around and mess up your computer anyway — Computer Science / Website Development is about screwing around and debugging anyway…

You will be greeted by this the below code block. Just follow the instructions and select what I have selected below.

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

You can either follow the steps indicated by Next steps or you can just open the new folder created which is named as `nameofyourproject` in my case.

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
- By default, index is your homepage → The very first page you see.
- If you want a route / website link (in layman terms) like `/blog/article1`, you implement it by creating a folder called `blog` inside `pages`, and add `article1.tsx` inside the `blog` folder.
- If you want a structure like `/blog` assuming you have articles as well, create an `index.tsx` in the same place you store your articles. This will be the “homepage” of the `blog` folder.

`components`

- This is a folder that you should create and will be really useful. You create it inside the `src` folder. Here is where you create components and add it to your page in `pages`.
- For example, you can create a `button.tsx` in components folder and use it inside your page so the code is less cluttered and more reusable if you want to reuse your button.

`public`

- Store all your images and non-code files here.
- Feel free to replace your `favicon.ico` with you own icon to spice up your Website’s icon.

styling

- Use TailwindCSS instead of the basic `css` files. The TailwindCSS’ documentations will come in handy. https://tailwindcss.com/
- Inside your tags, use the `className` property to add the styling.
- E.g. if I want my text to be white:

  ```html
  <p className="text-white>
    Tempor eu ut laboris tempor officia.
  </p>
  ```

viewing your website

There are 2 commands you ought to know.

- `npm run dev`: This command shows you your website.
- `npm i` or `npm install`: This command installs all packages listed in the package.lock file.

#### Step 3: Extra packages because I am lazy

Chances are that you have encountered things like DaisyUI, Material UI, Chakara UI… These are libraries to make it easier for you to implement your designs. Well, use their documentations to learn how to use them! It isn’t that hard… I think… I will list some of the easy ones below:

- [daisyui.com](daisyui.com)
- [chakra-ui.com](chakra-ui.com)
- [mui.com](mui.com)

Slightly more complex ones as you have to copy the component into your codebase.

- [ui.shadcn.com](ui.shadcn.com)
- [ui.aceternity.com](ui.aceternity.com)

. . .

There is bootstrap too but eww…

With the above steps, you should be able to mess around and see your random creations come to live. Learning from implemented codes is the fastest way to learn. With that, it is enough reading and time to start coding! Feel free to publish your codes to Github and deploy them on Vercel.
