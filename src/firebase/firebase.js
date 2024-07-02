// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBicO0-pwoFX0qEL2CM5fNS81ZZ_PYSW4",
  authDomain: "proyecto-ecommerce-react-b8dd8.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-b8dd8",
  storageBucket: "proyecto-ecommerce-react-b8dd8.appspot.com",
  messagingSenderId: "540233791883",
  appId: "1:540233791883:web:3844c3dc323687ced8d78e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export async function getProducts(){
 const response = await getDocs(collection(database, 'products'));
 console.log(response);

 const listaProducts=[];
 response.forEach((document) => listaProducts.push({id: document.id, ...document.data()}));
 return listaProducts;

}