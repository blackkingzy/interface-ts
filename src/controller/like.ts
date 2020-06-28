import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model like
 */
class Like {
    /**
     * create like
     * @param ctx
     */
    @post("/like")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        article_id: { type: "string", required: true },
        user_id: { type: "string", required: true }
    })
    async create(ctx: koa.Context) {
        const like = ctx.model.like;
        ctx.body = "欢迎来到点赞模块";
    }

    /**
     * read like
     * @param ctx
     */
    @get("/like")
    @query({ _id: { type: "string", required: true } })
    async read(ctx: koa.Context) {
        const like = ctx.model.like;
        ctx.body = "欢迎来到点赞模块";
    }

    /**
     * cancel like
     * @param ctx
     */
    @del("/like")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const like = ctx.model.like;
        ctx.body = "欢迎来到点赞模块";
    }

    /**
     * read like list
     * @param ctx
     */
    @get("/like/list")
    async readList(ctx: koa.Context) {
        const like = ctx.model.like;
        ctx.body = "欢迎来到点赞模块";
    }
}
