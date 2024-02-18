import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LoginPageIcon from '../../src/assets/icons/LoginIcon.svg'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/rtk/authApi/authApiSlice';
import { LoginResponse } from '../services/types/AllTypes';


const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const authToken = localStorage.getItem('authToken')
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, { isLoading }] = useLoginMutation();
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ username, password }).unwrap().then((res: LoginResponse) => {
            if (res) {
                navigate('/todo')
                localStorage.setItem('authToken', res.token)
            }
        })
    };
    useEffect(() => {
        if (authToken) {
            navigate('/todo')
        }

    }, [authToken, navigate])

    return (
        <Box className='max-w-[1440px] m-auto p-[24px]'>
            <form onSubmit={handleSubmit}>
                <Box className='flex justify-between'>
                    <Box className='w-[37%] max-lg:w-full '>
                        <Typography variant='h4' className='font-normal text-[#468693] mt-12 mb-3'>
                            Sign in
                        </Typography>
                        <Box className='my-6 '>
                            <TextField
                                fullWidth
                                id="username"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={handleUsernameChange}

                            />
                        </Box>
                        <Box className='my-6'>
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}

                            />
                        </Box>
                        <Button
                            disabled={!username || !password}
                            sx={{ background: '#468693', color: 'white' }}
                            type='submit'
                            className='w-full shadow-xl !py-2.5 !text-[17px] !font-[500]'
                        >
                            {
                                isLoading ? <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box> : 'Login'
                            }
                        </Button>
                    </Box>

                    <Box className='w-[50%] max-lg:hidden max-lg:w-full max-lg:h-screen'>
                        <Box className='bg-[#f1fdff] px-4 py-6 rounded-lg'>
                            <Box className='w-full h-[calc(100vh_-_180px)]'>
                                <img src={LoginPageIcon} alt='Login Icon' className='' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default LoginPage;
