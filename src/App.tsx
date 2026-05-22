import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import CategoryIndex from "./pages/Dashboard/category/CategoryIndex";
import CategoryCreate from "./pages/Dashboard/category/CategoryCreate";
import EventIndex from "./pages/Dashboard/event/EventIndex";
import BiodataIndex from "./pages/Dashboard/biodata/BiodataIndex";
import BiodataCreate from "./pages/Dashboard/biodata/BiodataCreate";
import BiodataEdit from "./pages/Dashboard/biodata/BiodataEdit";
import SpeakerIndex from "./pages/Dashboard/speaker/SpeakerIndex";
import SpeakerCreate from "./pages/Dashboard/speaker/SpeakerCreate";
import SpeakerEdit from "./pages/Dashboard/speaker/SpeakerEdit";
import CategoryEdit from "./pages/Dashboard/category/CategoryEdit";
import EventCreate from "./pages/Dashboard/event/EventCreate";
import EventEdit from "./pages/Dashboard/event/EventEdit";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* MAIN */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/competition" element={<Competition />} />
                    <Route path="/seminar" element={<Seminar />} />
                    <Route path="/talkshow" element={<Talkshow />} />
                    <Route path="/workshop" element={<Workshop />} />
                </Route>

                {/* AUTH */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>

                {/* DASHBOARD */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<DashboardLayout />}>

                        <Route
                            path="/dashboard"
                            element={<DashboardIndex />}
                        />

                        <Route
                            path="/dashboard/category"
                            element={<CategoryIndex />}
                        />

                        <Route
                            path="/dashboard/category/create"
                            element={<CategoryCreate />}
                        />

                        <Route
                            path="/dashboard/event"
                            element={<EventIndex />}
                        />

                        <Route
                            path="/dashboard/biodata"
                            element={<BiodataIndex />}
                        />

                        <Route
                            path="/dashboard/speaker"
                            element={<SpeakerIndex />}
                        />
                        <Route
                            path="/dashboard/category/edit/:id"
                            element={<CategoryEdit />}
                        />
                        <Route
                            path="/dashboard/event/create"
                            element={<EventCreate />}
                        />

                        <Route
                            path="/dashboard/event/edit/:id"
                            element={<EventEdit />}
                        />
                        <Route
                            path="/dashboard/speaker/create"
                            element={<SpeakerCreate />}
                        />

                        <Route
                            path="/dashboard/speaker/edit/:id"
                            element={<SpeakerEdit />}
                        />
                        <Route
                            path="/dashboard/biodata/create"
                            element={<BiodataCreate />}
                        />

                        <Route
                            path="/dashboard/biodata/edit/:id"
                            element={<BiodataEdit />}
                        />

                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;