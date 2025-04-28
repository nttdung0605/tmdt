import React from 'react';
import App from '../App';
import Loading from '../Layouts/Loading/Loading';
import DefaultLayout from '../Pages/Admin/DefaultLayout/DefaultLayout';
import Aboutus from '../Pages/Blog/Aboutus';
import CartUser from '../Pages/Cart/Cart';
import Checkout from '../Pages/Checkout/Checkout';
import Contact from '../Pages/Contact/Contact';
import DefaultPage from '../Pages/DefaultPage/DefaultPage';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import InfoUser from '../Pages/InfoUser/InfoUser';
import LoginUser from '../Pages/Login/LoginUser';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';
import RegisterUser from '../Pages/Register/RegisterUser';
import SuccessfulPaymentPage from '../Pages/SuccessfulPaymentPage/SuccessfulPaymentPage';

export const publicRoutes = [
    { path: '/', element: <App /> },
    { path: '/category', element: <DefaultPage /> },
    { path: '/login', element: <LoginUser /> },
    { path: '/register', element: <RegisterUser /> },
    { path: '/cart', element: <CartUser /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/prodetail/:id', element: <ProductDetail /> },
    { path: '/loading', element: <Loading /> },
    { path: '/info', element: <InfoUser /> },
    { path: '/thanks', element: <SuccessfulPaymentPage /> },
    { path: '/contact', element: <Contact /> },
    { path: '/aboutus', element: <Aboutus /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
];

export const privateRoute = [{ path: '/admin', element: <DefaultLayout /> }];
