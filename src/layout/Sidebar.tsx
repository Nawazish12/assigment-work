import { Box, Typography } from "@mui/material"
import { Link, useNavigate, useLocation } from "react-router-dom"
import GroupIcon from '@mui/icons-material/Group';
import TodoIcon from '../../src/assets/images/taskIcon.png'
import { NavItemsProps } from "../services/types/AllTypes";



const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const navList: NavItemsProps[] = [
        {
            id: 2,
            name: 'Todo',
            toPath: '/todo',
            icon: <GroupIcon />

        },
    ]

    const logoUt = () => {
        localStorage.clear()
        navigate('/')

    }

    return (
        <Box className="w-[300px] bg-[#406C86] text-white h-[100vh] py-6">
            <img src={TodoIcon} className="w-full h-[100px]" />
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
            <Box className='flex items-end '>

                <Typography variant="h6" onClick={logoUt}>Logout</Typography>
            </Box>
        </Box>
    )
}

export default Sidebar