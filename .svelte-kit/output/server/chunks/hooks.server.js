import { J as JWT_SECRET_KEY } from "./private.js";
import jwt from "jsonwebtoken";
const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("user");
  if (!token) {
    return await resolve(event);
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    event.locals.user = payload;
  } catch (_e) {
    console.log(_e);
    return await resolve(event);
  }
  return await resolve(event);
};
export {
  handle
};
