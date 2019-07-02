# Carter
Cinema Listings

# Technologies
- NodeJs with ExpressJs
- Typescript 
- MongoDB (mongoose as ODM)

# How to use
- 1. You can clone the repo with GIT CLONE https://github.com/JhonasV/carter.git
- 2. npm install (to install the dependecies)
- 3. start your local mongoDB server and edit the correct URI in the Config/dev.ts file.
- 4. npm run build and npm run dev (running at the same time)

# Example API URI
- Actor Routes
- GET http://localhost:3000/api/v1/actor
- Response: Array with all actors
- GET http://localhost:3000/api/v1/actor/abc123
- Response: An object with the properties
  - id, name, bio, picture.
- POST http://localhost:3000/api/v1/actor
- Response: An object with the properties
  - id, name, bio, picture and created as a boolean.
- PUT http://localhost:3000/api/v1/actor/abc123
- Response: Receive an object with the updated data.
- Delete http://localhost:3000/api/v1/actor/abc123
- Response: Receive the "deleted" boolean propertie.

  

 

