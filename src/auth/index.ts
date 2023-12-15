import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB2vC01SePjmIrWuot-qxaiAJhYPCdCVCU',
  authDomain: 'graphiql-app-8cab4.firebaseapp.com',
  projectId: 'graphiql-app-8cab4',
  storageBucket: 'graphiql-app-8cab4.appspot.com',
  messagingSenderId: '694484887981',
  appId: '1:694484887981:web:545e4a07f686f35e6c5924',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
