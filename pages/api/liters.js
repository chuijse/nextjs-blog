export default function handler(req, res) {
  //guardar litros
  res.status(200).json({ liters: req.query.liters });
}
