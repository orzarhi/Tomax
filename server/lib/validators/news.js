const { z } = require('zod');

const newsValidator = z.object({
    category: z.string().regex(/^[a-zA-Z]+$/).min(1).max(20),
    page: z.string().regex(/^[0-9]+$/).min(1).max(20)
})

module.exports = { newsValidator }