import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model comment
 */
class Comment {
    /**
     * create comment
     * @param ctx
     */
    @post("/comment")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        content: { type: "string", required: true },
        article_id: { type: "string", required: true },
        author_id: { type: "string", required: true }
    })
    async create(ctx: koa.Context) {
        const comment = ctx.model.comment;
        ctx.body = "欢迎来到评论模块";
    }

    /**
     * delete comment
     * @param ctx
     */
    @del("/comment")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const comment = ctx.model.comment;
        ctx.body = "欢迎来到评论模块";
    }

}
