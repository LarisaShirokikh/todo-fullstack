import { applyMiddleware, compose, createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import App from './App';
import { sagaWatcher } from './redux/saga/sagas';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);




