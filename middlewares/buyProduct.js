async function pay(req, product, User) {
  try {
    return true;
  } catch (error) {}
}
let message;
async function isValid(req, product, User) {
  let body = req;
  try {
    if (body.shopOwner) {
      let user = await User.findById(body.shopOwner);
      if (user) {
        if (body.quantity) {
          let q = Number(body.quantity);
          if (q !== NaN) {
            if (q > 0 && q < 61) {
              return true;
            } else {
              message = "Quantity should be min:1 and max: 60";
            }
          } else {
            message = "q can only be a number between 1-60";
            return false;
          }
        } else {
          message = "quantity";
          return false;
        }
      } else {
        message = "Shopowner id is not valid";
        return false;
      }
    } else {
      message = "Shopowner id is not valid";
      return false;
    }
  } catch (error) {
    console.log(error);
    message = "something is wrong";
    return false;
  }
}

async function order(Order, req, product, User, productInfo) {
  try {
    if (await isValid(productInfo, product, User)) {
      let isCompletedPayment = await pay(req, product, User);
      if (isCompletedPayment) {
        let order = new Order();
        order.orderedFrom = req.user._id;
        order.orderedTo = Number(product.uploader);
        order.productOrdered = product._id;
        order.quantity = productInfo.quantity;
        order.paymentMethod = productInfo.paymentMethod;
        let price = product.productPrice;
        let selected;
        if (productInfo.selected) {
          let selections = product.options.selections;
          for (i = 0; i < selections.length; i++) {
            if (selections[i] == productInfo.selected) {
              selected = selections[i].name;
              price = Number(selections[i].price);
              break;
            }
          }
        }
        //////////////Sales goes here

        order.ammount = price;
        if (selected) {
          order.selected = selected;
        }
        let ordered = await order.save();
        return ordered;
      }
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

async function buySingle(Product, User, Order, Shop, productInfo, req, res) {
  try {
    let product = await Product.findById(productInfo.Id);
    if (product) {
      if (!product.isBanned) {
        let tempsellerID = Number(product.uploader);
        console.log("SellerId", "", tempsellerID);
        let seller = await User.findById(tempsellerID);
        if (seller) {
          //Make the payment await;
          let createdOrder = await order(Order, req, product, User);
          if (createdOrder) {
            let updatedUser = await User.updateOne(
              { _id: req.user._id },
              { $push: { orders: { orderedProduct: createdOrder._id } } }
            );
            let updatedShop = await Shop.updateOne(
              { _id: seller.sellerID },
              { $push: { recievedOrders: { OrderID: createdOrder._id } } }
            );
            return createdOrder._id;
          } else {
            res.send(message);
          }
        } else {
          res.send("Seller is not valid and your money is fu**ed");
        }
      } else {
        res.send("The product is banned");
      }
    } else {
      res.send("Provided id is not valid");
    }
  } catch (error) {
    console.log(error);
    res.send(
      "Ops something went wrong. Dont worry your money is and will be safe."
    );
  }
}

function buyProduct(Product, User, Order, Shop) {
  return async (req, res, next) => {
    if (req.body.products) {
      if (req.body.products.length > 0) {
        let bought = [];
        for (i = 0; i < req.body.products.length; i++) {
          bought[i] = await buySingle(
            Product,
            User,
            Order,
            Shop,
            req.body.products[i],
            req,
            res
          );
          if (bought[i]) {
          } else {
            res.send("Error occured");
            break;
          }
        }
        next();
      }
    }
  };
}

module.exports = buyProduct;
