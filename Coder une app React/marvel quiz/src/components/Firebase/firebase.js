import { getAuth, signOut } from "firebase/auth";
import app from 'firebase/app'
import { initializeApp } from "firebase/app";
import { useState } from "react";


const config = {
    apiKey: "AIzaSyCLy7p4VCKcK_IqAYMIzg_t7OYZefZf_pE",
    authDomain: "marvel-quiz-5fe85.firebaseapp.com",
    projectId: "marvel-quiz-5fe85",
    storageBucket: "marvel-quiz-5fe85.appspot.com",
    messagingSenderId: "659784967957",
    appId: "1:659784967957:web:b9540b6289941fd8e4ab1c"
};

class Firebase{
    constructor() {
        const app = initializeApp(config)
        this.auth = getAuth(app)
    }

    
}

export default Firebase

/* const app = initializeApp(config);
export const auth = getAuth(app); */