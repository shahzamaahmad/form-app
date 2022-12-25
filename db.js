const mongoose = require("mongoose");

const Form = mongoose.model("form", {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  }
})
module.exports = Form;