import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAM8txvH1djLZPyA-8AjgOB5QGpsLvJr0",
  authDomain: "wildie-shahriyardx.firebaseapp.com",
  projectId: "wildie-shahriyardx",
  storageBucket: "wildie-shahriyardx.appspot.com",
  messagingSenderId: "353763106194",
  appId: "1:353763106194:web:92525478ce438f035a354b"
};

const app = initializeApp(firebaseConfig);

export default app