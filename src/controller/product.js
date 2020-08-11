const {getAllProduct} = require('../model/product');
const helper = require('../helper');

module.exports = {
  getAllProduct: async (request, response) => {
    try {
      const result = await getAllProduct();
      return helper.response(response, 200, "Success GET Product", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postProduct: (request, response) => {
    console.log(request.body);
    response.send('Post Berhasil !');
  },
  patchProduct: (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    response.send('Patch Berhasil !');
  },
  deleteProduct: (request, response) => {
    response.send('Delete Berhasil !')
  }
}