const joi = require('joi')

it('should joi', function () {
  const schema = joi.object({
    name: joi.string().trim().required()
  })
  const res = schema.validate({name: '1', b: 1}, {allowUnknown: true})
  console.log(res)
})

it('should 1', function () {
  const schema = joi.object({
    page: joi.number().default(1),
    limit: joi.number().default(15)
  })
  const res = schema.validate({page: 1})
  console.log(res)
})

it('should arr', function () {
  const schema = joi.object({
    role_id: joi.number().required(),
    permission: joi.array().items(joi.number()).required()
  })
  const {value, error} = schema.validate({role_id: 1, permission: []})
  if (error) console.log(error.details[0].message)
})
