import { createContext } from "react";

import { cartStore } from "./cartStore";

const rootStore = cartStore();

export const RootStoreContext = createContext(rootStore);
