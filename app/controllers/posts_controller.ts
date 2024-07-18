import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
export default class PostsController {
  async index(ctx: HttpContext) {
    const posts = await Post.all()

    return ctx.view.render('pages/posts/index', { title: 'Posts', posts })
  }
}
