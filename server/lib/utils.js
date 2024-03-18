const paginateAndRespond = (items, page, pageSize = 10) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);

    return {
        items: paginatedItems,
        currentPage: page,
        totalPages: Math.ceil(items.length / pageSize)
    };
}

module.exports = {
    paginateAndRespond
}