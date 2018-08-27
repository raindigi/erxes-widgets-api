import { Document, Schema } from "mongoose";
import { NOTIFICATION_TYPES } from "../../../data/constants";
import { field } from "../utils";

export interface INotification {
  notifType?: string;
  title?: string;
  content?: string;
  link?: string;
  receiver?: string;
}

export interface INotificationDocument extends INotification, Document {
  _id: string;
  createdUser: string;
  receiver: string;
  date: Date;
  isRead: boolean;
}

export const notificationSchema = new Schema({
  _id: field({ pkey: true }),
  notifType: field({
    type: String,
    enum: NOTIFICATION_TYPES.ALL
  }),
  title: field({ type: String }),
  link: field({ type: String }),
  content: field({ type: String }),
  createdUser: field({ type: String }),
  receiver: field({ type: String }),
  date: field({
    type: Date,
    default: Date.now
  }),
  isRead: field({
    type: Boolean,
    default: false
  })
});

export interface IConfigDocument extends Document {
  _id: string;
  user: string;
  notifType: string;
  isAllowed: boolean;
}

export const configSchema = new Schema({
  _id: field({ pkey: true }),
  // to whom this config is related
  user: field({ type: String }),
  notifType: field({
    type: String,
    enum: NOTIFICATION_TYPES.ALL
  }),
  isAllowed: field({ type: Boolean })
});
