import { Box, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TodoIcon from '../../src/assets/images/todoo.png'
import { NavItemsProps } from "../services/types/AllTypes";

const Sidebar = () => {
    const location = useLocation();
    const navList: NavItemsProps[] = [
        // sidebar navigation 
        {
            id: 2,
            name: 'Todo List',
            toPath: '/todo',
            icon: <FormatListBulletedIcon />
        },
    ]

    return (
        <Box className="w-[300px] bg-[#406C86] text-white h-[100vh] max-lg:hidden ">
            <div className="flex justify-start px-3 h-[100px]">
                <img src={TodoIcon} className="" />
            </div>
            {
                navList.map((navItem) => {
                    return (
                        <Link to={navItem.toPath} key={navItem.id} >
                            <Box className={`py-2 px-3 flex gap-3 items-center ${navItem.toPath == location?.pathname && 'bg-gray-400 '}`}>
                                <Box>
                                    {navItem.icon}
                                </Box>
                                <Typography className="!text-[18px]">
                                    {navItem.name}
                                </Typography>
                            </Box>
                        </Link>
                    )
                })
            }

        </Box>
    )
}

export default Sidebar