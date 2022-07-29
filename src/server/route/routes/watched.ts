import {Types} from 'mongoose';
import router from '../router';
import {Watched} from '../../models';
import {Request, Response} from "express";
import {IWatched} from "../../interfaces/IWatched";
import {IError} from '../../interfaces/IError';

router.route('/watched')
    .get(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/watched`)
      if (!req.body) {
        const error : IError = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      try {
        // FETCH ALL WATCHED NFT METADATA ASSOCIATED WITH USER ID
        const response = await Watched.find({ watched: true });
        console.log('Documents successfully retrieved from MongoDB');
        res.json(response);
      } catch (err) {
        const error: IError = {
          status: 500,
          message: `Unable to fulfull GET request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .post(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/watched`)
      if (!req.body) {
        const error : IError = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // SAVE POSTED METADATA IN WATCHED COLLECTION
      const { tokenId, ownerAddress, contractAddress, image, title, description, attributes, userId, watched }: IWatched = req.body;
        const Attempt: IWatched = new Watched({ _id: Types.ObjectId(), tokenId, ownerAddress, contractAddress, image, title, description, attributes, userId, watched });
        try {
          const saveAttempt: IWatched = await Attempt.save();
          console.log(`Document successfully stored in MongoDB ${tokenId}`);
          res.status(201).json(saveAttempt);
        } catch (err) {
          const error: IError = {
            status: 500,
            message: `Unable to fulfull POST request: ${err}`
          };
          console.log(err);
          res.status(error.status).json(error);
        }
    })
    .put(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/watched`)
      if (!req.body) {
        const error: IError = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DECONSTRUCT REQ.BODY OBJECT FOR SECURITY PURPOSES
      const { tokenId, ownerAddress, contractAddress, image, title, description, attributes, userId, watched }: IWatched = req.body;
      // RECONSTRUCT PARAMS OBJECT TO DELETE PROPERTIES WITH UNDEFINED VALUES TO PREVENT OVERWRITING WITH NULL
      const params: any = { ownerAddress, contractAddress, image, title, description, attributes, userId, watched };
      for (const prop in params) if(!params[prop]) delete params[prop];
      try {
        const response = await Watched.findOneAndUpdate({ tokenId: tokenId }, params, { upsert: true, useFindAndModify: false })
        console.log(`Document successfully updated in MongoDB: ${tokenId}`);
        res.status(200).json(response);
      } catch (err) {
        const error: IError = {
          status: 500,
          message: `Unable to fulfull PUT request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .delete(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/watched`)
      if (!req.body) {
        const error: IError = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DELETE NFT METADATA BY TOKENID
      const { tokenId }: { tokenId: string } = req.body;
      try {
        const response = await Watched.deleteOne({ tokenId: tokenId });
        console.log(`Document successfully deleted from MongoDB: ${tokenId}`);
        res.status(200).json(response);
      } catch (err) {
        const error: IError = {
          status: 500,
          message: `Unable to fulfull DELETE request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    });



export default router;
