import mongoose, { Document, Model, Schema } from 'mongoose';

/**
 * TypeScript interface for Event document
 */
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Event schema definition
 */
const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, 'Overview is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    venue: {
      type: String,
      required: [true, 'Venue is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    mode: {
      type: String,
      required: [true, 'Mode is required'],
      enum: ['online', 'offline', 'hybrid'],
      lowercase: true,
    },
    audience: {
      type: String,
      required: [true, 'Audience is required'],
      trim: true,
    },
    agenda: {
      type: [String],
      required: [true, 'Agenda is required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'Agenda must contain at least one item',
      },
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'Tags must contain at least one item',
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Generate URL-friendly slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Normalize date string to ISO format (YYYY-MM-DD)
 */
function normalizeDate(dateStr: string): string {
  const date = new Date(dateStr);
  
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }
  
  return date.toISOString().split('T')[0];
}

/**
 * Normalize time to 24-hour format (HH:MM)
 */
function normalizeTime(timeStr: string): string {
  // Match various time formats (12-hour and 24-hour)
  const time24HourRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
  const time12HourRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(am|pm)$/i;
  
  // If already in 24-hour format
  if (time24HourRegex.test(timeStr.trim())) {
    const [hours, minutes] = timeStr.trim().split(':');
    return `${hours.padStart(2, '0')}:${minutes}`;
  }
  
  // If in 12-hour format, convert to 24-hour
  const match = timeStr.trim().match(time12HourRegex);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = match[2];
    const period = match[3].toLowerCase();
    
    if (period === 'pm' && hours !== 12) {
      hours += 12;
    } else if (period === 'am' && hours === 12) {
      hours = 0;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  }
  
  throw new Error('Invalid time format. Use HH:MM or HH:MM AM/PM');
}

/**
 * Pre-save hook to auto-generate slug, normalize date and time
 */
EventSchema.pre('save', function (next) {
  // Generate slug only if title is new or modified
  if (this.isModified('title')) {
    this.slug = generateSlug(this.title);
  }
  
  // Normalize date to ISO format
  if (this.isModified('date')) {
    try {
      this.date = normalizeDate(this.date);
    } catch (error) {
      return next(error as Error);
    }
  }
  
  // Normalize time to 24-hour format
  if (this.isModified('time')) {
    try {
      this.time = normalizeTime(this.time);
    } catch (error) {
      return next(error as Error);
    }
  }
  
  next();
});

// Create unique index on slug
EventSchema.index({ slug: 1 }, { unique: true });

// Export model or use existing model to prevent OverwriteModelError
const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
