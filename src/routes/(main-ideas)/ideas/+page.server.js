import db from "$lib/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  const ideas = await db.idea.findMany({
    orderBy: {
      votes: "desc", 
    },
  });

  return { ideas, user: locals.user };
}
