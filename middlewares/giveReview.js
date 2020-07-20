let message = "Ops something went wrong";

async function review(Product, req, order) {
  try {
    let given = Product.update(
      { _id: order.productOrdered },
      {
        $push: {
          reviews: {
            reviewerId: req.user._id,
            rating: req.body.rating,
            review: req.body.review
          }
        }
      }
    );
    return given;

  } catch (error) {
    console.log(error);
    return;
  }
}

function giveReview(Order, Product) {
  return async (req, res, next) => {
    try {
      let order = await Order.findById(req.body.OrderId);
      if (order.orderedFrom === req.user._id) {
        if (!order.isReviewedByBuyer) {
          let reviewed = await review(Product, req, order);
          if (reviewed) {
            let updateOrder = Order.update(
              { _id: req.body.OrderId },
              { isReviewedByBuyer: true }
            );
            next();
          } else {
            res.send(message);
          }
        } else {
          res.send("You can not review twice unless you buy again.");
        }
      } else {
        res.send("You haven't ordered the product");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = giveReview;
