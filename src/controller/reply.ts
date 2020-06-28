import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model reply
 */
class Reply {
    /**
     * create reply
     * @param ctx
     */
    @post("/reply")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        content: { type: "string", required: true },
        comment_id: { type: "string", required: true },
        article_id: { type: "string", required: true },
        author_id: { type: "string", required: true }
    })
    async create(ctx: koa.Context) {
        const reply = ctx.model.reply;
        ctx.body = "欢迎来到回复模块";
    }

    /**
     * delete reply
     * @param ctx
     */
    @del("/reply")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const reply = ctx.model.reply;
        ctx.body = "欢迎来到回复模块";
    }
}
