import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user'
  protected tableName_1 = 'blog'
  protected listDomain = [
    'Droit du travail',
    'Droit etranger',
    'Droit du numerique',
    'Propriete intellectuelle',
    'Droit fiscal',
    'Droit des societes',
    'Droit civil',
    'Veille juridique',
  ]
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned().primary()
      table.string('username').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
    })

    this.schema.createTable(this.tableName_1, (table) => {
      table.increments('id').unsigned().primary()
      table.integer('author_id').unsigned().references('user.id').onDelete('CASCADE')
      table.string('title', 20).notNullable()
      table.enu('label', this.listDomain, {
        useNative: true,
        enumName: 'blog_domain',
        existingType: false,
      })
      table.string('preface', 200).notNullable()
      table.string('content').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName_1)
    this.schema.dropTable(this.tableName)
  }
}
