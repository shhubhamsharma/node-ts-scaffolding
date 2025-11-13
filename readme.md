# Node + TypeScript Scaffolding

A lightweight and opinionated starter template for building Node.js applications using **TypeScript** - designed to help you quickly bootstrap clean, maintainable backend projects.

## Features

- Pre-configured **TypeScript** compiler (`tsconfig.json`)  
- **Modular folder structure** for scalability  
- Built-in **linting and formatting** support  
- **Testing setup** ready to extend  
- Ready-to-use **build and start scripts**  
- Easy integration with frameworks like Express, Fastify, or NestJS  

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shhubhamsharma/node-ts-scaffolding.git my-app
cd my-app
npm install
```

## Available Scripts

### Build the project
```bash
npm run build
```
Compiles TypeScript from `src/` to `dist/`.

### Run the application
```bash
npm start
```
Runs the compiled JavaScript from `dist/`.

### Run tests
```bash
npm test
```
Executes the unit test suite (if configured).

## Project Structure

```
node-ts-scaffolding/
├── src/                 # TypeScript source files
│   ├── index.ts         # Entry point
│   └── ...              # Additional modules, utils, services
├── dist/                # Compiled JavaScript output
├── package.json         # Project metadata & scripts
├── tsconfig.json        # TypeScript compiler configuration
├── tslint.json          # Linting rules (or migrate to ESLint)
└── README.md            # Project documentation
```

## 💡 Getting Started

1. Create your business logic inside the `src/` directory.  
2. Use `npm run build` to transpile the TypeScript files.  
3. Run the output using `npm start`.  
4. Extend the structure for APIs, workers, or microservices.

Example:
```ts
// src/index.ts
console.log("Node + TypeScript app running!");
```

## Recommended Improvements

- Replace **TSLint** with **ESLint** (TSLint is deprecated).  
- Add **Prettier** for formatting.  
- Integrate **Jest** or **Mocha** for testing.  
- Optionally add **nodemon** for hot reloading during development.  

## Example Add-Ons

You can easily add:
- Express or Fastify for web APIs  
- Winston or Pino for logging  
- Dotenv for environment variables  
- Husky for Git hooks (lint-staged, pre-commit checks)

## Contributing

Pull requests are welcome!  
If you'd like to suggest improvements or report bugs, feel free to open an issue.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.