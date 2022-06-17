import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebaseconfig";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  onChildAdded,
  get,
  child,
  remove,
} from "firebase/database";

// == authentication meythods ==

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password);
};
let logInUser = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password);
};
// let logOutUser = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };
// let checkAuthUser = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// };

// == database methods ==

let sendData = (obj, nodeName, id) => {
  if (!id) {
    // for id/key start
    let postListRef = ref(database, nodeName);
    obj.id = push(postListRef).key;
    console.log(obj.id);
    // for id/key end
  }
  let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id }`);
  return set(newpostListRef, obj);
  //console.log(newpostListRef)
};

let insertDataDatabase = (node,obj,id) =>{

  const Reff = ref(database,`${node}/${id ? id : '' }`)    
       return set(Reff,obj);
  }



let getData = async (nodeName, id) => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`),{
            onlyOnce: false,
         })
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          if (id) {
            arr = snapshot.val();
            resolve(arr);
          } else {
            arr = Object.values(snapshot.val());
            resolve(arr);
          }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // get(
  //   dbRef,
  //(snapshot) => {
      // console.log(snapshot.val());

    //   snapshot.forEach((childSnapshot) => {
    //    const childData = childSnapshot.val();

  //     // ...
    //   });
//    },
  //   {
  //     onlyOnce: true,
  //   }
  // );
};
let deleteData = (nodeName, id) => {
  const refrence = ref(database, nodeName + "/" + id);
  return remove(refrence);
};

export { signUpUser, logInUser, sendData, getData, deleteData };
