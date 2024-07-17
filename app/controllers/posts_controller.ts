import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
     index (ctx :HttpContext){
            return ctx.view.render('pages/posts/index', {title:"Posts"})
    }
    
}