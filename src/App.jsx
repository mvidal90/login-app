import {AppRouter} from './router/AppRouter';

import AuthProvider from './context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
