---

## 🌐 Live Demo

Check out the live version of the dashboard here:  
🔗 [ctrl-b-assignment.vercel.app](https://ctrl-b-assignment.vercel.app/)

---
# 📊 CtrlB Dashboard 

A lightweight, modular **React + Vite** dashboard featuring dynamic tables and charts using `react-chartjs-2`. Built for rapid development and data-driven UIs.

---

## 🚀 Project Overview

**CtrlB Dashboard** is a simple, yet powerful dashboard that visualizes data in tabular and graphical formats. Ideal for admin panels, analytics dashboards, or any use case requiring data interaction.

### 🧩 Key Features
- 📈 **ChartPanel**: Line/Bar chart visualizations powered by `Chart.js`
- 📋 **TablePanel**: Sortable, editable, and interactive data table
- 📄 **Mock Data**: Easily configurable and extendable data source
- ⚡ **Built with Vite**: Lightning-fast dev experience

---

## 🛠️ Getting Started

Follow these steps to run the app locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ctrlb-dashboard.git

# 2. Navigate to the project directory
cd ctrlb-dashboard

# 3. Install dependencies
npm install

# 4. Install charting libraries (if not already installed)
npm install chart.js react-chartjs-2

# 5. Start the development server
npm run dev
````

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ChartPanel.jsx       # Chart.js wrapper using react-chartjs-2
│   ├── TablePanel.jsx       # Interactive table component
├── data/
│   └── mockData.js          # Static mock data used by both components
├── App.jsx                  # Root component rendering Chart + Table
├── main.jsx                 # React DOM entry point
├── index.css                # Global styles
```

---

## 📦 Dependencies

| Package           | Purpose                    |
| ----------------- | -------------------------- |
| `react`           | Frontend UI library        |
| `vite`            | Fast dev server & bundler  |
| `chart.js`        | Chart rendering engine     |
| `react-chartjs-2` | React wrapper for Chart.js |

---

## ⚙️ Technical Highlights

* ✅ Functional Components
* ✅ Clean and modular codebase
* ✅ Fast development using Vite
* 🧪 Uses mock data (easy to switch to API in future)
* ♻️ Reusable UI building blocks

---

## 👨‍💻 Author

Built with ❤️ by **Raghav Gupta**
[LinkedIn](https://www.linkedin.com/in/raghav-gupta2003/) • [GitHub](https://github.com/Raghavgupta2003/CtrlB-Assignment)
---
