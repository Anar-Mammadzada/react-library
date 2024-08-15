export const oktaConfig = {
    clientId: "0oaizb3xfpta4LXSK5d7",
    issuer: "https://dev-31694254.okta.com/oauth2/default",
    redirectUri : "http://localhost:3000/login/callback",
    scopes : ["openid", "profile", "email"],
    pkce : true,
    disableHttpsCheck : true
};