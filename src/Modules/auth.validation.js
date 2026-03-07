import joi from "joi";
import { CommonFieldValidation } from "../Middleware/validation.middleware.js";

export const loginSchema = joi.object({}).keys({
    email: CommonFieldValidation.email.required(),
    password: CommonFieldValidation.password.required(),
})
.xor("userName", "email")
.messages({
    "object.missing": "Either userName or email is required",
})
.required();

export const signupSchema = {
    query : joi.object({}).keys({
    lang: joi.string().valid("ar", "en" ,"fr").required(),
}),
    body:joi.object({}).keys({
    userName: CommonFieldValidation.userName.required(),
    email: CommonFieldValidation.email.required(),
    password: CommonFieldValidation.password.required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),
    phone: CommonFieldValidation.phone,
    DOB: CommonFieldValidation.DOB,
    gender: CommonFieldValidation.gender
})
.required(),

}