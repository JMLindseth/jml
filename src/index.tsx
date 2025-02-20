import React from "react";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<AppRouter />);
