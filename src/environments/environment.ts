// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  marvelPublicKey: '84a2868b9662aba782ecadc0899b1c96',
  marvelApiUrl: '',
 url :`https://gateway.marvel.com:443/v1/public/characters?limit=8&apikey=${this.publicKey}&ts=${this.ts}`
  
};
