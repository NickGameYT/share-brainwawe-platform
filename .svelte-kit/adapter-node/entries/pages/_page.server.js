import { r as redirect } from "../../chunks/index.js";
const actions = {
  logout: ({ cookies }) => {
    cookies.delete("user", { path: "/" });
    redirect(307, "/ideas");
  }
};
export {
  actions
};
