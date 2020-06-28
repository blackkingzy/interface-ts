import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * admin Features
 * role permission
 * @model role
 */
class Role {
    /**
     * create role
     * @param ctx
     */
    @post("/role")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
    })
    async create(ctx: koa.Context) {
        const role = ctx.model.role;
        ctx.body = "欢迎来到角色模块";
    }

    /**
     * read role
     * @param ctx
     */
    @get("/role")
    @query({ _id: { type: "string", required: true } })
    async read(ctx: koa.Context) {
        const role = ctx.model.role;
        ctx.body = "欢迎来到角色模块";
    }

    /**
     * update role
     * @param ctx
     */
    @put("/role")
    @body({
    })
    async update(ctx: koa.Context) {
        const role = ctx.model.role;
        ctx.body = "欢迎来到角色模块";
    }

    /**
     * delete role
     * @param ctx
     */
    @del("/role")
    @query({ _id: { type: "string", required: true } })
    async delete(ctx: koa.Context) {
        const role = ctx.model.role;
        ctx.body = "欢迎来到角色模块";
    }

    /**
     * read role list
     * @param ctx
     */
    @get("/role/list")
    async readList(ctx: koa.Context) {
        const role = ctx.model.role;
        ctx.body = "欢迎来到角色模块";
    }
}
