# Getting Started with "Exercise Tracker" app

## To run this app you have to have Node.js and Node Package Manager (npm) installed locally

To install navigate to: https://nodejs.org/

## Before run the application you have MongoDB to be installed

To install navigate to: https://www.mongodb.com/docs/manual/administration/install-community/

## Install dependencies:
Open Terminal-1 in the root directory (task-tracker) and navigate to the ./backend directory ```cd backend```
> Run command ```npm install```

Open Terminal-2 in the root directory (task-tracker)
> Run command ```npm install```

## Running BE
>In Terminal-1 run command 
```
npm run start-be
```

## Running FE
> In Terminal-2 run command 
```
npm run start-fe
```


## Application links:

**FE:** http://localhost:3000/

**Swagger:** http://localhost:5001/api-docs/#/

## Run applicattion on other ports

**BE**
> Navigate to the ./backend directory and execute 
```
//linux
PORT=5005 npm run start-be

//windows git bash terminal
export PORT=5005 && npm run start-be

//windows CMD terminal
set PORT=5005 && npm run start-be
```

**FE** 
> Navigate to the root app directory and execute 
```
//linux
PORT=3006 REACT_APP_BE_PORT=5005 npm run start-fe

//windows git bash terminal
export PORT=3006 && export REACT_APP_BE_PORT=5005 && npm run start-fe

//windows CMD terminal
set PORT=3006 && set REACT_APP_BE_PORT=5005 && npm run start-fe
```

 
