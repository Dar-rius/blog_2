import Route from '@ioc:Adonis/Core/Route'

// Route group for User
Route.group(() => {
  Route.post('/signup', 'UserController.register'),
    Route.post('/signin', 'UserController.login'),
    Route.get('/logout', 'UserController.logout').middleware('auth:api')
}).namespace('App/Controllers')

// Route group for blog
Route.group(() => {
  Route.get('/all-blog', 'BlogController.index'),
    Route.get('/blog/:id', 'BlogController.getBlog'),
    Route.post('/create-blog', 'BlogController.createBlog').middleware('auth:api'),
    Route.put('/edit-blog-metadata/:id', 'BlogController.updateMetaData').middleware('auth:api'),
    Route.put('/edit-blog-file/:id', 'BlogController.updateFile').middleware('auth:api'),
    Route.delete('/delete-blog/:id', 'BlogController.deleteBlog').middleware('auth:api')
}).namespace('App/Controllers')
