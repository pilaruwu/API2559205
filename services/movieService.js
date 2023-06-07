const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.URI;

class movieService{

    constructor(){}
    //FIND
    async find(){
        const client = new MongoClient(uri)
        try{
            await client.connect()
            const resultado=await client.db('sample_mflix').collection('movies').find({}).skip(1000)
            .limit(5).toArray();
            return resultado;
        }
        catch (e){
            console.error(e)
        }
        finally{
            await client.close()
        }

    }
    //UPDATE
    async actualizarPelicula(id,movie_title,movie_year){
    
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const resultado = await client.db('sample_mflix').collection('movies').updateOne
        ({_id: new ObjectId(id)},
        {$set:{
            title:movie.title, 
            year:body.year
        }})
        return resultado;

    }catch(e){
      console.error(e)
    }finally{
        await client.close()
    }    
}
}
module.exports = movieService;