import React, { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage";
import Transcript from "./components/transcript";
const Video = () => {
  const [analysisInfo, setAnalysisInfo] = useState(undefined);

  useEffect(() => {
    console.log(analysisInfo);
  }, [analysisInfo]);
  return (
    <>
      <UploadImage
        setAnalysisInfo={setAnalysisInfo}
        analysisInfo={analysisInfo}
      />
      {analysisInfo && <Transcript analysisInfo={analysisInfo} />}
    </>
  );
};

export default Video;
