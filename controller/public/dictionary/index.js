const models = require("@models");
const { defInclude, excludeFields, getLikeTemplate } = require("@utils");

const get = (req, res) => {
  const { offset, limit, ...queryParams } = req.query;

  const where = getLikeTemplate(
    queryParams,
    excludeFields(defInclude(), ["id"])
  );

  models.dictionary
    .findAndCountAll({ where, limit, offset, attributes: defInclude() })
    .defAnswer(res);
};

const getById = (req, res) => {
  const { id } = req.params;

  models.dictionary
    .findOne({ where: { id }, attributes: defInclude() })
    .defAnswer(res);
};

module.exports = (router) => {
  router.get("/", get);
  router.get("/:id", getById);
};
