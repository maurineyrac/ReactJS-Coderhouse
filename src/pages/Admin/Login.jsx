import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/fbconfig';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ButtonE from '@/components/Button/ButtonE';



function Login() {
    const { setAuthed } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    console.log('auth', password)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setAuthed(true);
            navigate('/admin');
        } catch (error) {
            console.error(error);
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <ButtonE className={'m-auto Custombutton2'} label={'Iniciar Sesion'}/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Login;
