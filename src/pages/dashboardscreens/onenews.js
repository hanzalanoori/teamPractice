import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OneNews() {
  const [oneNew, setOneNews] = useState({});
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    setOneNews(location.state);
  }, []);
  return (
    <Box>
      <Box>
        <img src={oneNew.urlToImage} width="100%" />
        <Typography variant="h1">{oneNew.title}</Typography>
        <Typography variant="h3">{oneNew.description}</Typography>
        <Typography variant="h3">{oneNew.publishedAt}</Typography>
        <Typography variant="h3">{oneNew.url}</Typography>
        <Typography variant="h3">{oneNew.content}</Typography>
        <Typography variant="h3">{oneNew.author}</Typography>
      </Box>
    </Box>
  );
}
export default OneNews;
