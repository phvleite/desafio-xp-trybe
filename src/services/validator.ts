import Joi from 'joi';

const runSchema = (schema: Joi.ObjectSchema) => (data: unknown) => {
  const { error, value } = schema.validate(data);

  console.log(error);

  if (error) {
    console.log(error);
    let msg = error.details[0].message;
    if (msg.substr(1, 1) === '[') {
      msg = msg.replace(msg.substr(1, 4), '');
    }
    error.message = msg;
    // error.type = error.details[0].type;
    throw error;
  }
  return value;
};

export default runSchema;
