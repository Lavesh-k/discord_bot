import Joi from 'joi'

export const studentEmailSchema = Joi.string().email().required()

