const mongoose = require('mongoose')
// const marked = require('marked')
// const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)
mongoose.connect('mongodb+srv://KillSwiTch:Qwerty1234@cluster0.o8qjs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

const articleSchema2 = new mongoose.Schema({
    
      q1: {
      type: String,
      required: true
    },
    a1: {
      type: String,
      required: true
    },
    q2: {
        type: String,
        required: true
      },
      a2: {
        type: String,
        required: true
      },
      q3: {
        type: String,
        required: true
      },
      a3: {
        type: String,
        required: true
      },
      q4: {
        type: String,
        required: true
      },
      a4: {
        type: String,
        required: true
      },
      q5: {
        type: String,
        required: true
      },
      a5: {
        type: String,
        required: true
      },
      
    createdAt: {
      type: Date,
      default: Date.now
    }
    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true
    // },
    // sanitizedHtml: {
    //   type: String,
    //   required: true
    // }
})

// articleSchema.pre('validate', function(next) {
//   if (this.title) {
//     this.slug = slugify(this.title, { lower: true, strict: true })
//   }

//   if (this.markdown) {
//     this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
//   }

//   next()
// })
module.exports= mongoose.model('Article2', articleSchema2)