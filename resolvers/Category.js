exports.Category = {
    products: (parent, { filter }, { db }) => {
        const categorizedProduct = db.products.filter(product => product.categoryId === parent.id)

        if (filter) {
            if (filter.onSale) {
                return categorizedProduct.filter(product => product.onSale)
            }
        }
        return categorizedProduct;
    }
}