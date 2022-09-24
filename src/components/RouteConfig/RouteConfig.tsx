import React from "react"
import { Routes, Route } from "react-router-dom";
import { BaseLayout } from '../Layout/BaseLayout';
import NavBar from '../NavBar/NavBar';
import { PrimeReactSample } from '../../pages/PrimeReactSample/PrimeReactSample';
import { TutorDashboard } from '../../pages/Dashboard/TutorDashboard';
import { TuteeDashboard } from '../../pages/Dashboard/TuteeDashboard';
import { LoginDashboard } from '../../pages/Dashboard/LoginDashboard';

import { ManageSessions } from '../../pages/ManageSessions/ManageSessions';
import { AccountManagement } from '../../pages/AccountManagement/AccountManagement';
import { TuitionBooking } from '../../pages/TuitionBooking/TuitionBooking';
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";

const RouteConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout authenticated={false}/>}>
                <Route path="library" element={<PrimeReactSample />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/dashboard" element={<BaseLayout authenticated={true}/>}>
                <Route path="tutor" element={<TutorDashboard />} />
                <Route path="student" element={<TuteeDashboard />} />
                <Route path="manage-session" element={<ManageSessions />} />
                <Route path="manage-account" element={<AccountManagement />} />
                <Route path="tuition-booking" element={<TuitionBooking />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/account" element={<LoginDashboard />} />
        </Routes>
    )
}
export default RouteConfig