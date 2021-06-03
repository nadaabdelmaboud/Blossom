const Joi = require("joi");
const FeedbackValidation = {
    async validateFeedback(feedback){
        const schema = Joi.object({
          comment: Joi.string(),
          rate: Joi.number().integer().min(0).max(5),
        });
        return schema.validate(feedback);
    },
    async validateDeleteFeedback(feedback){
        if (!feedback || Object.keys(feedback).length === 0) return false;
        return true;
    }
};
module.exports = FeedbackValidation;