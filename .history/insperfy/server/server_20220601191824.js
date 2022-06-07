import express from "express";
import cors from "cors";
import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3001;

app.post("/login", async (req, res) => {
    const {code} = req.body.code;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '0ea32e8e66f64e3886bffee1c4075bb1',
        clientSecret: 'b98c1bd65569484abbfbca30bfee0232',
    });

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
});

// app.post("/refresh", async (req, res) => {
//     const {refreshToken} = req.body
//     const spotifyApi = new SpotifyWebApi({
//         redirectUri: process.env.REDIRECT_URI,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken,
//     })
//
//     try {
//         const {
//             body: {access_token, expires_in},
//         } = await spotifyApi.refreshAccessToken()
//         res.json({access_token, expires_in})
//     } catch (err) {
//         console.log(err)
//         res.sendStatus(400)
//     }
// })
//

app.listen(PORT, err => {
    if (err) console.log(err);
    console.log("listening on port", PORT)
})