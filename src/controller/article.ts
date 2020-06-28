import koa from "koa";
import { get, post, put, del } from "../../lib/request";
import { query, body } from "../../lib/validator";
/**
 * @model article
 */
class Article {
    /**
     * create article
     * @param ctx
     */
    @post("/article")
    //验证会先走自定义的，然后在是required的判断等等
    @body({
        title: { type: "string", required: true },
        tags: { type: "array", required: true },
        description: { type: "string", required: true },
        content: { type: "string", required: true },
        author_id: { type: "string", required: true }
    })
    async create(ctx: koa.Context) {
        const { article } = ctx.model;
        await article.create({ ...ctx.request.body })
        ctx.body = "创建文章成功";
    }

    /**
     * read article
     * @param ctx
     */
    @get("/article")
    @query({ _id: { type: "string", required: true } })
    async read(ctx: koa.Context) {
        const { article } = ctx.model;
        await article.findById(ctx.request.query._id)
        ctx.body = "查询文章成功";
    }

    /**
     * update article
     * @param ctx
     */
    @put("/article")
    @body({
        _id: { type: "string", required: true },
        title: { type: "string", required: true },
        tags: { type: "array", required: true },
        description: { type: "string", required: true },
        content: { type: "string", required: true },
    })
    async update(ctx: koa.Context) {
        const { article } = ctx.model;
        const { _id } = ctx.request.body;

        const result = await article.findByIdAndUpdate(_id, { ...ctx.request.body }, { new: true })
        console.log(result);

        ctx.body = "更新文章成功";
    }

    /**
     * delete article
     * @param ctx
     */
    @del("/article")
    @query({
        _id: { type: "string", required: true }
    })
    async delete(ctx: koa.Context) {
        const { article } = ctx.model;
        await article.deleteOne({ ...ctx.request.query })
        ctx.body = "删除文章成功";
    }

    /**
     * read article list
     * @param ctx
     */
    @get("/article/list")
    async readList(ctx: koa.Context) {
        const article = ctx.model.article;
        ctx.body = "欢迎来到文章模块";
    }
}
