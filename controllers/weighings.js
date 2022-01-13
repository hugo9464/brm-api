const Weighing = require('../models/weighing')

exports.createWeighing = (req, res, next) => {
    weighing = new Weighing({
      weight: req.body.weight,
      type: req.body.type,
      userId: req.body.userId,
      date: new Date()
    });

    weighing
      .save()
      .then(() => res.status(201).json({ message: "Pesée enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
}

exports.getOneWeighing = (req, res, next) => {
    Weighing.findOne({ _id: req.params.id })
    .then((weighing) => res.status(200).json(weighing))
    .catch((error) => res.status(404).json({ error }));
}

exports.modifyWeighing = (req, res, next) => {
    Weighing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Pesée modifié !" }))
    .catch((error) => res.status(400).json({ error }));
}

exports.deleteWeighing = (req, res, next) => {
    Weighing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Pesée supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
}

exports.getAllWeighings = (req, res, next) => {
    console.log(req)
    Weighing.find( {userId: req.body.userId})
    .then((weighings) => res.status(200).json(weighings))
    .catch((error) => res.status(400).json({ error }));
}