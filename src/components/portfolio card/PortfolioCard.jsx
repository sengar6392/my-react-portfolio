/* eslint-disable react/prop-types */
import "./portfolioCard.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PortfolioCard = ({ cardData }) => {
  const { title, img, skills } = cardData;
  return (
    <Card sx={{ width: 280, height: 300, position: "relative" }}>
      <CardMedia sx={{ height: 140 }} image={img}  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skills.join(", ")}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: "2px" }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          Demo
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          GitHub
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          More details
        </Button>
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
