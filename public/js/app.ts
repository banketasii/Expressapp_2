/* Section 24 Lecture 239 + 240
   Post Requests Part 1 and Part 2 */

import {Application, Request, Response} from 'express';
let express:any = require("express");
let bodyParser:any = require("body-parser");
let app:Application = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let jsFriends:string[] = ["Richard", "Ted", "Leslie", "Karen", "John"];

app.get("/", function(request:Request, response:Response):void{
  response.render("home");
});

app.get("/friends", function(request:Request, response:Response):void{
  
  response.render("friends", {ejsFriends: jsFriends});
});

app.post("/addFriend", function(request:Request, response:Response):void{
  let newFriend:string = request.body.newFriend;
  jsFriends.push(newFriend);
  response.redirect("/friends");
});

app.get("*", function(request:Request, response:Response):void{
  
  response.send("Page does not exist");
});




app.listen(3000, function():void{
  console.log("Post Routes Project is listening on port 3000");
});