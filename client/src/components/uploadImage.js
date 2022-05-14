import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const UploadImage = ({ setAnalysisInfo, analysisInfo }) => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleAnalyze = async (path) => {
    setLoadingMessage("Analyzing Video");
    // Fetch the analysis
    let response = await fetch("http://localhost:5000/assemblyAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: path }),
    });
    let json = await response.json();
    setAnalysisInfo(json);
    setLoading(false);
  };

  const handleYoutubeLink = async () => {
    let response;
    let json;

    setLoadingMessage("Uploading Video");
    setLoading(true);

    //Post email and password to back end and get authenticated
    response = await fetch("http://localhost:5000/upload/youtube", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link,
      }),
    });

    json = await response.json();
    console.log(json.message);
    handleAnalyze(json.message);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    let response;
    let json;

    setLoadingMessage("Uploading Video");
    setLoading(true);

    let file = e.target.files[0];
    console.log(e.target.files[0]);
    const formData = new FormData();

    formData.append("file", file);
    formData.append("filename", "attachment");

    response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    json = await response.json();
    console.log(json.message);
    handleAnalyze(json.message);
  };

  return (
    <Container maxW={"container.md"} mt="10" p="4" centerContent={"true"}>
      <VStack spacing="25px">
        <Heading size="2xl">Video Sum</Heading>
        <Text>Connect your video/lecture via link or file upload</Text>
        <Box bg="blue.100" borderRadius={"md"} p="8">
          <VStack spacing="25px">
            {!loading && (
              <>
                <Text>Video Link</Text>
                <Input
                  bg="white"
                  className="input-link"
                  type="text"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
                {!link && (
                  <Box>
                    <Text>Select File</Text>
                    <input
                      className="no-display"
                      id="file-upload"
                      type="file"
                      accept=".mp4"
                      onChange={(e) => handleFileUpload(e)}
                    />
                  </Box>
                )}
                {link && (
                  <>
                    <Button
                      bg="green.100"
                      className="choose-file-button"
                      onClick={handleYoutubeLink}
                    >
                      Analyze
                    </Button>
                  </>
                )}
              </>
            )}
            {loading && (
              <div>
                <label className="loading-message">{loadingMessage}</label>
              </div>
            )}
          </VStack>
        </Box>

        {analysisInfo && <div className="down-arrow"></div>}
      </VStack>
    </Container>
  );
};

export default UploadImage;
