const express = require("express"); 
const app = express();
app.use(express.json()) // to parse json data from request body
const dbConnection = require("./src/utils/dBConnection")
dbConnection() 


const productRoutes = require("./src/routes/ProductRoutes")
app.use("/prod",productRoutes)


const bookRoutes = require("./src/routes/BookRoutes")
app.use("/book",bookRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",categoryRoutes)

//server creation...
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});