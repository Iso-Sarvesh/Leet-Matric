# 📊 LeetMetric – Your LeetCode Progress Visualized

LeetMetric is a sleek, responsive web application that fetches and visualizes your **LeetCode statistics** using clean circular progress charts. Just enter your LeetCode username and track your **Easy**, **Medium**, and **Hard** problem-solving journey — all in real-time!

---

## 🎯 Why LeetMetric?

We all solve problems. But how often do we visualize our own journey?

**LeetMetric** helps you:
- 👁️ Instantly see how many questions you've solved by difficulty
- 🟢 Get visual feedback with animated circular progress charts
- 📈 Stay motivated by tracking your improvements
- 🚀 Impress recruiters and friends with your coding stats

---

## 🧩 Key Features

✅ Real-time data fetching from [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/)  
✅ Validates username input using RegEx  
✅ Error handling for invalid or blank usernames  
✅ Clean UI with progress rings for:
   - 🟢 Easy
   - 🟠 Medium
   - 🔴 Hard  
✅ Fully responsive & beginner-friendly design

---

## 📸 Demo

> *Add a screen recording or screenshot here*  
> Example:  
> ![LeetMetric Preview](./assets/demo.gif)

---

## 🚀 How It Works

1. **Enter** your LeetCode username
2. App fetches your data using:
   ```bash
   https://leetcode-stats-api.herokuapp.com/<your-username>
