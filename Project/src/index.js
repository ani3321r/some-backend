import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error!!", err);
  });

// ;(async() => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch(error) {
//         console.error("ERROR", error)
//     }
// })()
