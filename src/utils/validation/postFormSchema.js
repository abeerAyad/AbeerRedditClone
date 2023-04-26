const Joi = require('joi');

const postFormSchema = Joi.object({
  title: Joi.string().required(),
  image_url: Joi.string().allow('')
    .optional(),
  content_post: Joi.string()
    .allow('')
    .optional(),
});

module.exports = postFormSchema;
