const Purchase = require('../models/Purchase')
const Ad = require('../models/Ad')

class AcceptPurchaseController {
  async update (req, res) {
    const purchase = await Purchase.findById(req.params.id)

    const ad = await Ad.findByIdAndUpdate(
      purchase.ad,
      { purchasedBy: purchase._id },
      {
        new: true
      }
    )

    return res.json(ad)
  }
}

module.exports = new AcceptPurchaseController()
