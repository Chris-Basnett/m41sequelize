const yargs = require('yargs')
const {sequelize} = require("./db/connection")
const {createMovie, readMovies} = require('./movie/movieFunction')


const app = async (yargsObject) =>{
    try{
        await sequelize.sync()
        if (yargsObject.create){
            await createMovie({ title: yargsObject.title, actor : yargsObject.actor})
            // console.log(await readMovies())
            let output = {}
            let table = await readMovies()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }else if (yargsObject.read){
            console.log(await readMovies({[yargsObject.key] : yargsObject.value}))
        }else if (yargsObject.update){
            // add update funct
        }else if (yargsObject.delete){
            // add delete funct
        }else{
            console.log("Incorrect command")
        }
        await sequelize.close()
    }catch (error){
        console.log(error)
        await sequelize.close()
    }
}


app(yargs.argv)