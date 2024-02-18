import React, { ReactNode, } from "react";

export interface NavItemsProps {
    id: number,
    name: string,
    toPath: string,
    icon?: React.ReactElement<unknown>; 
}

export  interface LoginResponse {
    email: string;
    firstname: string;
    lastName: string,
    username: string,
    gender: string;
    id: number;
    token: string;
    image: string
}

export interface RouteConfig {
    name: string;
    path: string;
    component: React.ComponentType<unknown>;
  }

 export interface PrivateLayoutProps {
    children: ReactNode;
}