import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
          <Dictionary />
        </header>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="http://github.com/huxrce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erica
        </a>
        , it's open-sourced on{" "}
        <a
          href="https://github.com/huxrce/react-dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://shecodes-react-dictionary-project.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Render
        </a>
      </footer>
    </div>
  );
}
