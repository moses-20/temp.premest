import Cors from "cors";

const cors = runMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST"]
  })
);

function runMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export default cors;
