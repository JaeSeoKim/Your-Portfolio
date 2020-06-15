import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: { type: Number, required: 'Id is Required' },
  username: { type: String, required: 'UserName is Required' },
  displayName: { type: String, required: 'DisplayName is Required' },
  profileUrl: String,
  avatarUrl: String,
  email: String,
  blog: String,
  bio: String
})

export default mongoose.models.User || mongoose.model('User', UserSchema)