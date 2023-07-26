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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const Second = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Card
          sx={{
            marginLeft: 4,
            marginTop: 2,
            marginRight: 3,
            display: "flex",
            width: "21.3%",
            height: 121,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={7}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Work Experience
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Box
                    height={11}
                    width={11}
                    backgroundColor={"darkturquoise"}
                    borderRadius={1}
                  ></Box>
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                columnGap: 2,
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJr0BQ4rhaZMqTebLXhdjlqOInwJ2Tl_JijDAJo1OQtTOegBt8s8j2HQ3nUq5s4Q7fbAES82eHdM&usqp=CAU&ec=48665698"
                height={25}
                width={25}
              />
              <Typography fontWeight={"Bold"} fontSize={11} flexGrow={0.6}>
                Junior UI Designer
              </Typography>
              <Typography fontSize={9} color={"dimgrey"}>
                2 mos
              </Typography>
            </Box>
            <Typography
              color={"dimgrey"}
              fontSize={8}
              marginLeft={8}
              marginTop={-1}
            >
              AirBnb, Inc - Fulltime
            </Typography>
            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                columnGap: 2,
              }}
            >
              <img
                src="data:image/png;base64,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"
                height={25}
                width={25}
              />
              <Typography fontWeight={"Bold"} fontSize={11} flexGrow={0.6}>
                Intern UI Designer
              </Typography>
              <Typography fontSize={9} color={"dimgrey"}>
                2 mos
              </Typography>
            </Box>
            <Typography
              color={"dimgrey"}
              fontSize={8}
              marginLeft={8}
              marginTop={-1}
            >
              Line Corporation - Intern
            </Typography>
          </Stack>
        </Card>
        <Box marginTop={-13}>
          <Card sx={{ paddingBottom: 3, marginLeft: -1 }}>
            <Box display={"flex"} flexDirection={"row"} padding={2.5}>
              <img
                src="data:image/png;base64,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"
                height={35}
                width={45}
              />
              <Typography
                marginLeft={1}
                marginRight={30}
                alignItems={"baseline"}
              >
                Junior UI/UX Designer
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
                <Typography color={'#4aa2bd'} textTransform={"none"}>Save job&nbsp;</Typography>
                <TurnedInIcon sx={{color: '#4aa2bd'}}/>
              </Button>
            </Box>
            <Typography
              fontSize={11}
              color={"dimgrey"}
              marginLeft={9.5}
              marginTop={-6}
            >
              Slack technology, LLC
            </Typography>
            <Box marginLeft={4} color={"dimgray"} fontFamily={'sans-serif'}>
              <p>
                We are looking for a talented designer to help us create
                beautiful and functional
                <br />
                interfaces for our company. Your role require you to understand
                users very well.
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
            <Divider orientation="horizontal" sx={{marginTop: 2, marginLeft:3, marginRight: 3}}/>
           <Box display={'flex'} marginTop={3} alignItems={'baseline'} justifyContent={'space-around'}>
          <Box display={'flex'}>     
          <Typography ><AiOutlineDollarCircle color="#4aa2bd" />$12K-14K</Typography><Typography color={'dimgray'}>/Month</Typography>
          </Box>
          <Box display={'flex'} alignItems={'baseline'}>
          <Diversity3Icon sx={{color:"#4aa2bd"}}/>
          55&nbsp;<Typography color={'dimgray'}>People applied</Typography></Box> <Button variant="contained" sx={{backgroundColor: '#CB6015', borderRadius: 3, width: 150, height:40}}><Typography textTransform={'none'}>Apply Now</Typography></Button>
          </Box>

          </Card>
          
        </Box>
        <Card
          sx={{
            marginLeft: 2.5,
            marginTop: -27,
          
            display: "flex",
            width: "20.3%",
            height: 171,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={5}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Experience Level
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Typography
                    fontSize={9}
                    color={"darkturquoise"}
                    borderRadius={1}
                    textTransform={'none'}
                  >Clear</Typography>
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
  <FormControlLabel control={<Checkbox defaultChecked   sx={{ '& .MuiSvgIcon-root': { fontSize: 21, color: '#4aa2bd' } }} />} label="Entry Level" />
  <FormControlLabel control={<Checkbox   sx={{ '& .MuiSvgIcon-root': { fontSize: 21, color: '#4aa2bd' } }}/>} label="Intermediate" />
  <FormControlLabel control={<Checkbox   sx={{ '& .MuiSvgIcon-root': { fontSize: 21, color: '#4aa2bd' } }}/>} label="Expert" />
</FormGroup>
              <Box display={'flex'} flexDirection={'column'} rowGap={3.3}>
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
      <Card
          sx={{
            marginLeft: 4,
            marginTop: -4,
          
            display: "flex",
            width: "21.3%",
            height: 171,
          }}
        >
          <Stack display={"flex"} flexDirection={"column"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              columnGap={13}
              alignItems="baseline"
            >
              <Typography
                marginTop={1}
                color={"#CB6015"}
                fontSize={15}
                paddingLeft={3}
              >
                Top Skills
              </Typography>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
                <Button>
                  <Box
                    height={11}
                    width={11}
                    backgroundColor={"darkturquoise"}
                    borderRadius={1}
                  ></Box>
                </Button>
              </Box>
            </Stack>

            <Box
              sx={{
                paddingLeft: 3,
                paddingTop: 1,
                borderRadius: 50,
                display: "flex",
                flexDirection: 'column',
                columnGap: 5,
              }}
            >
              <Box display={'flex'} alignItems={'baseline'} columnGap={1}>
              <Box sx={{ marginTop: 1, borderRadius: 10 }}>
               
                  <Box
                    height={5}
                    width={5}
                    backgroundColor={"darkturquoise"}
                    borderRadius={1}
                  ></Box>
              
              </Box>
            <Typography fontSize={11} fontWeight={'Bold'} flexGrow={0.9}>UI Design</Typography>
            <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
                1-2 years
              </Typography>
              </Box>
              <Box display={'flex'} alignItems={'baseline'} columnGap={1}>
              <Box
                    height={5}
                    width={5}
                    backgroundColor={"darkturquoise"}
                    borderRadius={1}
                  ></Box>
            <Typography fontSize={11} fontWeight={'Bold'} flexGrow={0.9}>UX Design</Typography>
            <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
            1-2 years
              </Typography>
              </Box>
              <Box display={'flex'} alignItems={'baseline'} columnGap={1}>
              <Box
                    height={5}
                    width={5}
                    backgroundColor={"darkturquoise"}
                    borderRadius={1}
                  ></Box>
            <Typography fontSize={11} fontWeight={'Bold'} flexGrow={0.9}>UX Research</Typography>
            <Typography fontSize={10} color={"dimgrey"} marginTop={1.5}>
            1-2 years
              </Typography>
              </Box>
            </Box>
           </Stack>
        </Card>
    </div>
  );
};

export default Second;
