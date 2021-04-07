import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from '../components/common/Loading/Loading';
import store, { persistor } from './store';

const ReduxProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
