import { 
  postUser,
  getUser,
  getUserId,
  putUser,
  deleteUser
} from "@controllers/todo/user"

export const defineRoutes = (app) => {
  app.get("/user", getUser)
  app.get("/user/:id", getUserId)
  app.post("/user", postUser)
  app.delete("/user/:id", deleteUser)
  app.put("/user/:id", putUser)

  
}
