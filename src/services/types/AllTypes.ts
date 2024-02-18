import React, { ReactNode, } from "react";

export interface NavItemsProps {
    id: number,
    name: string,
    toPath: string,
    icon?: React.ReactElement<unknown>; 
}

export  interface LoginResponse {
  id: number;
    email: string;
    firstname: string;
    lastName: string,
    username: string,
    gender: string;
    token: string;
    image: string
}

export interface RouteConfig {
  id:number
    name: string;
    path: string;
    component: React.ComponentType<unknown>;
  }

 export interface PrivateLayoutProps {
    children: ReactNode;
}

 export interface TodoDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  
  }
  
  export interface TodoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: boolean
  }