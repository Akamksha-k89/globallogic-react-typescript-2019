import * as restful from "../../core/restful";


const config = {
    apiEndPoint: 'http://localhost:7070'
}

export async function getProducts() {
    return restful.getJson(config.apiEndPoint + "/products")
}

//GET /api/products/12345
export async function  getProduct(id: any) {
    return restful.getJson(config.apiEndPoint + "/products/" + id)
}

export async function getBrands() {
        return restful.getJson(config.apiEndPoint + "/brands")
}

export async function searchProducts(q: any) {
    return restful.getJson(config.apiEndPoint + "/products?q=" + q)
}
 

//create new using PUT method
// PUT /api/products/1234
// {{body data in json format}}
export async function updateProduct(product: any) {
    return restful.putJson(config.apiEndPoint + '/products/' 
                         + product.id, product)
}

//create new using POST method
// POST /api/products
// {{body data in json format}}
export async function createProduct(product: any) {
        return restful.postJson(config.apiEndPoint +'/products',
                                product)
}

export async function saveProduct(product: any) {
        if (product.id)
            return updateProduct(product);
        
        return createProduct(product);
}

export async function  deleteProduct(id: any) {
    console.log("Deleting ", id);
    return restful.deleteJson(config.apiEndPoint + "/products/" + id)
}