import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'
import Blog from '../../app/Models/Blog'
import Env from '@ioc:Adonis/Core/Env'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      username: 'Cousine',
      email: 'test@gmail.com',
      password: Env.get('PASSWORD'),
    })

    await Blog.createMany([
      {
        author_id: 1,
        title: 'test',
        label: 'Droit etranger',
        preface:
          'Le secteur de la restauration est soumis à un ensemble de règles juridiques spécifiques, qui encadrent les droits et obligations des restaurateurs. Dans cet article, nous vous proposons un tour d’horizon complet des principales dispositions législatives et réglementaires applicables aux professionnels de la restauration. Vous y trouverez des conseils pratiques pour vous conformer aux exigences légales et assurer le succès de votre établissement.',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit du travail',
        preface:
          'Le secteur de la restauration est soumis à un ensemble de règles juridiques spécifiques, qui encadrent les droits et obligations des restaurateurs. Dans cet article, nous vous proposons un tour d’horizon complet des principales dispositions législatives et réglementaires applicables aux professionnels de la restauration. Vous y trouverez des conseils pratiques pour vous conformer aux exigences légales et assurer le succès de votre établissement.',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit etranger',
        preface:
          'Le secteur de la restauration est soumis à un ensemble de règles juridiques spécifiques, qui encadrent les droits et obligations des restaurateurs. Dans cet article, nous vous proposons un tour d’horizon complet des principales dispositions législatives et réglementaires applicables aux professionnels de la restauration. Vous y trouverez des conseils pratiques pour vous conformer aux exigences légales et assurer le succès de votre établissement.',
        content: 'moh',
      },
      {
        author_id: 1,
        title: 'test',
        label: 'Droit du travail',
        preface:
          'Le secteur de la restauration est soumis à un ensemble de règles juridiques spécifiques, qui encadrent les droits et obligations des restaurateurs. Dans cet article, nous vous proposons un tour d’horizon complet des principales dispositions législatives et réglementaires applicables aux professionnels de la restauration. Vous y trouverez des conseils pratiques pour vous conformer aux exigences légales et assurer le succès de votre établissement.',
        content: 'moh',
      },
    ])
  }
}
