# 📌 PrimeSieveAPI  
**An efficient Prime Number API using the Sieve of Eratosthenes and MongoDB caching** 🚀  

---

## 🔹 Features  
✅ Fast prime number generation using **Sieve of Eratosthenes**  
✅ **MongoDB caching** for frequently requested values  
✅ Simple **REST API** with **GET /api/primes/:N**  
✅ Built with **Node.js, Express, and MongoDB**  

---

## 🔹 Sieve of Eratosthenes Algorithm

The **Sieve of Eratosthenes** is an ancient algorithm used to find all prime numbers up to a given limit. It works by iteratively marking the multiples of each prime number starting from 2. The numbers which remain unmarked are primes.

### How It Works:
1. Start with a list of numbers from 2 to `N` (the limit).
2. Starting from 2, mark all of its multiples as non-prime.
3. Move to the next unmarked number (it will be a prime), and mark all of its multiples as non-prime.
4. Repeat this process until you've processed all numbers up to `N`.
5. The remaining unmarked numbers are primes.

---

### 🧐 Sneak Peek 1: The First Few Steps
![image](https://github.com/user-attachments/assets/63054ea0-1325-49f2-aebe-21b427af1aa9)
![image](https://github.com/user-attachments/assets/89e57dcc-252a-49b6-8402-f0935791f76f)


For `N = 20`:

1. List numbers from 2 to 20:  
   `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]`
   
2. Mark multiples of 2:  
   `[2, 3, X, 5, X, 7, X, 9, X, 11, X, 13, X, 15, X, 17, X, 19, X]`

3. Mark multiples of 3:  
   `[2, 3, X, 5, X, 7, X, 9, X, 11, X, 13, X, 15, X, 17, X, 19, X]`

4. Continue marking multiples of each unmarked number.

---

### 🧐 Sneak Peek 2: Final Prime Numbers

After applying the algorithm, the unmarked numbers up to 20 are:
![image](https://github.com/user-attachments/assets/c8e30a58-091d-48eb-b7c1-dc86765981d8)

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/PrimeSieveAPI.git
cd PrimeSieveAPI
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Set Up Environment Variables
```sh
MONGO_URI=mongodb://localhost:27017/primeDB
PORT=5000
```
### 4️⃣ Start the Server
```sh
npm run dev
```

---
## 🔹 API Endpoints
### 📌 Get Prime Numbers
```sh
GET /api/primes/:N
```
### 📥 Request:
#### Replace :N with any number (e.g., /api/primes/20).
### 📤 Response:
```sh
{
  "primes": [2, 3, 5, 7, 11, 13, 17, 19]
}
```
---
## 🔹 Project Structure
```sh
PrimeSieveAPI/
│── src/
│   │── models/          # MongoDB Model
│   │── routes/          # API Routes
│   │── controllers/     # API Logic
│   │── db/              # Database Connection
│   │── app.js           # Express App
│── server.js            # Server Entry Point
│── .env                 # Environment Variables
│── package.json         # Dependencies
│── README.md            # Project Documentation
```
---
## 🔹 Technologies Used  
🚀 **Node.js** – Backend framework  
🚀 **Express.js** – API routing  
🚀 **MongoDB** – Caching for performance  
🚀 **Mongoose** – Database ORM  
🚀 **Nodemon** – Development utility  

---

## 🔹 Contributing  
🔹 Fork the repo  
🔹 Create a new branch (`git checkout -b feature-name`)  
🔹 Commit changes (`git commit -m "Added new feature"`)  
🔹 Push to branch (`git push origin feature-name`)  
🔹 Open a **Pull Request** 🚀  

---

## 🔹 License  
📜 **MIT License** – Free to use & modify.  
---
