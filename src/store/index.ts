import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { countReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    count: countReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers =
    (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

// export default function configureStore() {
//     /* eslint-disable no-underscore-dangle */
//     const store = createStore(
//         rootReducer,
//         composeEnhancers(applyMiddleware(thunk)),
//     );
//     // process.env.NODE_ENV === 'production'
//     //     ? createStore(rootReducer)
//     //     : (window: any)['__REDUX_DEVTOOLS_EXTENSION__']
//     //     ? createStore(rootReducer, (window: any)['__REDUX_DEVTOOLS_EXTENSION__']())
//     //     : createStore(rootReducer);
//     console.log(store);
//     return store;
//     /* eslint-enable */
// }

const store = createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(thunk)),
);

export default store;
