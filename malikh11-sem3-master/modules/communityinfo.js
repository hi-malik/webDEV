import sqlite from 'sqlite-async'


class communityinfo {


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
		const sql ='SELECT users.user, communityinfo.* FROM communityinfo, users\
                  WHERE communityinfo.userid = users.id;'
		const communityinfo = await this.db.all(sql)
		for (const index in communityinfo) {
			if (communityinfo[index].photo === null ) communityinfo[index].photo === 'avatar.jpg'
			const dateTime = new Date(communityinfo[index].lastAdded)
			const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			communityinfo[index].lastAdded = date
		}
		return communityinfo
	}
	async getByID(id) {
		try{
			const sql = `SELECT users.user, communityinfo.* FROM communityinfo, users\
                  WHERE communityinfo.userid = users.id AND communityinfo.id = ${id};`
			console.log(sql)
			const communityinfo =await this.db.get(sql)
			if(communityinfo.photo === null) communityinfo.photo = 'avatar.jpg'
			const dateTime = new Date(communityinfo.lastAdded )
			const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			communityinfo.lastAdded = date
			return communityinfo
		} catch(err) {
			console.log(err)
			throw err
		}
	}

}

export default communityinfo