import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyC9NkMZFjvOQpafqF6mxG6x37IyEycI39g",
    authDomain: "ii1305-gluon.firebaseapp.com",
    databaseURL: "https://ii1305-gluon-default-rtdb.firebaseio.com",
    projectId: "ii1305-gluon",
    storageBucket: "ii1305-gluon.appspot.com",
    messagingSenderId: "1061636085301",
    appId: "1:1061636085301:web:8e41a928d77bf67819437c"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire