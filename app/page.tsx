"use client";
import App from "./App";
import Index from "./pages/Index"; // if Index.tsx is inside `app/pages/`

export default function HomePage() {
  return (
    <App>
      <Index />
    </App>
  );
}
