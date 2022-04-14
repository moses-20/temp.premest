import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    minlength: [6, "minimum username length is 6 characters"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "you need to choose a password"],
    minlength: [6, "minimum password length is 6 characters"]
  }
});

userSchema.pre("save", async function (next) {
  const salt = 10;
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return user;
    }

    throw new Error("incorrect password");
  }

  throw new Error("incorrect username");
};

export default models.user ?? model("user", userSchema);
