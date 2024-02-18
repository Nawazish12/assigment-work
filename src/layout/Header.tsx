import React from 'react'
import { Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"

const Header: React.FC = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
            <Box onClick={handleLogout} className='py-3 bg-[#406C86] text-white cursor-pointer flex gap-2 justify-end px-4'>
                <Typography>
                    Logout
                </Typography>
                <LogoutIcon />

            </Box>
        </>
    )
}

export default Header