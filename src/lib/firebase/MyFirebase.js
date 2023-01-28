import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

class MyFirebase {
  constructor(collectionName) {
    this.ref = collection(db, collectionName);
  }

  async add(data) {
    await addDoc(this.ref, data);
  }

  async getMany() {
    const res = await getDocs(this.ref);
    return res.docs.map((doc) => ({
      ...doc.data(),
    }));
  }
}

export default MyFirebase;
