import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/fbconfig';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ButtonAlt from '../../components/Button/ButtonAlt';



function Login() {
    const { setAuthed } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <ButtonAlt label='Iniciar sesión' />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Login;
