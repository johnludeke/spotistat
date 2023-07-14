import React from 'react';
import './login.css';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f1873ac026914cb6831c47fc00432b3e&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read";

export default function Login() {
    return (
        <div className="center">
            <a className="login-button" href={AUTH_URL}>
                Login with Spotify
            </a>
        </div>
    )
}