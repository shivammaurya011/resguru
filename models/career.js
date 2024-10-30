import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: false,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Image must be a valid URL'
    }
  },
  dates: {
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
  },
  type: {
    type: String,
    enum: ['job', 'result', 'admitCard', 'answerKey', 'syllabus', 'admission', 'scheme', 'exam', 'scholarship'],
    required: true
  },
  details: {
    type: String,
    required: true,
    minLength: [10, 'Details must be at least 10 characters long']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
    index: true  
  },
  views: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  },
  relatedCareers: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }], 
    default: [],
    validate: {
      validator: function(v) {
        return v.length <= 5;  
      },
      message: 'Cannot have more than 5 related careers'
    }
  },
  organization: {
    type: String,
    required: false,
    sparse: true,
    enum: {
      values: [
        'UPSC', 'SSC', 'IBPS', 'RRB', 'Defence', 'DRDO', 'Income Tax', 'Indian Post',
        'ISRO', 'Banking', 'Insurance', 'EPFO', 'ESIC', 'Central PSUs', 'UGC', 'CSIR',
        'Teaching', 'KVS', 'NVS', 'Police', 'IB', 'RAW', 'CBI', 'BSF', 'CRPF', 'CISF',
        'Coast Guard', 'State PSC', 'State Police', 'State Teaching', 'State PSUs',
        'Autonomous Bodies', 'Research Institutions', 'Other'
      ],
      message: '{VALUE} is not a valid organization'
    },
    validate: {
      validator: function(v) {
        return v === undefined || v === null || v === '' || this.schema.path('organization').enumValues.includes(v);
      },
      message: 'Invalid organization value'
    }
  },
  state: {
    type: String,
    enum: [
      'All India',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Dadra and Nagar Haveli and Daman and Diu',
      'Delhi',
      'Jammu and Kashmir',
      'Ladakh',
      'Lakshadweep',
      'Puducherry',
      'Not Applicable'
    ],
    default: 'All India'
  },
  organizationDetails: {
    name: {
      type: String,
      required: false
    },
    website: {
      type: String,
      required: false,
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Website must be a valid URL'
      }
    },
    department: {
      type: String,
      required: false,
      enum: [
        '',
        'Ministry of Home Affairs',
        'Ministry of Defence',
        'Ministry of Finance',
        'Ministry of Railways',
        'Ministry of Education',
        'Ministry of Health and Family Welfare',
        'Ministry of External Affairs',
        'Ministry of Agriculture and Farmers Welfare',
        'Ministry of Commerce and Industry',
        'Ministry of Communications',
        'Ministry of Information and Broadcasting',
        'Ministry of Law and Justice',
        'Ministry of Civil Aviation',
        'Ministry of Environment, Forest and Climate Change',
        'Ministry of Power',
        'Ministry of Rural Development',
        'Ministry of Science and Technology',
        'Ministry of Skill Development and Entrepreneurship',
        'Ministry of Tourism',
        'Ministry of Tribal Affairs',
        'Ministry of Urban Development',
        'Ministry of Women and Child Development',
        'Ministry of Youth Affairs and Sports',
        'Department of Space',
        'Department of Atomic Energy',
        'Department of Revenue',
        'Department of Personnel and Training',
        'Department of Posts',
        'Department of Telecommunications',
        'State Department',
        'Other'
      ]
    },
    contactEmail: {
      type: String,
      required: false
    },
    contactPhone: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  },
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

CareerSchema.index({ title: 'text', details: 'text' });
CareerSchema.index({ organization: 1, state: 1 });

CareerSchema.pre('save', function(next) {
  if (this.dates.startDate && this.dates.endDate) {
    if (this.dates.startDate > this.dates.endDate) {
      next(new Error('Start date must be before or equal to end date'));
    }
  }
  next();
});

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);