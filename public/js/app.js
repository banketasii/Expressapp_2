"use strict";
/* Section 24 Lecture 239 + 240
   Post Requests Part 1 and Part 2 */
Object.defineProperty(exports, "__esModule", { value: true });
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let jsFriends = ["Richard", "Ted", "Leslie", "Karen", "John"];
app.get("/", function (request, response) {
    response.render("home");
});
app.get("/friends", function (request, response) {
    response.render("friends", { ejsFriends: jsFriends });
});
app.post("/addFriend", function (request, response) {
    let newFriend = request.body.newFriend;
    jsFriends.push(newFriend);
    response.redirect("/friends");
});
app.get("*", function (request, response) {
    response.send("Page does not exist");
});
app.listen(3000, function () {
    console.log("Post Routes Project is listening on port 3000");
});
