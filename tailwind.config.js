 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       colors: {
        primary: "#1F2937",   // Deep Blue
        secondary: "#38BDF8", // Teal
        accent: "#F59E0B",    // Amber
        background: "#F9FAFB",// Light Gray
        textMain: "#111827",  // Dark Gray
        textSub: "#6B7280",   // Medium Gray
        success: "#10B981",   // Emerald Green
        error: "#EF4444",     // Red
      },
    },
     
   },
   plugins: [],
 }