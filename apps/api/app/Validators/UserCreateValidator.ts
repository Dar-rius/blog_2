import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserCreateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    username: schema.string(),
    email: schema.string(),
    password: schema.string(),
    password2: schema.string(),
  })

  public messages: CustomMessages = {
    'require': 'This {{field}} is important to create user',
    'email.unique': 'This email already exist',
  }
}
