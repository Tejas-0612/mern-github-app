import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      default: "",
    },
    profileUrl: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
    likedProfiles: {
      type: [String],
      default: [],
    },
    likedBy: [
      {
        username: {
          type: String,
          required: true,
        },
        avatarUrl: {
          type: String,
        },
        likedDate: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
