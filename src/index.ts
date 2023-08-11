import app from "./app";

const port = process.env.PORT || 50001;

const main = async () => {
  app.listen(port, () => {
    console.log(`Application runing on port ${port}`);
  });
};

main();
