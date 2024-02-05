# fcc-admin-dashboard

#### Fullstack React and Next.js project

Based on [How to Build an Admin Dashboard with React](https://www.freecodecamp.org/news/build-admin-dashboard-react/)

#### ⚡️ Requirements

- Install Node.js as [nodejs.org](https://nodejs.org)
- Good code editor, preferably [VSCode](https://code.visualstudio.com)
- Github account at [github.com](https://github.com)

#### 📚 Libraries/Services Used

- [Nextjs 14](https://nextjs.org)
- [Railway (Postgres database)](https://railway.app/new)
- [Github (to create OAuth app)](https://github.com/settings/applications/new)
- [Prisma (ORM)](https://prisma.io)
- [Tremor (charts/graphs)](https://tremor.so)
- [TailwindCSS (styles)](https://tailwindcss.com)
- [Avvvatars (fallback avatar)](https://avvvatars.com/)
- [Next Auth (user auth)](https://authjs.dev)

#### 🧠 Learn More

- [Next Auth and Prisma Adapter Setup](https://authjs.dev/reference/adapter/prisma#prismaadapter)
- [Protecting Routes with Next Auth](https://authjs.dev/guides/basics/securing-pages-and-api-routes#nextjs-middleware)
- [getServerSession in Next Auth](https://next-auth.js.org/configuration/nextjs#getServerSession)

Inspired by: https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template

## Walkthrough

- Create a PostgreSQL database in [railway.app/new](https://railway.app/new)
- Go to the DB's Variables tab and copy it's DATABASE_URL
- Paste the URL in the .env.example file. Rename to .env
- The schema.prisma file, takes care of connecting to the database, setting up a Prisma client, and modelling all your data.
- Run _npx prisma db push_ to push the schema to the DB
- Within the lib folder, create a prisma.ts file. In this file, you'll pass the Prisma client to your entire app as a global variable.
- Connect Prisma to NextAuth
- Connect NextAuth to a [new GitHub Application](https://github.com/settings/applications/new)
- Use the application's ClientID and Client Secret in the .env.
- Generate a random openssl key for the .env.NEXTAUTH_SECRET
- In the Navbar's Sign In button, import and use { signIn, signOut } from "next-auth/react";
- Verify the user was added to the Postgre DB with _npx prisma studio_
- Create a wrapper for the Navbar called Nav. It will be responsible for retrieving the server session from next-auth and pass it on to Navbar.
- Add Props to the Navbar using next-auth's Session object.
- Create a protected route to the /analytics page. Create a folder called analytics - Next.js will create the route - and a page.tsx file inside.
- use getServerSession() to check for a logged in user. If !session, redirect to "api/auth/signin", else, return <Analytics />
- Create the Analytics page. We'll use Tremor to build graphs and charts, using mock data provided with the starter app, available at each controller.
- Create the Users table. Fetch the data uing the Prisma client
- Create the Searchbar
