import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import Event from './event.model';

/**
 * TypeScript interface for Booking document
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Booking schema definition
 */
const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please provide a valid email address',
      },
    },

    slug: {
      type: String,
      required: [true, 'Slug is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook (Mongoose v7 compatible)
 * Verifies that the referenced event exists
 */
BookingSchema.pre('save', async function () {
  // Only check when eventId is new or modified
  if (!this.isModified('eventId')) return;

  const eventExists = await Event.findById(this.eventId);

  if (!eventExists) {
    throw new Error(
      `Event with ID ${this.eventId.toString()} does not exist. Cannot create booking.`
    );
  }
});

/**
 * Indexes
 */
BookingSchema.index({ eventId: 1 });
BookingSchema.index({ eventId: 1, email: 1 }, { unique: true });

/**
 * Export model (prevents OverwriteModelError)
 */
const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
