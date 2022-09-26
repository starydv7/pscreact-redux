import React from 'react'
import {
    Input,
    flex,
    Button,
    Heading,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const toast = useToast();
    const navigate = useNavigate();

    const [adminForm, setAdminForm] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setAdminForm({ ...adminForm, [e.target.id]: e.target.value });
    };
  
    const handleSignIn = (e) => {
        e.preventDefault();
        if (
            adminForm.email === "admin@gmail.com" &&
            adminForm.password === "masai"
        ) {
            toast({
                title: "Login Successful.",
                description: "You have logged into your account",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
            navigate("/admin");
        }
        else {
            toast({
                title: "login Failed",
                description: "You have enterred wrong ",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            })
        }
    };
    
  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin