import React from 'react'
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ErrorPage: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Box className='flex justify-center flex-col items-center h-[100vh]'>
                <Typography variant='h6'>
                    Oops Page Not Found ! 404
                </Typography>
                <Typography onClick={handleBack} variant='h6' className='cursor-pointer' >click to back </Typography>
            </Box>
        </>
    )
}

export default ErrorPage