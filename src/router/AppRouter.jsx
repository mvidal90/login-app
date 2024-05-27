import {useContext} from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
} from 'react-router-dom';

import {AuthContext} from '../context/AuthContext';
import Login from '../components/Login';

import '../scss/components/_view.scss';
import { Dashboard } from '../components/Dashboard';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <Router>
            <div className="view__container">
                <div className={user ? 'd-flex' : undefined}>
                    <Routes>
                        {user ? (
                            <>
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard/>}
                                />
                                <Route
                                    path="*"
                                    element={<Navigate to="/dashboard" replace />}
                                />
                            </>
                        ) : (
                            <>
                                <Route path="/" element={<Login />} />
                                <Route
                                    path="*"
                                    element={<Navigate to="/" replace />}
                                />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
