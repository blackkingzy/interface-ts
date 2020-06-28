import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model tag
 */
class Tag {
    /**
     * create tag
     * @param ctx
     */
    @post("/tag")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        name: { type: "string", required: true },
    })
    async create(ctx: koa.Context) {
        const tag = ctx.model.tag;
        ctx.body = "欢迎来到标签模块";
    }

    /**
     * update tag
     * @param ctx
     */
    @put("/tag")
    @body({
        _id: { type: "string", required: true },
        name: { type: "string", required: true },
    })
    async update(ctx: koa.Context) {
        const tag = ctx.model.tag;
        ctx.body = "欢迎来到标签模块";
    }

    /**
     * delete tag
     * @param ctx
     */
    @del("/tag")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const tag = ctx.model.tag;
        ctx.body = "欢迎来到标签模块";
    }

    /**
     * read tag list
     * @param ctx
     */
    @get("/tag/list")
    async readList(ctx: koa.Context) {
        const tag = ctx.model.tag;
        ctx.body = "欢迎来到标签模块";
    }
}
