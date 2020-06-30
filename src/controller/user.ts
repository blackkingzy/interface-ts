import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
import { generate } from "../../lib/jwt"
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
     * read user
     * @param ctx
     */
    @get("/user")
    // @query({ _id: { type: "string", required: true } })
    async read(ctx: koa.Context) {
        const params = {
            code: 20000,
            data: {
                roles: ["admin"],
                introduction: "I am a super administrator",
                avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                name: "Super Admin"
            }
        }
        ctx.body = params
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

    /**
     * login
     * @param ctx
     */
    @post("/login", { tokenVerify: false })
    async login(ctx: koa.Context) {
        const userInfo = { name: 'admin', password: '123456' }
        const userToken = generate(userInfo)
        const params = {
            code: 20000,
            data: userToken
        }
        ctx.body = params
    }

    /**
     * logout
     * @param ctx
     */
    @post("/logout", { tokenVerify: false })
    async logout(ctx: koa.Context) {
        const params = { code: 20000, data: "success" }
        ctx.body = params
    }
}
