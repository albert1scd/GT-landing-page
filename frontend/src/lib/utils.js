echo 'export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}' > src/lib/utils.js

# Create/update index.css
echo '@tailwind base;
@tailwind components;
@tailwind utilities;' > src/index.css

# Create/update main.jsx
echo 'import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)' > src/main.jsx