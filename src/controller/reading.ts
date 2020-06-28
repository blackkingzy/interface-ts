import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model reading
 */
class Reading {
    /**
     * create reading
     * @param ctx
     */
    @post("/reading")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        article_id: { type: "string", required: true },
    })
    async create(ctx: koa.Context) {
        const reading = ctx.model.reading;
        ctx.body = "欢迎来到阅读量模块";
    }
}
