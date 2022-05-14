import React, { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage";
import Transcript from "./components/transcript";

function App() {
  const [analysisInfo, setAnalysisInfo] = useState(undefined);

  useEffect(() => {
    console.log(analysisInfo);
  }, [analysisInfo]);

  return (
    <div className="App">
      <UploadImage
        setAnalysisInfo={setAnalysisInfo}
        analysisInfo={analysisInfo}
      />
      {analysisInfo && <Transcript analysisInfo={analysisInfo} />}
    </div>
  );
}

export default App;
