

import sqlite from 'sqlite-async'


class newsinfo {


	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			//table to store user account
			const sql ='CREATE TABLE IF NOT EXISTS newsinfo(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        userid INTEGER,\
        title TEXT,\
        headline TEXT,\
        lastAdded INTEGER,\
        FOREIGN KEY(userid) REFERENCES users(id)\
      );'
			await this.db.run(sql)
			return this
		})()
	}


	async all() {
		const sql ='SELECT users.user, newsinfo.* FROM newsinfo, users\
                  WHERE newsinfo.userid = users.id;'
		const newsinfo = await this.db.all(sql)
		for (const index in newsinfo) {
			if (newsinfo[index].photo === null ) newsinfo[index].photo === 'avatar.jpg'
			const dateTime = new Date(newsinfo[index].lastAdded)
			const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			newsinfo[index].lastAdded = date
		}
		return newsinfo
	}
	async getByID(id) {
		try{
			const sql = `SELECT users.user, newsinfo.* FROM newsinfo, users\
                  WHERE newsinfo.userid = users.id AND newsinfo.id = ${id};`
			console.log(sql)
			const newsinfo =await this.db.get(sql)
			if(newsinfo.photo === null) newsinfo.photo = 'avatar.jpg'
			const dateTime = new Date(newsinfo.lastAdded )
			const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			newsinfo.lastAdded = date
			return newsinfo
		} catch(err) {
			console.log(err)
			throw err
		}
	}

}

export default newsinfo
