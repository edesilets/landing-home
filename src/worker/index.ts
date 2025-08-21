import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Let's version this..." }));
app.get("/api/v1/information", (c) => c.json({
    name: {
        full: "Ethan Desilets",
        first: "Ethan",
        last: "Desilets",
    },
    location: { broad: "Greater Boston", state: "Massachusetts", region: "East Coast"},
    occupation: "Software Engineer"
}))

export default app;
