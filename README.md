# react-flask-tutorial
For learning React &amp; Flask

Frontend is based on create-react-app.

Frontend address - http://localhost:3000

Backend address - http://localhost:5000

## How to Install
1. Backend
```
cd backend
python -m pip install flask flask-cors
```

2. Frontend
```
cd frontend
yarn add package.json
```

## How to start
1. Backend
```
python a.py
```

2. Frontend
```
npm start
```

3. If you want to use Tailwind

First you need to change the content of tailwind.config.js's content such as
```
content: [
  './src/**/*.{html, js}',
],
```

Then type below

```
npm run build:css
```

## Note
This includes the bootstrap and tailwind css. I'm currently using bootstrap directly to the footer. 
