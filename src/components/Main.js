import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, hexToRgb } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#E9ECF3",
  "&:hover": {
    backgroundColor: "#E9ECF3",
  },
  marginLeft: 0,
  width: "10%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "70%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Main = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{ backgroundColor: "#E9ECF3" }}
      >
        <Card
          sx={{
            marginTop: 10,
            marginLeft: 4,
            width: "15.5%",
            height: "21%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
          }}
        >
          <img
            height="70"
            width={"60"}
            src="data:image/jpeg;base64,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"
          />
          <br />
          <Typography textAlign={"center"}>Andre Salmanan</Typography>
          <Typography color={"grey"} fontSize={11} textAlign={"center"}>
            UI Designer
          </Typography>
          <br />
          <br />
          <Button sx={{ textTransform: "none", width: 111 }}>
            Edit Profile
          </Button>
        </Card>

        <Card
          sx={{
            marginTop: 10,
            marginLeft: 2,
            width: "53%",
            height: 150,
            paddingTop: 1,
            paddingLeft: 2,
          }}
        >
          <Typography fontWeight={"Bold"} marginLeft={1}>
            Search Job
          </Typography>
          <Box display={"flex"}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="UI Designer"
                inputProps={{ "aria-label": "search" }}
                sx={{ paddingTop: 1, color: "#000000", paddingLeft: 1 }}
              />
            </Search>
            <FormControl
              sx={{ width: 150, marginLeft: 2, background: "#E9ECF3" }}
            >
              <InputLabel id="demo-simple-select-label">Newest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Newest"
                placeholder="Newest"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <Button
            sx={{
              backgroundColor: "#E6F9FF",
              width: "91%",
              height: 31,
              marginLeft: 1,
            }}
          >
            55 Jobs found
          </Button>
        </Card>
        <Card
          sx={{
            marginLeft: 3,
            marginTop: 10,
            marginRight: 2,
            height: 51,
            display: "flex",
            borderRadius: 1,
            width: 264
          }}
        >
          <Typography
            marginTop={1}
            color={"#000000"}
            fontSize={21}
            paddingLeft={3}
            sx={{ width: 160 }}
          >
            Job Filter
          </Typography>
          <Button>
            <Typography
              textTransform={"none"}
              paddingRight={1}
              fontSize={10}
              paddingTop={0.1}
            >
              Clear&nbsp;All
            </Typography>
          </Button>
        </Card>
      </Box>
    </div>
  );
};

export default Main;
