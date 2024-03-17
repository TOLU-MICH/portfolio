import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#3e4148",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#a1c568",
  },
}));

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#3e4148",
        }}
        size={90}
        thickness={2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        {...props}
        size={90}
        sx={{
          color: "#a1c568",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        thickness={2}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          className="!text-white !text-xl"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function SkillProgress({ data, linear = false }) {
  {
    return linear == false
      ? data.map((item, index) => (
          <div
            className="pt-[30px] pb-[30px] max-w-[calc(50%-30px)] w-2/4 m-auto"
            key={index}
          >
            <CircularProgressWithLabel value={item.percent} />
            <p className="text-base text-white mb-[10px]">{item.text}</p>
          </div>
        ))
      : data.map((item, index) => (
          <div className="pt-[30px]">
            <p className="text-base text-white mb-[10px]">{item.text}</p>

            <BorderLinearProgress variant="determinate" value={item.percent} />
          </div>
        ));
  }
}
