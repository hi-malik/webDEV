
import Router from 'koa-router'

import publicRouter from './public.js'
import newsRouter from'./news.js'

const mainRouter = new Router()

const nestedRoutes = [publicRouter, newsRouter]
for (const router of nestedRoutes) {
	mainRouter.use(router.routes())
	mainRouter.use(router.allowedMethods())
}

export default mainRouter
