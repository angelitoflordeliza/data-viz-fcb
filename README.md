# 📈 Twitter Trending Topics

> Live trending topics from the Philippines, visualized in a sleek horizontal bar chart.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)](https://fonts.google.com)

---

## ✨ What It Does

- Fetches live Twitter trends for the **Philippines** (WOEID `23424934`) via [RapidAPI](https://rapidapi.com)
- Renders the top **10 trending topics** as a horizontal bar chart
- Gradient, color-coded bars so each trend stands out
- Clean minimal look: white background, dark-grey text, Poppins font

## 🛠️ Tech Stack

| Layer | Tool |
|-------|------|
| Markup & styling | HTML5 + Bootstrap 5 |
| Data visualization | Chart.js |
| Typography | Poppins (Google Fonts) |
| Data source | Twitter Trends RapidAPI |

## 📁 Project Structure

```
fcb-dataviz/
├── index.html          # Page structure + styles
├── index.js            # Fetch trends + build the chart
├── twittertrendingtopicsfavicon.png   # Favicon / header logo
└── README.md           # You are here
```

## 🚀 Getting Started

```bash
git clone <your-repo-url>
cd fcb-dataviz
# open index.html in your browser, or run a local server:
python -m http.server 8000
# → http://localhost:8000
```

> Tip: opening `index.html` directly via `file://` may trigger CORS on the API request — a local server avoids that.

## 📝 Notes

- Trend volumes are **hardcoded sample numbers** (for visuals only — swap in real API values anytime).
- The RapidAPI key lives client-side. For a production deployment, **proxy the request server-side** to keep the key private.

---

Made with Chart.js, Bootstrap, and too much coffee. ☕
