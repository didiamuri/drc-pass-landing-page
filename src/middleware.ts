import { locales } from "./middlewares/locale";
import { stack } from "./middlewares/stack";

export default stack([locales]);

export const config = {
    matcher: "/((?!.*\\.).*)",
}