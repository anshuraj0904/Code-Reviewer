import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useState } from "react";

const boilerplates = {
  "javascript": `function add(a, b) {\n  return a + b;\n}`,
  "python": `def add(a, b):\n    return a + b`,
  "java": `public class Main {\n  public static int add(int a, int b) {\n    return a + b;\n  }\n}`,
  "cpp": `int add(int a, int b) {\n  return a + b;\n}`,
  "typescript": `function add(a: number, b: number): number {\n  return a + b;\n}`,
};

const CodeReviewPage = () => {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(boilerplates["javascript"]);
  const [codeReview,setCodeReview] = useState('')


  const getReview = async()=>{
       setCodeReview('') 
       const response = await fetch("http://localhost:3000/api/get_code_review",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({code})
       })
       
      const data = await response.json();
      
      setCodeReview(data)  
  }
  

  return (
    <div className="h-screen w-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#1e1e1e] p-4 relative flex flex-col">
        {/* Language Dropdown */}
        <select
          className="mb-4 w-fit px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
            setCode(boilerplates[e.target.value])
          }
        }
        >
          <option value="javascript">JAVASCRIPT</option>
          <option value="python">PYTHON</option>
          <option value="cpp">C++</option>
          <option value="java">JAVA</option>
          <option value="typescript">TYPESCRIPT</option>
        </select>

        {/* Monaco Editor */}
        <div className="flex-grow">
          <Editor
            height="100%"
            language={lang}
            value={code}            
            onChange={(value) => setCode(value)}
            theme="vs-dark"
          />
        </div>

        {/* Review Button */}
        <div className="absolute bottom-8 left-8">
          <button className="bg-purple-500 hover:bg-purple-600 cursor-pointer text-white font-semibold py-2 px-4 rounded shadow-md flex items-center gap-2"
          onClick={getReview}>
            ✨ Review
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-gray-950 p-6 overflow-y-auto text-white">
        <h2 className="text-xl text-center font-bold mb-4">AI Review</h2>
        <pre className="whitespace-pre-wrap text-gray-300">{codeReview}</pre>        
      </div>
    </div>
  );
};

export default CodeReviewPage;
