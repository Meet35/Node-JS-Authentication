import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    user_id :{
      type : String
    },
    title:{
        type:String
    },
    message:{
        trype:String
    },
    blog_id:{
        type:String
    }
});

export default mongoose.model("Blog", schema);
