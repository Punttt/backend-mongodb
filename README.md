# REST-webbtjänst
Detta projekt är en REST-webbtjänst som är byggd med Node.js/Express som hanterar arbetslivserfarenheter via en MongoDB-databas.
API:et erbjuder full CRUD-funktionalitet och returnerar data i JSON format.

## Tekniker
    - Node.js
    - Express
    - MongoDB
    - Mongoose
    - CORS
    - Dotenv
    - Nodemon

## Databasstruktur
Databasen innehåller en collection: **workexperiences**
```
workexperiences (
  _id ObjectId PRIMARY,
  companyname String (required),
  jobtitle String (required),
  location String (required),
  startdate Date (required),
  enddate Date,
  description String (required)
)
```

## Installation
1. Klona projekt
```
git clone https://github.com/DITT_REPO/backend-lab-mongodb.git
cd backend-lab-mongodb
```

2. Installera dependencies
```
npm install
```

3. Skapa .env filen
```
MONGO_URL=
PORT=
```

4. Starta servern
```
npm run dev
```

## API-dokumentation
Alla endpoints returnerar JSON.

### GET /api/workexperience
Hämtar alla poster</br>
**Response:** Lista med objekt

### POST /api/workexperience
Skapar en ny post</br>
**Success:** message: Work experience added</br>
**Error:** error: You must fill in (fältnamn)

#### Validering
Alla fält (companyname, jobtitle, location, startdate, description) valideras av Mongoose-schemat. Tomma värden returnerar en 400 Bad Request med ett tydligt felmeddelande.

### PUT /api/workexperience/:id
Uppdaterar en befintlig post baserat på ID</br>
**Success:** message: Work experience updated</br>
**Error:** error: You must fill in (fältnamn)

#### Validering
Samma validering som POST via Mongoose. runValidators är aktiverat så validering körs även vid uppdatering.

### DELETE /api/workexperience/:id
Tar bort en specifik post baserat på ID</br>
**Success:** message: Work experience deleted</br>
**Error:** error: Kunde inte radera posten

## Testning
API:et har testats med:
    - Thunder Client (Tillägg i VScode)
    - Webbläsare
    - MongoDB Compass

Publicerad: LÄNK TILL PUBLICERAD WEBBPLATS

Skapad av: Pontus Johansson
