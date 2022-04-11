const { v4: uuid } = require('uuid');
exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name: name
        }
        db.categories.push(newCategory);
        return newCategory;
    },

    addProduct: (parent, { input }, { db }) => {
        const { name, price, onSale, categoryId, image, quantity, description } = input;
        const neProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId
        }

        db.products.push(neProduct);
        return neProduct;
    },
    deleteCategory: (parent, { id }, { db }) => {

    }
}