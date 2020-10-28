import Joi from 'joi';

exports.roleValidation = (data) => {
  const schema = Joi.object({
    role: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(5).max(500).required()
  });
  return schema.validate(data);
};


exports.updateValidation = (data) => {
  const schema = Joi.object({
    role: Joi.string().min(2).max(50).required(),
    permissions: Joi.object().required()
  });
  return schema.validate(data);
};

exports.deleteValidation = (data) => {
    const schema = Joi.object({
        role: Joi.string().min(2).max(50).required()
    });
    return schema.validate(data);
};