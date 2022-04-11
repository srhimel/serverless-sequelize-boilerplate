
exports.Product = {
    category: (parent, args, { db }) => db.categories.find(category => category.id === parent.categoryId),
    reviews: (parent, args, { db }) => db.reviews.filter(review => review.productId === parent.id)
}