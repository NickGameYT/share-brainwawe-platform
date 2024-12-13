// @ts-nocheck
import db from "$lib/prisma.js";

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
  const ideas = await db.idea.findMany({
    orderBy: {
      votes: "desc", 
    },
  });

  return { ideas, user: locals.user };
}
