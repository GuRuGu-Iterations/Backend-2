module.exports = {
  // @route   POST api/pic
  // @desc    Save a picture to server
  // @access  Public
  save: async (req, res) => {
    console.log(req.file);
    console.log("Posted a picture");
    res.status(201).json({ msg: "Saved a picture" });
  },
  // @route   GET api/pic/:id
  // @desc    Get a path to a saved picture
  // @access  Public
  get: async (req, res) => {
    console.log(req.params.id);
    console.log("Get a path to a picture on server");
    res.status(200).json({ msg: "Here is a path to your picture" });
  }
};
