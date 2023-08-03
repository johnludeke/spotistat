import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f1873ac026914cb6831c47fc00432b3e&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read";

export default function Login() {
    return (
        <div className="bg-spotify-background flex justify-center items-center h-screen">
            <a className="font-sans text-lg font-bold bg-spotify-green hover:bg-green-700 px-7 py-4 rounded-lg text-white transition-all shadow-lg" href={AUTH_URL}>
                Login with Spotify
            </a>
        </div>
    )
}