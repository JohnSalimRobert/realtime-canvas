# Collaborative Rectangle Drawing App 🎨

A real-time collaborative canvas where users can create, move, and sync rectangles across multiple devices using [React](https://reactjs.org/), [Konva.js](https://konvajs.org/), and [Socket.IO](https://socket.io/). Designed for fast prototyping, teaching, or simply experimenting with live drawing collaboration.

---

## 🚀 Features

- 🎯 Click to add rectangles to the canvas
- 🖱 Drag rectangles to reposition
- 📡 Real-time updates across connected clients
- ⚡️ Built with React, Zustand, Konva, and Socket.IO
- 🧠 Clean and minimal code structure

---

## 🛠 Tech Stack

- **Frontend:** React + TypeScript + Zustand + Konva
- **Backend:** Node.js + Express + Socket.IO

---

## 🧑‍💻 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/JohnSalimRobert/realtime-canvas.git
cd realtime-canvas-app
```
## 2. Install Dependencies
Install both frontend and backend dependencies:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

## 3. Run the App
Start both frontend and backend in separate terminals.


```bash
# Start backend server (port 3001)
cd server
npm run dev

# Start frontend (port 5173)
cd ../client
npm run dev
```

### 4. Test in Multiple Tabs or Devices

To test real-time syncing:

- Open `http://{your-IP-address}:5173` in **multiple browser tabs** on your machine.
- To test across **different devices on the same network** (like your phone or another laptop):

  1. Find your local IP address:
     ```bash
     ipconfig   # on Windows
     ifconfig   # on macOS/Linux
     ```

  2. Add your local IP address to a `.env` file in the frontend root:
     ```env
     VITE_SOCKET_URL=http://192.168.1.100:3001
     ```

  3. Access it in your frontend code:
     ```tsx
     const socket = io(import.meta.env.VITE_SOCKET_URL);
     ```

  4. Run the frontend with:
     ```bash
     npm run dev
     ```

  5. On other devices (e.g., your phone), open:
     ```
     http://192.168.1.100:5173
     ```

✅ Make sure:
- All devices are on the **same Wi-Fi network**.
- Your system's **firewall allows connections** on ports `3001` (backend) and `5173` (frontend).

