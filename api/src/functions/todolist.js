const { app } = require("@azure/functions")

app.http("todolist", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`)

    const name = request.query.get("name") || (await request.text()) || "world"
    const testData = [
      { text: "Sign up for pilates", id: 1, completed: false },
      { text: "Pay the light bill", id: 2, completed: true },
      { text: "Get some milk", id: 3, completed: false }
    ]

    return { body: JSON.stringify({ message: `Hello, ${name}!`, testData: testData }) }
  }
})
