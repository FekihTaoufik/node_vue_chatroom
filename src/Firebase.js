import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC81CPWG6JN8F-AFbLDYlpKhv05bjNQXT8",
    authDomain: "node-vue-chatroom.web.app",
    databaseURL: "https://node-vue-chatroom.firebaseio.com/",
    projectId: "node-vue-chatroom",
    storageBucket: "gs://node-vue-chatroom.appspot.com/"
  };
  firebase.initializeApp(config);
  export default firebase;