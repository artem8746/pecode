# Pecode test task

-   [Deploy](https://pecode-server.onrender.com/)

### Used technologies

-   Express
-   TypeScript
-   Prisma ORM

## How to use

1. Clone the repository:

    ```bash
    git clone https://github.com/artem8746/pecode.git
    ```

2. Navigate to the project directory:

    ```bash
    cd project-directory
    ```

3. Make sure you have version 18 of the node:

    ```bash
    nvm use 18
    ```

4. Setup project with the following command or use commands bellow:
   Runs "npm install", "npm run env:init" and "npm run prisma:init"

    ```bash
    npm run setup
    ```

5. Install dependencies:

    ```bash
    npm install
    ```

6. Init and setup if necessary .env file:

    ```bash
    npm run env:init
    ```

7. Make sure to run all migrations:

    ```bash
    npm run prisma:init
    ```

8. Start the development server:

    ```bash
    npm run dev
    ```

9. Make requests on http://localhost:5700.

## Available Scripts

### npm run dev

Runs the server in the development mode.\
Make requests on [http://localhost:5700](http://localhost:5700/).

The changes will be accepted after save.

### npm run build

Builds the server for production to the dist folder.\

Your server is ready to be deployed!

### npm run lint

Runs linter.

### npm start

Runs current server version
To accept new changes you will have to re-run the command
Fits for production build

### npm run prisma:init

Runs migrations

### npm run env:init

Copies .env.sample to .env
