import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: { type: Number, required: 'Id is Required' },
  username: { type: String, required: 'UserName is Required' },
  displayName: { type: String, required: 'DisplayName is Required' },
  profileUrl: String,
  avatarUrl: String,
  email: String,
  blog: String,
  bio: String,
  tag: [String],
  timeLineFeilds: [
    {
      title: String,
      timeLine: [
        {
          color: String,
          icon: String,
          title: String,
          subtitle: String,
          value: String
        }
      ]
    }
  ]
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
