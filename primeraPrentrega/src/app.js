import  Express  from "express";
import routerP from "./router/products.router.js";

const app = Express ()
const PORT = 8080

app.use(Express.urlencoded({extended: true}))
app.use(Express.json())

app.use("/api/product",routerP)

app.listen(PORT, ()=>{
    console.log(`run server correctly on port ${PORT}`)
})