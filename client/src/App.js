import React, { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage";
import Transcript from "./components/transcript";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./Video";
import Homepage from "./Homepage";

function App() {
  const [analysisInfo, setAnalysisInfo] = useState(undefined);

  useEffect(() => {
    console.log(analysisInfo);
  }, [analysisInfo]);

  return (
    <ChakraProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/MasseyHacks" element={<Video />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
