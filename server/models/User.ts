import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

const UserSchema = new mongoose.Schema({
  id: { type: String, required: "Id is Required" },
  name: { type: String, required: "Name is Required" },
  githubId: { type: Number, required: "GithubId is Required" },
  avatarUrl: String,
  email: String,
  blog: String,
  bio: String,
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "id" })

const model = mongoose.model("User", UserSchema)

export default model
