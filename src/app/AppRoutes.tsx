import React from 'react'

import {Navigate, Route, Routes} from 'react-router-dom'
import {Login} from "features/Login/Login";

export const PATH = {
    LOGIN: '/login',
} as const

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>


            {/*<Route element={<PrivateRoutes />}>*/}
            {/*    <Route path={PATH.PROFILE} element={<Profile />} />*/}
            {/*    <Route path={PATH.CARDS} element={<Cards />} />*/}
            {/*    <Route path={PATH.PACKS} element={<Packs />} />*/}
            {/*    <Route path={PATH.LEARN + '/:packId'} element={<Learn />} />*/}
            {/*</Route>*/}

            {/*<Route path={'/*'} element={<ErrorPage />} />*/}
        </Routes>
    );
}

export default AppRoutes