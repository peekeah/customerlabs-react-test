import { useState } from "react";
import "./App.css";
import DrawerComponent from "./components/DrawerComponent";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen justify-center items-center">
      <button
        className="p-2 border-2 border-black bg-yellow-300"
        onClick={() => setOpen(true)}
      >
        Save Segment
      </button>
      {open && <DrawerComponent setOpen={setOpen} />}
    </div>
  );
}

export default App;
