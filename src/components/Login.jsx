import {useContext} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';
import {postLogin, setJWT} from '../utils/api';

import '../scss/components/_login.scss';

export default function Login() {
    const {values, handleInputChange} = useForm({userName: '', password: ''});
    const {setUser, logout} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const {user, jwt} = await postLogin(values);
            localStorage.setItem("jwt", jwt)
            const auth = `Bearer ${jwt}`
            setJWT(auth)
            setUser(user);
        } catch (error) {
            logout();
        }
    };

    return (
        <div className="home-container d-flex">
            <Container className="my-3">
                <Row>
                        <Col
                            xs={12}
                            md={{span: 8, offset: 2}}
                            lg={{span: 6, offset: 3}}
                            xl={{span: 4, offset: 4}}>
                            <form
                                className="login-container"
                                onSubmit={handleLogin}>
                                <h2 className="mb-3 color-text-04 login-title">
                                    Inicio de sesión
                                </h2>
                                <h3 className="subtitle-m mb-5">
                                    Te damos la bienvenida
                                </h3>
                                <div>
                                    <label htmlFor="userName">Nombre de usuario</label>
                                    <input type="text" id='userName' name='userName' onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" id='password' name='password' onChange={handleInputChange}/>
                                </div>
                                <button type='submit' className='button__secondary'>Iniciar Sesion</button>
                            </form>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}
