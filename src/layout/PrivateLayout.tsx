import { Box, } from '@mui/material';
import React, { useEffect } from "react";
import CommonLoader from "../common/CommonLoader";
import { useGetLoginUserDetailQuery } from "../services/rtk/authApi/authApiSlice";
import { PrivateLayoutProps } from "../services/types/AllTypes";
import Sidebar from "./Sidebar";





const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
    const { data: getLoginUserDetail, isLoading } = useGetLoginUserDetailQuery({});
    // console.log(getLoginUserDetail, "getLoginUserDetail")

    const authToken = localStorage.getItem("authToken");
    useEffect(() => {
        if (!authToken) {
            window.location.href = "/";
        }
    }, [authToken])

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <CommonLoader />
            </div>
        )
    }

    return (
        <Box className="flex w-full">
            <Sidebar />
            <Box className="w-full">
                {children}
            </Box>
        </Box>
    );
};

export default PrivateLayout;