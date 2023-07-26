import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));
const Third = () => {
  return (
    <div>
      <Box marginTop={-15.5}>
        <Card sx={{ paddingBottom: 3, marginLeft: 39, width: 650 }}>
          <Box display={"flex"} flexDirection={"row"} padding={2.5}>
            <img
              src="data:image/png;base64,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"
              height={25}
              width={25}
            />
            <Typography marginLeft={1} marginRight={35} alignItems={"baseline"}>
              Mobile UI Designer
            </Typography>
            <Button
              sx={{
                background: "#E9ECF3",
                alignItems: "center",
                width: 151,
                height: 10,
                padding: 3,
              }}
            >
              <Typography color={"#4aa2bd"} textTransform={"none"}>
                Save job&nbsp;
              </Typography>
              <TurnedInIcon sx={{ color: "#4aa2bd" }} />
            </Button>
          </Box>
          <Typography
            fontSize={11}
            color={"dimgrey"}
            marginLeft={7}
            marginTop={-6}
          >
            Line Corporation, LLC
          </Typography>
          <Box marginLeft={4} color={"dimgray"} fontFamily={'sans-serif'}>
            <p>
              A UI designer is a technical role that is responsible for
              presenting a product's
              <br />
              development in a way that is attractive and convenient for users
            </p>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#E9ECF3",
                color: "#000000",
                marginTop: 1,
                marginLeft: 4,
                marginRight: -2,
                padding: 3,
                height: 7,
              }}
            >
              <Typography textTransform={"none"}>Fulltime</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: "#E9ECF3",
                color: "#000000",
                marginTop: 1,
                marginLeft: 4,
                marginRight: -2,
                padding: 3,
                height: 7,
              }}
            >
              <Typography textTransform={"none"}>Design</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: "#E9ECF3",
                color: "#000000",
                marginTop: 1,
                marginLeft: 4,
                padding: 3,
                height: 7,
              }}
            >
              <Typography textTransform={"none"}>Remote</Typography>
            </Button>
          </Box>
          <Divider
            orientation="horizontal"
            sx={{ marginTop: 2, marginLeft: 3, marginRight: 3 }}
          />
          <Box
            display={"flex"}
            marginTop={3}
            alignItems={"baseline"}
            justifyContent={"space-around"}
          >
            <Box display={"flex"}>
              <Typography>
                <AiOutlineDollarCircle color="#4aa2bd" />
                $20K-25K
              </Typography>
              <Typography color={"dimgray"}>/Month</Typography>
            </Box>
            <Box display={"flex"} alignItems={"baseline"}>
              <Diversity3Icon sx={{ color: "#4aa2bd" }} />
              88&nbsp;<Typography color={"dimgray"}>People applied</Typography>
            </Box>{" "}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CB6015",
                borderRadius: 3,
                width: 121,
                height: 40,
              }}
            >
              <Typography textTransform={"none"}>Apply Now</Typography>
            </Button>
          </Box>
        </Card>
        <Card
          sx={{
            marginLeft: 123,
            marginTop: -64,

            display: "flex",
            width: "20.3%",
            height: 171,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={9}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Job Location
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Typography
                    fontSize={9}
                    color={"darkturquoise"}
                    borderRadius={1}
                    textTransform={"none"}
                  >
                    Clear
                  </Typography>
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                columnGap: -1,
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="On site"
                />
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ marginLeft: -4 }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search by location"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ marginLeft: -4, width: 201, borderRadius: 1 }}
                  />
                </Search>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="Remote"
                />
              </FormGroup>
              <Box display={"flex"} flexDirection={"column"} rowGap={3.3}>
                <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
                  255 jobs
                </Typography>
                <Typography fontSize={10} color={"dimgrey"}></Typography>
                <Typography fontSize={10} color={"dimgrey"}>
                  124 jobs
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
        <Card
          sx={{
            marginLeft: 123,
            marginTop: 2,

            display: "flex",
            width: "20.3%",
            height: 171,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={12}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Job Type
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Typography
                    fontSize={9}
                    color={"darkturquoise"}
                    borderRadius={1}
                    textTransform={"none"}
                  >
                    Clear
                  </Typography>
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                columnGap: 7,
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="Full Time"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="Freelance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="Part Time"
                />
              </FormGroup>
              <Box display={"flex"} flexDirection={"column"} rowGap={3.3}>
                <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
                  255 jobs
                </Typography>
                <Typography fontSize={10} color={"dimgrey"}>
                  124 jobs
                </Typography>
                <Typography fontSize={10} color={"dimgrey"}>
                  2404 jobs
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
        <Card
          sx={{
            marginLeft: 123,
            marginTop: 2,

            display: "flex",
            width: "20.5%",
            height: 171,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={11}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Applicants
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Typography
                    fontSize={9}
                    color={"darkturquoise"}
                    borderRadius={1}
                    textTransform={"none"}
                  >
                    Clear
                  </Typography>
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                columnGap: 5,
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="Less than 10"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="10 to 50"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 21,
                          color: "#4aa2bd",
                        },
                      }}
                    />
                  }
                  label="50 to 100"
                />
              </FormGroup>
              <Box display={"flex"} flexDirection={"column"} rowGap={3.3}>
                <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
                  255 jobs
                </Typography>
                <Typography fontSize={10} color={"dimgrey"}>
                  124 jobs
                </Typography>
                <Typography fontSize={10} color={"dimgrey"}>
                  2404 jobs
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default Third;
