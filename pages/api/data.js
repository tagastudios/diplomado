var data = require("./data.json");

export default (req, res) => {
  res.status(200).json(JSON.stringify(data));
};
