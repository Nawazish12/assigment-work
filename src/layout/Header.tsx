import React from 'react'
import { Avatar, Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const Header: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
            <Box className='py-3 bg-[#406C86] text-white cursor-pointer items-center flex gap-2 justify-end px-4'>
                <Avatar className='border border-gray-400' alt={user.username} src={user.image} />
                <Typography variant="body1">{user.username}</Typography>
                <LogoutIcon onClick={handleLogout} />
            </Box>
        </>
    )
}

export default Header