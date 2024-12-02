import data from "./assets/data.json";
import Roland from "./Roland";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Roland value={data} />
    </div>
  );
}

export default App;
