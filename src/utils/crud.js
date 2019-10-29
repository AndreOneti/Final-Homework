//crud.js

/**
 * use this import on cumponent to use crud
 * const { readMany, create } = require('../../../utils/crud');
 * each component create validators.
 * on calling pass this parameter (req, res, next, Collection, CollectionName)
 */

module.exports = {

  // =========
  // Read many
  // =========
  readMany(req, res, next, Collection) {
    Collection
      .find()
      .select('-__v -_id')
      .then(data => {
        console.log(data);
        res.status(200).json(data).end();
      })
      .catch(e => {
        console.log(e);
        res.status(400).json({
          message: "Error on find user",
          data: e
        }).end();
      });
  },

  // ======
  // Create
  // ======
  create(req, res, next, Collection) {
    const newEntry = new Collection(req.body);
    newEntry
      .save()
      .then((result) => {
        res.status(201).json({ message: "Created!" }).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  }
}
