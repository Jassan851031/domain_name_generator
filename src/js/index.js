/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    //console.log(pronoun[i]);
    for (let a = 0; a < adj.length; a++) {
      //console.log(adj[a]);
      for (let b = 0; b < noun.length; b++) {
        //console.log(noun[b]);
        console.log(pronoun[i] + adj[a] + noun[b] + ".com");
        let text = document.createTextNode(
          pronoun[i] + adj[a] + noun[b] + ".com"
        );
        document.getElementById("random").appendChild(text);
      }
    }
  }
};
