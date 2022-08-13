const handleError = (error, res) => {
  console.error(error.message);
  res.status(500).json({ error: error.message });
};

module.exports = handleError;
