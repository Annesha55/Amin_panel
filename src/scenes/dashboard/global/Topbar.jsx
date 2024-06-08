import { Box ,IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext , tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


import SearchIcon from '@mui/icons-material/Search';


import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';






const Topbar =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);


    return (<Box display = "flex" justifyContent="space-between" p={2}>

        {/* {SEARCH BAR} */}

        <Box
            display = "flex" background ={colorMode.primary[400]}
            boderRadius="3px">

                <InputBase sx={{ml:2 ,flex: 1 }} placeholder="Search"/>
                <IconButton type = "button" sx={{p:1}}>
                <SearchIcon/>
                </IconButton>



        </Box>
        {/* Icons */}

        <Box display ="flex">

            <IconButton onClick ={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark'?(
                    <DarkModeOutlinedIcon/>
                ):   <LightModeOutlinedIcon/>
                }
              
            </IconButton>
            <SettingsOutlinedIcon/>

            <IconButton>
            </IconButton>

            <IconButton>
            </IconButton>

            <IconButton>
            </IconButton>
        </Box>

     <IconButton sx={{ display: "flex"}}></IconButton> 
    </Box>
    );
}

export default Topbar;