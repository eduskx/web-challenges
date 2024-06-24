import "./styles.css";

export default function App() {
  return <Greeting name="Merle" />;
}

function Greeting({ name }) {
  return <p>Hello, {name === "Merle" ? "Coach" : name}!</p>;
}
