
import Router from 'koa-router'

const router = new Router({ prefix: '/news' })

import newsinfo from '../modules/newsinfo.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)


router.get('/', async ctx => {
	const Newsinfo = await new newsinfo(dbName)
	try{
		const records = await Newsinfo.all()
		console.log(records)
		ctx.hbs.records = records
		await ctx.render('news', ctx.hbs)
	} catch (err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}

})

router.get('/details/:id',async ctx => {
	const Newsinfo = await new newsinfo(dbName)
	try{
		console.log(`record: ${ctx.params.id}`)
		ctx.hbs.news = await Newsinfo.getByID(ctx.params.id)
		console.log(ctx.hbs)
		ctx.hbs.id = ctx.params.id
		await ctx.render('details', ctx.hbs)
	} catch(err) {
		console.log(err)
		await ctx.render('error', ctx.hbs)
	}
})

router.get('/add', async ctx => {
	await ctx.render('add', ctx.hbs)
})

router.post('/add', async ctx => {
	console.log('adding the customer')
	return ctx.redirect('/news?msg=new customer added')
})
export default router
