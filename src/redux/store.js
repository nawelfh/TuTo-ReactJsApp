import { createStore,combineReducers} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./reducers/counterReducer";
const persistConfig = {
    key: "root",
    timeout: null,
    storage,
    whitelist: ["counter"],
    blacklist: []
};

const reducer = combineReducers({
    counter : counterReducer
});
const persistedReducers = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducers);
// const store = createStore(combineReducers({counterReducer}))

export default store
export const persistor = persistStore(store);

