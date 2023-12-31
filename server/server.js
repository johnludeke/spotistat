const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOT_REDIRECT_URI,
        clientId: process.env.SPOT_CLIENT_ID,
        clientSecret: process.env.SPOT_CLIENT_SECRET,
        refreshToken
    });

    spotifyApi.refreshAccessToken().then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        });
    }).catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOT_REDIRECT_URI,
        clientId: process.env.SPOT_CLIENT_ID,
        clientSecret: process.env.SPOT_CLIENT_SECRET
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    }).catch(() => {
        res.sendStatus(400);
    });
});

app.listen(3001);
