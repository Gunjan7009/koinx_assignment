# 📊 Crypto Stats Tracker – Backend System

This project consists of two Node.js servers (`api-server` and `worker-server`) that use MongoDB Atlas and NATS for real-time communication and storage of cryptocurrency statistics from the [CoinGecko API](https://www.coingecko.com/en/api).

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- NATS (Event queue)
- CoinGecko API
- Postman (for testing)

---

## 📁 Folder Structure

crypto-stats/
│
├── api-server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── subscribers/
│ ├── .env
│ ├── index.js
│ └── package.json
│
├── worker-server/│ ├── jobs/
 ├── .env
 ├── index.js
 └── package.json


## 🚀 Functional Overview

### ✅ `api-server`

- Stores real-time stats of **Bitcoin**, **Ethereum**, and **Polygon (Matic)**
- Exposes two REST APIs:
  - `/stats?coin=bitcoin`
  - `/deviation?coin=bitcoin`

### ✅ `worker-server`

- Publishes a NATS event (`crypto.update`) every 15 minutes
- Triggers the API server to store the latest CoinGecko data

---

2. Install NATS CLI and Server
On Windows:
Download from: https://github.com/nats-io/nats-server/releases

Run nats-server.exe from Command Prompt:

bash
Copy
Edit
nats-server -p 4222
3. MongoDB Atlas Setup
Create a cluster at https://cloud.mongodb.com

Whitelist your IP and get the MongoDB connection string

📦 Environment Variables
For both api-server and worker-server, create a .env file:
env
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster007.mongodb.net/crypto
NATS_URL=nats://localhost:4222
PORT=5000   # Only needed in api-server
🔧 Run Locally
1. Start NATS server
bash
Copy
Edit
nats-server -p 4222\
3. Run api-server
bash
Copy
Edit
cd api-server
npm install
npm start
4. Run worker-server
bash
Copy
Edit
cd worker-server
npm install
npm start
🧪 Test the APIs
Use Postman or browser:

➤ GET /stats
http
Copy
Edit
GET http://localhost:5000/stats?coin=bitcoin
➤ GET /deviation
http
Copy
Edit
GET http://localhost:5000/deviation?coin=bitcoin
🌐 Deployment 

✅ Render.com 

Web Service: api-server
https://koinx-assignment-t5r2.onrender.com

Background Worker: worker-server

Use local NATS Server on your system for worker-server and then it can be fetched the data


npm install && npm start
