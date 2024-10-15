export const oktaConfig = {
    clientId: '0oaj0qo8eaJK91o9b5d7',
    issuer: 'https://dev-31694254.okta.com/oauth2/default',
    redirectUri : 'https://localhost:3000/login/callback',
    scopes : ['openid', 'profile', 'email'],
    pkce : true,
    disableHttpsCheck : true,
};