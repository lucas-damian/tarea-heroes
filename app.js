const express = require('express');
const app = express();
const rutasMain = require("./routes/main")
const rutasHeroes = require("./routes/heroes")


app.listen(3030, () => console.log('Server running in 3030 port'));

app.use("/",rutasHeroes)
app.use("/",rutasMain)
/* app.get("/creditos",rutasMain) */
