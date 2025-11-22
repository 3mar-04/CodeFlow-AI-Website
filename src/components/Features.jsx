import React from "react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const Features = () => {
  const featuresList = [
    {
      Title: "AI Code Completion",
      Description:
        "Boost your coding speed with intelligent code suggestions powered by advanced AI algorithms.",
      codeSnippet: `function handleSubmit(){
    // AI suggests next line
    const res = await fetch("/api/complete")
    // AI processed completion
  }`,
      imagePosition: "left",
    },
    {
      Title: "Automated Testing",
      Description:
        "Ensure code quality with automated testing tools that identify bugs and vulnerabilities early in the development process.",
      codeSnippet: `const handleSubmit = async () => {
    // AI suggests next line
    const res = await fetch("/api/test-run")
    // AI validated testing
  }`,
      imagePosition: "right",
    },
    {
      Title: "Start Debugging",
      Description:
        "Quickly identify and fix issues in your code with our powerful debugging tools that streamline the troubleshooting process.",
      codeSnippet: `// start debugging flow
  // AI suggests next step
  debug: await run("/api/debug-start")
  // AI analyzed issues`,
      imagePosition: "left",
    },
  ];
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mbb-16 lg:mb-20 ">
          <h2 className="text-5xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4  sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CodeFlow
            </span>
          </h2>
        </div>
        
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {featuresList.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col  lg:flex-row items-center gap-8 sm:gap-12 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-300" />
                    <div className="relative bg-gray-950/80 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300">
                      {/* IDE InterFace */}
                      <div className="bg-gray-950 rounded-t-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                          <div className="flex items-center sm:space-x-2 space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500 sm:w-3 sm:h-3" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500 sm:w-3 sm:h-3" />
                            <div className="w-2 h-2 rounded-full bg-green-500 sm:w-3 sm:h-3" />
                          </div>
                          <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                            {feature.Title}
                          </span>
                        </div>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background: "rgb(3 6 25)",
                            borderRight: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left ">
                    <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                      {feature.Title}
                    </h3>
                    <p className="text-gray-300  text-xl sm:text-lg leading-relaxed">
                      {feature.Description}
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
