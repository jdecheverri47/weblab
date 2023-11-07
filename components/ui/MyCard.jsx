import Image from "next/image";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

function MyCard(props) {
  return (
    <Card
      sx={{
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        maxWidth: "700px",
        borderColor: "#30124F",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderColor: "#D940C0",
        },
      }}
    >
      <CardCover>
        <Image
          width={props.iWidth}
          height={props.iHeight}
          src={props.backgroundImage}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h4" textColor="#fff" component="h2" fontFamily="GT Walsheim Trial">
          {props.title}
        </Typography>
        <Typography textColor="neutral.300">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
