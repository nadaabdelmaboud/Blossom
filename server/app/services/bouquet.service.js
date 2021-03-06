const BouquetValidation = require('../validation/bouquet.validation')
const MongooseValidation = require('../validation/mongoose.validation')
const Bouquet = require('../db/queries/bouquet.queries')
const error = require('../validation/error');

const BouquetService={

        async getBouquets(query){
            const isValid =await BouquetValidation.getBouquets(query);
            if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
            const bouquets = await Bouquet.getBouquets(query.pageNumber,query.pageSize,query.category,query.sentiment);
            if(!bouquets||bouquets.bouquets.length==0){
                return {data:false,err:await error("No Bouquets found",404)}
            }
            return {data:bouquets,err:''}
        },
        async getBouquetById(id){
            const isVlidId = await MongooseValidation.validateID(id);
            if(!isVlidId) return {data:false,err:await error("Not Valid ID",400)}
            const bouquet = await Bouquet.getBouquetById(id);
            if(!bouquet) return {data:false,err:await error("No Bouquet found",404)}

            return {data:bouquet,err:''}
        },
        async createBouquet(bouquet){
            const isValid = await BouquetValidation.createBouquet(bouquet)
            if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
            bouquet = await Bouquet.createBouquet(bouquet)
            if(!bouquet) return {data:false,err:await error("Error in creating new bouquet",403)}
            
            return {data:true,err:''}
        },
        async updateBouquet(bouquet,id){
            const isValidId = await MongooseValidation.validateID(id)
            if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
            var filteredBouquet = await BouquetValidation.filterBouquet(bouquet);
            const isValid = await BouquetValidation.updateBouquet(filteredBouquet)
            if(isValid.error) return {data:false,err:await error(isValid.error.message,400)}
            filteredBouquet = await Bouquet.updateBouquet(filteredBouquet, id);
            if(!filteredBouquet) return {data:false,err:await error("Error in updating bouquet",403)}
            return { data: filteredBouquet, err: "" };

        },
        async deleteBouquet(bouquetId){
            const isValidId = await MongooseValidation.validateID(bouquetId)
            if(!isValidId) return {data:false,err:await error("Not Valid ID",400)}
            const success = await Bouquet.deleteBouquet(bouquetId)
            if(!success) return {data:false,err:await error("Error in deleting bouquet",403)}
            return {data:true,err:''}
        },
       
}
module.exports=BouquetService;