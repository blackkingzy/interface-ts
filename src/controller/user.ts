import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model user
 */
class User {
    /**
     * admin Features
     * create user
     * @param ctx
     */
    @post("/user")
    //验证会先走自定义的，然后在是required的判断等等
    @body({ _id: { type: "string" } })
    async create(ctx: koa.Context) {
        const user = ctx.model.user;
        ctx.body = "欢迎来到用户模块";
    }

    /**
     * admin Features
     * read user
     * @param ctx
     */
    @get("/user")
    @query({ _id: { type: "string", required: true } })
    async read(ctx: koa.Context) {
        const user = ctx.model.user;
        ctx.body = "欢迎来到用户模块";
    }

    /**
     * update user
     * @param ctx
     */
    @put("/user")
    @body({

    })
    async update(ctx: koa.Context) {
        const user = ctx.model.user;
        ctx.body = "欢迎来到用户模块";
    }

    /**
     * admin Features
     * delete user
     * @param ctx
     */
    @del("/user")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const user = ctx.model.user;
        ctx.body = "欢迎来到用户模块";
    }

    /**
     * admin Features
     * read user list
     * @param ctx
     */
    @get("/user/list")
    async readList(ctx: koa.Context) {
        const user = ctx.model.user;
        ctx.body = "欢迎来到用户模块";
    }
}
