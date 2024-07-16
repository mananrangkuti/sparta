import { expect } from "chai";
import createUser from "../endpoint/create-user.js";

describe("Register:", function () {

  it("POST - register user", async () => {
    const response = await createUser;

    if (response.status !== 201){
        console.log("Failed : "+response.status+"||" +response.text);
      }

    expect(response.status).to.equal(201);
  });
});
