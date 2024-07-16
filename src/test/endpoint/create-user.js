import supertest from "supertest";
import env from "dotenv";

env.config();
const request = supertest(process.env.BASE_URL);

export const createUser = request.post("/api/users")
  .set("Content-Type", "application/json")
  .send(
    {
      name: "morpheus",
      job: "leader"
    },
  );

export default createUser;
