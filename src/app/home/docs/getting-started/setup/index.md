---
keyword: SetupPage
---

Learn how to setup your Stackfusion application.

This guide will walk you through setting up Stackfusion. We will go through the process of cloning the project, installing dependencies, setting up your database and running the local development server.

## Prerequisites

Before you can get started, you will need to have the following installed on your machine.

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [Git](https://git-scm.com/) (clone repo from github)
- [VSCode](https://code.visualstudio.com/) (recommended, or any other code editor)
- [Angular CLI](https://angular.dev/tools/cli/setup-local) (recommended for advanced use)
- Database ([MySQL](https://www.mysql.com/downloads/) or [PostgreSQL](https://www.postgresql.org/download/)) in case you build an application and need database

## Project setup

### Front-End (Angular)

#### Clone the repository

```bash
git clone git@github.com:Mazen-Embaby/stackfusion-angular-starterkit.git
```

#### Install the dependencies

- Use [pnpm](https://pnpm.io/installation) (recommended)

  ```bash
  cd stackfusion-angular-starterkit && pnpm install
  ```

- Use [nodejs](https://nodejs.org/en/download)

  ```bash
  cd stackfusion-angular-starterkit && node install
  ```

### Back-End

#### Strapi

[Create a new strapi with appropriate configuration](https://docs.strapi.io/dev-docs/quick-start)

Strapi support `PostgreSQL`, `MySQL` and `sqllite`. You can find all supported databases [here](https://docs.strapi.io/dev-docs/installation/cli).

```bash
npx create-strapi@latest strapi
```

The terminal will now ask you a few questions

![strapi-config](/strapi-config.png)
