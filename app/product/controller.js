const Product = require("./model")


const create = (req, res) => {
    const newProduct = req.body.productForm;
    const product = new Product(newProduct);
    product.save()
    .then(
        product => res.send(product)
    )
    .catch(
        err => res.send(err)
    )
}



const index = (req, res) => {
    Product.find({})
    .then(
        products => res.send(products)
    )
    .catch(
        err =>res.send(err)
    )
}

const show = (req, res) => {
    const id = req.params.id
    Product.findById(id)
    .then(
        product => res.send(product)
    )
    .catch(
        err => res.send(err)
    )
}

const destroy = (req, res) => {
    const id = req.params.id
  Product.findById(id)
    .then(product =>
      product.remove()
        .then(product => res.send(product))
        .catch(err => res.send(err))
    )
    .catch(err => res.send(err))
}


const update = (req, res) => {
    const id = req.params.id
    const price = req.body.productForm.price
  Product.update(
    { _id: id },
    {
      $set: { price: price }
    }
  )
    .then(updateDetails => res.send(updateDetails))
    .catch(err => res.send(err));
}



module.exports = {
  index,
  show,
  create,
  update,
  destroy
}