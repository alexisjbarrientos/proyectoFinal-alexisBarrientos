import express from "express"
import routerP from "./router/products.router.js"
import routerC from "./router/carts.router.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/products", routerP)
app.use("/api/carts", routerC)

app.listen(PORT, () => {
    console.log(`El servidor está funcionando correctamente en el puerto ${PORT}`)
})
