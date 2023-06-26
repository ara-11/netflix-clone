import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// This configuration tells Vite to exclude the 'firebase' module from optimization, allowing it to be imported as a CommonJS module.
	optimizeDeps: {
		exclude: ["firebase"],
	},
});
