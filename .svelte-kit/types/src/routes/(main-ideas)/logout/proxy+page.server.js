// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** */
export const actions = {
  default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies }) => {
    cookies.delete('user', {
      path: '/', 
      secure: process.env.NODE_ENV === 'production', 
    });

    throw redirect(303, '/ideas');
  },
};
