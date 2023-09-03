# screenshot-api

This is the API server for the screenshot-toggle-app

### 📗 Swagger :: API Document

Start your app in development mode at `http://localhost:3000/api-docs`

Modify `swagger.yaml` file to your source code.

# Strp 1: 🐳 Initialize Docker

Docker is being used to initialize the mongodb container for local testing, if you have a database already running edit the `.env.local` file and change variables `DB_HOST`, `DB_PORT`, and `DB_DATABASE` accordingly.

- starts the containers in the background and leaves them running : `docker-compose up -d`
- Stops containers and removes containers, networks, volumes, and images : `docker-compose down`

# Step 2: 🛎 Start Project

- Run the Server in production mode : `npm run start`
- Run the Server in development mode : `npm run dev`
- Run all unit-tests : `npm test`
- Check for linting errors : `npm run lint`
- Fix for linting : `npm run lint:fix` 
