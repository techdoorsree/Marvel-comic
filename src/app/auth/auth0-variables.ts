interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'k7U5RYTArph3Evq6DyI40YEXUHxVDDz3',
  domain: 'marvelcomicapp.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
