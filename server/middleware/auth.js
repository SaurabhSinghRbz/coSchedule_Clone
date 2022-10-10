const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: '163668554798-kj3hs724j1oine0fu68llon2alo3o152.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/calender",
    passReqToCallback: true,
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});