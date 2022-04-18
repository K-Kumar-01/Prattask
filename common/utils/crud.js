const getOne =
  (model) =>
  ({ findBy, selectOpts = "" }) => {
    // returns document in form of javascript object.
    return model
      .findOne({ ...findBy })
      .select(selectOpts)
      .lean()
      .exec();
  };

const getOneDoc =
  (model) =>
  ({ findBy, selectOpts = "" }) => {
    // returns document in form of mongoose doc.
    return model
      .findOne({ ...findBy })
      .select(selectOpts)
      .exec();
  };


const getMany =
  (model) =>
  ({ findBy, selectOpts = "" }) => {
    // returns documents in the form of javascript objects.
    return model
      .find({ ...findBy })
      .select(selectOpts)
      .lean()
      .exec();
  };

const getManyDocs =
  (model) =>
  ({ findBy, selectOpts = "" }) => {
    // returns documents in the form of mongoose doc.
    return model
      .find({ ...findBy })
      .select(selectOpts)
      .exec();
  };

// create a single document
const createOne =
  (model) =>
  ({ body }) => {
    return model.create({ ...body });
  };

// create many documents
const createMany =
  (model) =>
  ({ body }) => {
    return model.insertMany(body);
  };

// update a single document
const updateOne =
  (model) =>
  ({ findBy, updateBody }) => {
    const update = { ...updateBody };
    return model
      .findOneAndUpdate({ ...findBy }, update, {
        new: true,
        runValidators: true,
      })
      .lean()
      .exec();
  };

// update a single document
const updateMany =
  (model) =>
  ({ findBy, updateBody }) => {
    const update = { ...updateBody };
    return model
      .updateMany({ ...findBy }, update, {
        new: true,
        runValidators: true,
      })
      .lean()
      .exec();
  };

const removeOne =
  (model) =>
  ({ findBy }) => {
    return model.findOneAndRemove({ ...findBy });
  };

const deleteOne =
  (model) =>
  ({ findBy }) => {
    return model.deleteOne(findBy);
  };

exports.crudControllers = (model) => ({
  deleteOne: deleteOne(model),
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  updateMany: updateMany(model),
  getMany: getMany(model),
  getManyDocs: getManyDocs(model),
  getOne: getOne(model),
  getOneDoc: getOneDoc(model),
  createOne: createOne(model),
  createMany: createMany(model),
});
