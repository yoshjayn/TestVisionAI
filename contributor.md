# Contributor Guide

Thank you for considering contributing to our project! This guide will help you get started with setting up your development environment, creating branches, and following our commit message conventions.

## Table of Contents

1. [Setting Up the Development Environment](#setting-up-the-development-environment)
2. [Creating a Branch](#creating-a-branch)
3. [Commit Message Semantics](#commit-message-semantics)
4. [Submitting a Pull Request](#submitting-a-pull-request)

## Setting Up the Development Environment

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Frontend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo.git
    cd your-repo/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

### Backend

1. Navigate to the backend directory:
    ```sh
    cd ../backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

4. Generate prisma client
   ```sh
    npx prisma generate
   ```
   
3. Start the development server:
    ```sh
    npm run dev
    ```

## Creating a Branch

1. Ensure you are on the `main` branch and it is up to date:
    ```sh
    git checkout main
    git pull origin main
    ```

2. Create a new branch for your feature or bugfix:
    ```sh
    git checkout -b feature/your-feature-name
    ```

## Commit Message Semantics

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages. Here are some common types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Example Commit Message


***************************************************************************************************************************


## Submitting a Pull Request

1. Push your branch to the remote repository:
    ```sh
    git push origin feature/your-feature-name
    ```

2. Open a pull request on GitHub.

3. Ensure your pull request description clearly describes the problem and solution. Include any relevant issue numbers.

4. Wait for the code review and address any feedback.

Thank you for your contributions!
