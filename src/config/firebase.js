
import { initializeApp } from "firebase/app";
import { getFirestore} from  'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDHFqbDCJTMc4sIZsMWA3cAw_HI2wqafXY",
  authDomain: "tik-tok-jornada-828e3.firebaseapp.com",
  projectId: "tik-tok-jornada-828e3",
  storageBucket: "tik-tok-jornada-828e3.appspot.com",
  messagingSenderId: "1087828487808",
  appId: "1:1087828487808:web:c8e123cd9795a9743f8065"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;