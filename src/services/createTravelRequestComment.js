import db from '../models'
import dbViolationError from '../utils/dbViolationError'
export function createTravelComment(req, res, query, next) {
    db.TravelComments.create(query)
        .then(tCommentData => {
            res.status(200).json({message:"comment created successfully", tCommentData})
        })
        .catch(err => {
            switch(err.parent.code){
                case '23503':
                    res.status(400).json({message:"Travel request with this id does not exist."})
                    break
                default:
                    next(err)
            }
            
        })
}