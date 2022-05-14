import React, { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage";
import Transcript from "./components/transcript";
import { Box } from "@chakra-ui/react";
const Video = () => {
  const [analysisInfo, setAnalysisInfo] = useState(undefined);

  useEffect(() => {
    console.log(analysisInfo);
  }, [analysisInfo]);
  return (
    <Box bg="#FAF9F9" minHeight="100vh">
      <UploadImage
        setAnalysisInfo={setAnalysisInfo}
        analysisInfo={analysisInfo}
      />
      {analysisInfo && <Transcript analysisInfo={analysisInfo} />}
    </Box>
  );
};

export default Video;
