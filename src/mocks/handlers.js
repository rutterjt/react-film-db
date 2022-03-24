import { rest } from 'msw';

import { mockMoviesPage1 } from './mocks/mockMoviesPage1';
import { mockMoviesPage2 } from './mocks/mockMoviesPage2';
import { spiritedAway } from './mocks/spiritedAway';
import { aSilentVoice } from './mocks/aSilentVoice';
import { yourName } from './mocks/yourName';
import { spiritedAwayCredits } from './mocks/spiritedAwayCredits';
import { aSilentVoiceCredits } from './mocks/aSilentVoiceCredits';
import { yourNameCredits } from './mocks/yourNameCredits';

const DELAY = 1000;

export const handlers = [
  rest.get('/movies', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const searchTerm = req.url.searchParams.get('term');
    console.log(page, searchTerm);
    let data;
    if (page === '1') {
      data = mockMoviesPage1;
    } else {
      data = mockMoviesPage2;
    }
    return res(ctx.delay(DELAY), ctx.status(200), ctx.json(data));
  }),
  rest.get('/movie/:movieId', (req, res, ctx) => {
    const { movieId } = req.params;
    if (movieId === '378064') {
      return res(ctx.delay(DELAY), ctx.status(200), ctx.json(aSilentVoice));
    } else if (movieId === '372058') {
      return res(ctx.delay(DELAY), ctx.status(200), ctx.json(yourName));
    } else if (movieId === '129') {
      return res(ctx.delay(DELAY), ctx.status(200), ctx.json(spiritedAway));
    } else {
      return res(
        ctx.status(404),
        ctx.json({ errorMessage: `Movie ${movieId} not found` })
      );
    }
  }),
  rest.get('/credits/:movieId', (req, res, ctx) => {
    const { movieId } = req.params;
    if (movieId === '378064') {
      return res(
        ctx.delay(DELAY),
        ctx.status(200),
        ctx.json(aSilentVoiceCredits)
      );
    } else if (movieId === '372058') {
      return res(ctx.delay(DELAY), ctx.status(200), ctx.json(yourNameCredits));
    } else if (movieId === '129') {
      return res(
        ctx.delay(DELAY),
        ctx.status(200),
        ctx.json(spiritedAwayCredits)
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ errorMessage: `Movie ${movieId} not found` })
      );
    }
  }),
];
