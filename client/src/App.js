import React, { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage";
import Transcript from "./components/transcript";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
function App() {
  const [analysisInfo, setAnalysisInfo] = useState(undefined);

  useEffect(() => {
    console.log(analysisInfo);
  }, [analysisInfo]);

  return (
    <ChakraProvider>
      <Navbar />
      <UploadImage
        setAnalysisInfo={setAnalysisInfo}
        analysisInfo={analysisInfo}
      />
      {analysisInfo && <Transcript analysisInfo={analysisInfo} />}
    </ChakraProvider>
  );
}

export default App;
