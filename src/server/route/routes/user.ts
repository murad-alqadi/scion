import { Request, Response } from "express";
import { Types } from 'mongoose';

import { User } from '../../models';
import { IUser } from "../../interfaces/IUser";
import { IError } from '../../interfaces/IError';
import router from '../router';

router.route('/users')
    .get(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/users`)
      if (!req.query) {
        const error = {
          status: 500,
          message: "Nothing found in request query"
        }
        res.status(error.status).json(error);
      }
      try {
        // FETCH ALL DATA ASSOCIATED WITH AUTH ID
        const { authId } = req.query;
        const response = await User.find({ authId: authId });
        console.log('Documents successfully retrieved from MongoDB');
        res.json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull GET request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .post(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/users`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // SAVE NEW USER
      const { authId, username, password, firstName, lastName, albums, currentAlbumId } = req.body;
        const Attempt = new User({ _id: Types.ObjectId(), authId, username, password, firstName, lastName, albums, currentAlbumId });
        try {
          const saveAttempt = await Attempt.save();
          console.log(`Document successfully stored in MongoDB ${authId}`);
          res.status(201).json(saveAttempt);
        } catch (err) {
          const error = {
            status: 500,
            message: `Unable to fulfull POST request: ${err}`
          };
          console.log(err);
          res.status(error.status).json(error);
        }
    })
    .put(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/users`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DECONSTRUCT REQ.BODY OBJECT FOR SECURITY PURPOSES
      const { authId, username, password, firstName, lastName } = req.body;
      // RECONSTRUCT PARAMS OBJECT TO DELETE PROPERTIES WITH UNDEFINED VALUES TO PREVENT OVERWRITING WITH NULL
      const params = { username, password, firstName, lastName };
      for (const prop in params) if(!params[prop]) delete params[prop];
      try {
        const response = await User.findOneAndUpdate({ authId: authId }, params, { upsert: false, useFindAndModify: false })
        console.log(`Document successfully updated in MongoDB: ${authId}`);
        res.status(200).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull PUT request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
      // DELETE: authId
    .delete(async (req: Request, res: Response) => {
      console.log(`Received ${req.method} request at api/users`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      const { authId } = req.body;
      // DELETE USER DATA BY USER ID
      try {
        const response = await User.deleteOne({ authId: authId });
        console.log(`Document successfully deleted from MongoDB: ${authId}`);
        res.status(200).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull DELETE request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    });

    export default router;
