import { Box, } from '@mui/material';
import React, { useEffect } from "react";
import CommonLoader from "../common/CommonLoader";
import { useGetLoginUserDetailQuery } from "../services/rtk/authApi/authApiSlice";
import { PrivateLayoutProps } from "../services/types/AllTypes";
import Sidebar from "./Sidebar";
import Header from './Header';
import { useDispatch } from 'react-redux';
import { setUser } from '../services/rtk/userSlice';
import { LoginUserDetail } from '../services/types/AllTypes';

type GetLoginUserDetailQueryResult = LoginUserDetail | undefined;

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
    const dispatch = useDispatch()
    const { data: getLoginUserDetail, isLoading } = useGetLoginUserDetailQuery<GetLoginUserDetailQueryResult>({});

    const authToken = localStorage.getItem("authToken");
    useEffect(() => {
        if (!authToken) {
            window.location.href = "/";
        }
    }, [authToken])


    useEffect(() => {
        if (getLoginUserDetail) {
            dispatch(setUser({
                id: getLoginUserDetail.id,
                username: getLoginUserDetail.username,
                image: getLoginUserDetail.image
            }))
        }

    }, [getLoginUserDetail, dispatch])


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <CommonLoader />
            </div>
        )
    }

    return (
        <>

            <Box className="flex w-full">
                <Sidebar />
                <Box className="w-full">
                    <Header />
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default PrivateLayout;