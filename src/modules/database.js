import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqH8sxWPex1zHyaMP9m2i21-ODsuvE40Q",
  authDomain: "indigene-lat.firebaseapp.com",
  projectId: "indigene-lat",
  storageBucket: "indigene-lat.appspot.com",
  messagingSenderId: "77967422866",
  appId: "1:77967422866:web:246985a0508d4d13c1fd4b"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getCollectionDocs = async(collection)=>{
  let docs = [];
  (await db.collection(collection).get()).docs.forEach((rawDoc)=>{
    let doc = {...rawDoc.data()};
    doc.id = rawDoc.id;
    docs.push(doc);
  });
  return docs;
}
const getCollectionDocsWithFilters = async(collection,filters)=>{
  let docs = [];
  let collectionRef = db.collection(collection);
  for(let i=0;i<filters.length;i++){
    collectionRef = collectionRef.where(filters[i][0],filters[i][1],filters[i][2]);
  }
  (await collectionRef.get()).docs.forEach((rawDoc)=>{
    let doc = {...rawDoc.data()};
    doc.id = rawDoc.id;
    docs.push(doc);
  });
  return docs;
}
const createDoc = async(collection,doc)=>{
  let newDoc = {...doc};
  delete newDoc.id;
  const docRef = db.collection(collection).doc();
  await docRef.set(newDoc);
  return docRef.id;
}
const createDocWithID = async(collection,doc,id)=>{
  let newDoc = {...doc};
  delete newDoc.id;
  const docRef = db.collection(collection).doc(id);
  await docRef.set(newDoc);
}
const deleteDoc = async(collection,id)=>{
  await db.collection(collection).doc(id).delete();
}
const updateDoc = async(collection,id,doc)=>{
  let obj = {...doc};
  delete obj.id;
  await db.collection(collection).doc(id).update(obj);
}
const getDoc = async(collection,id)=>{
  let doc = (await db.collection(collection).doc(id).get()).data();
  if(doc!=null&&doc!=undefined){
    doc.id = id;
    return doc;
  } else {
    throw new Error("Doc does not exists");
  }
}

const auth = firebase.auth();

export default {
  getCollectionDocs,
  getCollectionDocsWithFilters,
  createDoc,
  createDocWithID,
  getDoc,
  updateDoc,
  deleteDoc,
  auth,
}