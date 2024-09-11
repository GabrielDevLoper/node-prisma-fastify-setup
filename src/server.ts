import fastify from "fastify";
import UserController from "./controllers/UserController";

const app = fastify();

app.get("/users", UserController.index);
app.post("/users", UserController.create);

app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log("server is running");
})