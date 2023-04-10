import Joi from 'joi'

export const AuthSchemaRegister = Joi.object({
  firstName: Joi.string().max(17).required(),
  lastName: Joi.string().max(17).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  repeat_password: Joi.ref('password'),
  picture: Joi.string().required(),
  age: Joi.number()
})

export const AuthSchemaLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})