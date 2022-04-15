import cors from "../../../server/cors";
import connectDB from "../../../server/db";
import User from "../../../server/models/user.model";

export default async function handler(req, res) {
  await connectDB();
  await cors(req, res);

  switch (req.method) {
    case "POST":
      try {
        const user = await User.create(req.body);
        if (!user) throw new Error("acount not created");

        res.status(200).json({ status: "success", user });
      } catch (error) {
        res.status(400).json({ status: true, msg: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).send("<h1> BAD REQUEST </h1>");
      break;
  }
}
