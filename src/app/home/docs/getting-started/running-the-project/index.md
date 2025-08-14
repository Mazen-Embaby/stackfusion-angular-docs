---
keyword: RunningTheProjectPage
---

\

# Front-End

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

##

# Back-End

### [Strapi](https://docs.strapi.io/dev-docs/installation/cli#running-strapi)

To start the Strapi application, run the following command in the project folder:

either run Yarn or NPM

```bash
yarn develop
```

OR

```bash
npm run develop
```

Where is my content?

For self-hosted Strapi projects, all your content is saved in a database file (by default, SQLite) found in the `.tmp` subfolder in your project's folder. So anytime you start the Strapi application from the folder where you created your Strapi project, your content will be available (see [database configuration](https://docs.strapi.io/dev-docs/configurations/database) for additional information).

If the content was added to a Strapi Cloud project, it is stored in the database managed with your Strapi Cloud project (see [advanced database configuration for Strapi Cloud](https://docs.strapi.io/cloud/advanced/database) for additional information).

