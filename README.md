# TheBestAPIEver 🚗🎉

**TheBestAPIEver** - the best template to start your own API/CDN or whatever you want

## 📋 Project

### ✨ Features

- 🎲 **Random Images**: Returns random images from predefined categories
- 📊 **Statistics Board**: Elegant web interface for usage monitoring
- 🗃️ **MongoDB Database**: Persistent statistics tracking

## 🚀 Installation and Setup

### Requirements
- NPM
- Nodejs
- MongoDB

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/your-username/app.git
cd app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure database**
   - Edit `app/cfg.js` with your own configurations
   ```javascript
   const CONFIG = {
       DOMAIN: "localhost",
       PORT: "3000",
       DB: "your-mongo-thing"
   }
   ```

5. **Run the application**
```bash
npm run dev
```

## 📚 Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 🏠 **GET** `/api`
Base endpoint for API testing.

**Response:**
```
"welcome to the best api ever"
```

---

#### 🚗 **GET** `/v1/cars`
Returns a random image from the "cars" category.

**Response:**
```json
{
  "cars": "http://localhost:3000/storage/cars/1.gif"
}
```

**Usage examples:**
```javascript
// JavaScript/Fetch
fetch('http://localhost:3000/api/v1/cars')
  .then(response => response.json())
  .then(data => console.log(data.cars));

// cURL
curl http://localhost:3000/api/v1/cars
```

---

#### 🎉 **GET** `/v1/fun`
Returns a random image from the "fun" category.

**Response:**
```json
{
  "fun": "http://localhost:3000/storage/fun/3.gif"
}
```

**Usage examples:**
```javascript
// JavaScript/Fetch
fetch('http://localhost:3000/api/v1/fun')
  .then(response => response.json())
  .then(data => console.log(data.fun));

// cURL
curl http://localhost:3000/api/v1/fun
```

---

#### 📊 **GET** `/stats`
Returns detailed statistics about the API usage.

## 🎯 Examples of Use

### 🧡**API Testing/Development**
Perfect for testing integrations and developing applications that require placeholder images.
![Example Usage](public/example.gif)

## 🛠️ Technologies Used

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js
- **Database**: MongoDB

## 📁 Project Structure

```
├── app/
│   ├── backend/           # Backend logic
│   │   ├── routes/        # API endpoints
│   │   ├── database/      # Database connection
│   │   ├── funcs/         # Functions
│   │   └── utils/         # Utilities
│   ├── frontend/          # Frontend logic
│   └── cfg.js            # Configuration
├── public/
│   └── storage/          # Images storage
│       ├── cars/         # Car images
│       └── fun/          # Fun images
└── package.json
```

