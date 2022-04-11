exports.Query = {
    hello: () => 'Hello World!',
    products: (parent, { filter }, { db }) => {
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale) {
                return db.products.filter(product => product.onSale)
            }
            if (avgRating) {
                const filteredProduct = db.products.filter(product => {
                    let sumRating = 0;
                    let numberOfRating = 0;
                    db.reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfRating++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfRating;

                    return avgProductRating >= avgRating;
                })
                return filteredProduct;
            }
        }
        return db.products
    },
    product: (parent, args, { db }) => {
        const productId = args.id;
        const product = db.products.find(product => product.id === productId);
        if (!productId) return null;
        return product
    },
    categories: (parent, args, { db }) => db.categories,
    category: (parent, args, { db }) => {
        return db.categories.find(category => category.id === args.id)
    }
}