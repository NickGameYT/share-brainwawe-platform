import { d as db } from "../../../../../chunks/prisma.js";
import { e as error, f as fail } from "../../../../../chunks/index.js";
async function load({ locals, params }) {
  const idea = await db.idea.findUnique({
    where: { id: params.id },
    include: { user: true }
  });
  if (!idea) {
    error(404, { message: "Идеи больше не существует" });
  }
  idea.votersId = idea.votersId.split(",");
  return { user: locals.user, idea };
}
const actions = {
  default: async ({ locals, params }) => {
    const idea = await db.idea.findUnique({
      where: { id: params.id }
    });
    let voters = [];
    if (idea?.votersId) {
      const splitted = idea?.votersId.split(",");
      voters = voters.concat(splitted);
    }
    voters.push(locals.user?.id);
    try {
      const updated = await db.idea.update({
        where: { id: params.id },
        data: {
          votersId: voters.join(","),
          votes: Number(idea?.votes) + 1
        }
      });
    } catch (_e) {
      console.log(_e);
      return fail(400, { message: _e.message });
    }
  }
};
export {
  actions,
  load
};
