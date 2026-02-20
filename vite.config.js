import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/gotcha-portfolio/",
    plugins: [react()],
});
