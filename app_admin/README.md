
Here's how to run the Travlr app with database initialization:

## **1. Start MongoDB**
```powershell
mongod
```
Keep this running in a separate terminal.

## **2. Seed the Database (First time only)**
```powershell
cd c:\Source\travlr
node app_server/models/seed.js
```
This loads the sample trips data from trips.json into MongoDB.

## **3. Start the Node.js Backend Server**
In a new terminal:
```powershell
cd c:\Source\travlr
npm start
```
This starts the Express server on **http://localhost:3000**

## **4. Start the Angular Development Server (in another terminal)**
```powershell
cd c:\Source\travlr\app_admin
ng serve
```
Or if you prefer using npm:
```powershell
npm start
```
This runs the Angular app on **http://localhost:4200**

## **Quick Summary:**
- **MongoDB**: `mongod` (runs on localhost:27017)
- **Backend API**: `npm start` from root folder (port 3000)
- **Frontend**: `ng serve` or `npm start` from app_admin folder (port 4200)
- **Database Seeding**: `node app_server/models/seed.js` (one-time setup)

The app will be accessible at **http://localhost:4200** once everything is running!