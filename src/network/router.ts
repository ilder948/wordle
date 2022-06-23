import wordle from '../components/wordle/routes';

export const routes = (server: any) => {
  server.use('/', wordle);
};
