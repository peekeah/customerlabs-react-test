import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import "./App.css";
import DrawerComponent from "./components/DrawerComponent";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen justify-center items-center">
    <div className="navbar fixed top-0 left-0 w-screen">
    <div className="text-white text-xl p-5" style={{backgroundColor: '#39aebc'}}>
            <IconButton>
              <ArrowBack style={{ color: "white" }} />
            </IconButton>
            View Audience
          </div>
    </div>
      <button
        className="p-2 border-2 border-black bg-transparent"
        onClick={() => setOpen(true)}
      >
        Save Segment
      </button>
      {open && <DrawerComponent setOpen={setOpen} />}
    </div>
  );
}

export default App;
