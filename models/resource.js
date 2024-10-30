import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [
      'job',
      'admission',
      'counseling',
      'exam',
      'applicationForm',
      'news',
      'scheme',
      'result',
      'interview',
      'scholarship',
      'workshop',
      'career-guidance',
      'skill-development'
    ],
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  image: {
    type: String,
    default: '/images/default-news.png'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    default: []
  },
  relatedResources: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Resource',
    default: []
  }
}, { 
  timestamps: true 
});

// Add text index for search functionality
ResourceSchema.index({ 
  title: 'text', 
  summary: 'text', 
  content: 'text',
  tags: 'text'
});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema); 