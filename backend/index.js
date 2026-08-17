import config from "./utils/config.js";
import { app } from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(config.mongoUrl, { family: 4 })
  .then(console.log('MongoDB is connected ✔✔✔'))
  .catch((error) => console.log("error while connecting to mongoDB", error));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
