import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

function NEWS() {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  const getNews = () => {
    setLoader(true);
    let api =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=7a57ad8ba2f04079b629547e8c20ef8a";

    axios
      .get(api)
      .then((success) => {
        console.log(success);
        setArticles(success.data.articles);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  const clickToNews = (item) => {
    navigate("/onenews", {
      state: item,
    });
    console.log(item);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <Box>
      <Typography>NEWS</Typography>
      <Box>
        <IconButton
          onClick={() => getNews()}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <RefreshIcon />
        </IconButton>
      </Box>
      {loader ? (
        <Box>
          <img
            src="https://cdn.dribbble.com/users/2197764/screenshots/5898374/loading1.gif"
            width="100%"
          />
        </Box>
      ) : (
        <Box>
          {articles.map((e, i) => (
            <Box
              onClick={() => clickToNews(e)}
              textAlign="left"
              sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}
            >
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <img src={e.urlToImage} width="200px" alt="" />
                <Typography variant="h4">{e.title}</Typography>
              </Box>
              <Typography>{e.description}</Typography>
              <Typography>Published At: {e.publishedAt}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
export default NEWS;
