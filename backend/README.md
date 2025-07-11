# 🔗 LinkShare Backend

This is the backend service for **LinkShare**, a tool that allows you to securely share links and text between your mobile device and laptop — even if they are on different networks.

Built with:
- 🧠 Node.js + Express
- ☁️ MongoDB Atlas
- 🔐 Passcode-based access control

---

## 🚀 API Endpoints

### `POST /send`

Send a new message (link or text).

- **Body Parameters (JSON):**
  ```json
  {
    "content": "Your message here",
    "passcode": "your_passcode",
    "from": "mobile" // or "web", optional
  }
