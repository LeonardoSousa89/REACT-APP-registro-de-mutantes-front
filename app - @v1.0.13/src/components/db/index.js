import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-4d4dwWAbWynDPCVvK2c2SdnwptzO61s",
    authDomain: "registrodemutantes.firebaseapp.com",
    databaseURL: "https://registrodemutantes-default-rtdb.firebaseio.com",
    projectId: "registrodemutantes",
    storageBucket: "registrodemutantes.appspot.com",
    messagingSenderId: "6952520682",
    appId: "1:6952520682:web:50ad44f29e2215f65f4093",
    measurementId: "G-EKRDBMN4E8"
  };

  const firebase=initializeApp(firebaseConfig);

  const db=getFirestore(firebase)
  const auth=getAuth(firebase)
  export { db, auth }

//usar a expressão final em caso de rejeição por pacotes a partir de sua versão
// npm i --save [pacote] --legacy-peer
