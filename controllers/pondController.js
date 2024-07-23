const Pond = require('../models/pond.model');

const savePondHandler = async (req, res) => {
  const { pondId, i1, i2 } = req.body;
  const newPond = new Pond(pondId, i1, i2);
  try {
    await Pond.savePondDetail(newPond);
    res.status(200).json({ message: 'Pond saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Saving pond detail failed.', error });
  }
};

const getPondHandler = async (req, res) => {
  try {
    const pondDetail = await Pond.getPondDetail(req.params.pondId);
    if (pondDetail) {
      res.status(200).json(pondDetail);
    } else {
      res.status(404).json({ message: 'Pond not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Getting pond detail failed.', error });
  }
};

const getAllPondsHandler = async (req, res) => {
  try {
    const ponds = await Pond.getAllPonds();
    res.status(200).json(ponds);
  } catch (error) {
    res.status(500).json({ message: 'Getting all ponds failed.', error });
  }
};

const deletePondHandler = async (req, res) => {
  try {
    await Pond.deletePond(req.params.pondId);
    res.status(200).json({ message: 'Pond deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Deleting pond failed.', error });
  }
};

const updatePondHandler = async (req, res) => {
  try {
    const pondDetail = await Pond.getPondDetail(req.params.pondId);
    if (pondDetail) {
      const updatedPond = new Pond(req.params.pondId, req.body.i1, req.body.i2);
      await Pond.savePondDetail(updatedPond);
      res.status(200).json({ message: 'Pond updated successfully.' });
    } else {
      res.status(404).json({ message: 'Pond not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Updating pond detail failed.', error });
  }
};

module.exports = {
  savePondHandler,
  getPondHandler,
  getAllPondsHandler,
  deletePondHandler,
  updatePondHandler
};
