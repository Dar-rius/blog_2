import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'
import Blog from '../../app/Models/Blog'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      username: 'Tine',
      email: 'tine@gmail.com',
      password: '@test@',
    })

    await Blog.createMany([
      {
        author_id: 1,
        title: 'test',
        label: 'Droit etranger',
        preface: 'test',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit du travail',
        preface: 'test',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit etranger',
        preface: 'test',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit du travail',
        preface: 'test',
        content: 'moh',
      },
    ])
  }
}
