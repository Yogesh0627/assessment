import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://Yogesh:Yogesh%40mongo1@cluster0.vnzn2j6.mongodb.net/assessmentData`
);

const ClientSchema = mongoose.Schema({
  firstName: { type:String, require: true },
  lastName: {type: String, require: true },
  mobileNumber:{type:Number,require:true},
  project:{type:String},
  email :{type:String, require:true , unique:true},

});

const Client = mongoose.model("clients",ClientSchema)

export default Client