import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import emptyImg from "../media/empty.webp";
const SPCard = ({ src, text }: { src: string; text: string }) => {
  return (
    <Card sx={{ backgroundColor: "#ccc" }}>
      <CardMedia
        sx={{ height: 100, backgroundSize: "contain", marginTop: "20px" }}
        image={src || emptyImg}
        title={text}
      />
      <CardContent
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px !important",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Season: {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SPCard;
