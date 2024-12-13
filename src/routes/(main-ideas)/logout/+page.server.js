import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies }) => {
    cookies.delete('user', {
      path: '/', 
      secure: process.env.NODE_ENV === 'production', 
    });

    throw redirect(303, '/ideas');
  },
};
