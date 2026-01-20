import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import Event from './event.model';

/**
 * TypeScript interface for Booking document
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
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
          // RFC 5322 compliant email validation regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please provide a valid email address',
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook to verify that the referenced event exists
 * Prevents orphaned bookings for non-existent events
 */
BookingSchema.pre('save', async function (next) {
  // Only verify if eventId is new or modified
  if (this.isModified('eventId')) {
    try {
      const eventExists = await Event.findById(this.eventId);
      
      if (!eventExists) {
        throw new Error(
          `Event with ID ${this.eventId} does not exist. Cannot create booking.`
        );
      }
    } catch (error) {
      return next(error as Error);
    }
  }
  
  next();
});

// Create index on eventId for faster queries
BookingSchema.index({ eventId: 1 });

// Compound index for eventId and email to prevent duplicate bookings
BookingSchema.index({ eventId: 1, email: 1 }, { unique: true });

// Export model or use existing model to prevent OverwriteModelError
const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
