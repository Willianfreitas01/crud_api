import { 
  postUser,
  getUser,
  getUserId,
  putUser,
  deleteUser
} from "@controllers/todo/user"

export const defineRoutes = (app) => {
  app.get("/userr", getUser)
  app.get("/userr/:id", getUserId)
  app.post("/userr", postUser)
  app.delete("/userr/:id", deleteUser)
  app.put("/userr/:id", putUser)

  
}
