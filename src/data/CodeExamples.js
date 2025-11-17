export const codeExamples = {
  "App.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
import CodeEditor from "./CodeEditor";

function App() {
  const [code, setCode] = useState("function hello() { return 'Welcome to App.jsx'; }");

  const handleAICompletion = async () => {
    try {
      const betterCode = await CodeFlow.complete(code);
      setCode(betterCode);
    } catch (err) {
      console.error("AI Error in App.jsx:", err);
    }
  };

  return (
    <div className="app">
      <CodeEditor 
        value={code}
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}

export default App;
`,

  "Hero.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
import CodeEditor from "./CodeEditor";

function Hero() {
  const [code, setCode] = useState("const heroMessage = 'CodeFlow powers your ideas.';");

  const handleAICompletion = async () => {
    try {
      const improved = await CodeFlow.complete(code);
      setCode(improved);
    } catch (err) {
      console.error("AI Error in Hero.jsx:", err);
    }
  };

  return (
    <div className="hero">
      <CodeEditor 
        value={code}
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}

export default Hero;
`,

  "Navbar.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
import CodeEditor from "./CodeEditor";

function Navbar() {
  const [code, setCode] = useState("const nav = ['Home', 'Docs', 'AI Tools'];");

  const handleAICompletion = async () => {
    try {
      const enhanced = await CodeFlow.complete(code);
      setCode(enhanced);
    } catch (err) {
      console.error("AI Error in Navbar.jsx:", err);
    }
  };

  return (
    <div className="navbar">
      <CodeEditor 
        value={code}
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}

export default Navbar;
`,
};


export const floatingCards ={
"App.jsx" :{
  bgColor : "bg-blue-500/20",
  iconColor : "text-blue-400",
  textColor : "text-blue-200",
  contentColor : "text-blue-300",
  icon : "AI"  , 
  title : "Smart Completion" ,
  content : "AI Powered code suggestions i real-time ",
} , 
"Hero.jsx" :{
  bgColor : "bg-purple-500/20",
  iconColor : "text-purple-400",
  textColor : "text-purple-200",
  contentColor : "text-purple-300",
  icon : "⚡"  , 
  title : "Aito Animations" ,
  content : "Dynamic typing effects generated automatically ",
} , 
"Navbar.jsx" :{
  bgColor : "bg-emerald-500/20",
  iconColor : "text-emerald-400",
  textColor : "text-emerald-200",
  contentColor : "text-emerald-300",
  icon : "🔍"  , 
  title : "Smart Search" ,
  content : "Intelligent code search across your project ",
} , 
}