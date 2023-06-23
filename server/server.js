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
        redirectUri: "http://localhost:3000",
        clientId: "f1873ac026914cb6831c47fc00432b3e",
        clientSecret: "d48679c7e5b54de09d997515538f7913",
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
        redirectUri: "http://localhost:3000",
        clientId: "f1873ac026914cb6831c47fc00432b3e",
        clientSecret: "d48679c7e5b54de09d997515538f7913"
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