const Picture = require("../models/Picture");

module.exports = {
  // @route   POST api/pic
  // @desc    Save a picture to server
  // @access  Public
  save: async (req, res, next) => {
    try {
      const picture = new Picture({ path: req.file.path });
      await picture.save();

      res.status(201).json({
        msg: "Saved a picture",
        pictureId: picture._id
      });
    } catch (err) {
      next(err);
    }
  },
  // @route   GET api/pic/:id
  // @desc    Get a path to a saved picture
  // @access  Public
  get: async (req, res, next) => {
    const pictureId = req.params.id;

    try {
      const data = await Picture.findById(pictureId);
      res.status(200).json({ msg: "Picture found!", picture: data });
    } catch (err) {
      next(err);
    }
  }
};
