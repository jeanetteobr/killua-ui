import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/theme";
import { DocsLayout } from "@/docs/layouts";
import { ThemeToggle } from "@/docs/components";
import { 
  GettingStarted, 
  ButtonDocs, 
  HeadingDocs,
  TextDocs,
  TokensDocs,
  ComingSoon 
} from "@/docs/pages";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemeToggle />
        <Routes>
          {/* Redirect root to docs */}
          <Route path="/" element={<Navigate to="/docs" replace />} />
          
          {/* Docs routes */}
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<GettingStarted />} />
            
            {/* Component docs */}
            <Route path="components/button" element={<ButtonDocs />} />
            <Route path="components/heading" element={<HeadingDocs />} />
            <Route path="components/text" element={<TextDocs />} />
            
            {/* Tokens docs */}
            <Route path="tokens" element={<TokensDocs />} />
            
            {/* Coming soon pages for components not yet documented */}
            <Route path="components/:component" element={<ComingSoon />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
