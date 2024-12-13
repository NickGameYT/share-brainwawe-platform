import { d as db } from "../../../../chunks/prisma.js";
async function load({ locals }) {
  const ideas = await db.idea.findMany({
    orderBy: {
      votes: "desc"
      // Сортировка по количеству голосов, от большего к меньшему
    }
  });
  return { ideas, user: locals.user };
}
export {
  load
};
