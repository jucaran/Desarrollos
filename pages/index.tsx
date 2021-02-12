import * as React from "react";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

interface SPAProps {}

const App: React.FC<SPAProps> = ({}) => {
  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <About />

      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Nunito&family=Rubik:wght@300;400&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: "Rubik", "Nunito", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            scroll-behavior: smooth;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }

          a {
            text-decoration: none;
          }

          ul {
            list-style: none;
          }
        `}
      </style>
    </>
  );
};

export default App;
