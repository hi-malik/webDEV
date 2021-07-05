import Router from 'koa-router'

const router = new Router({ prefix: '/community' })

import communityinfo from '../modules/communityinfo.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)


router.get('/', async ctx => {
	const Communityinfo = await new Communityinfo(dbName)
	try{
		const records = await Communityinfo.all()
		console.log(records)
		ctx.hbs.records = records
		await ctx.render('community', ctx.hbs)
	} catch (err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}

})

router.get('/details/:id',async ctx => {
	const Communityinfo = await new Communityinfo(dbName)
	try{
		console.log(`record: ${ctx.params.id}`)
		ctx.hbs.community = await Communityinfo.getByID(ctx.params.id)
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
	return ctx.redirect('/community?msg=new customer added')
})
export default router