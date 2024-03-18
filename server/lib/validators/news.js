const { z } = require('zod');

const newsValidator = z.object({
    category: z.string().regex(/^[a-zA-Z]+$/).min(1).max(20).optional(),
    page: z.number().min(1).max(10)
})

module.exports = { newsValidator }