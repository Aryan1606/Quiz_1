const mongoose = require('mongoose')
// const marked = require('marked')
// const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)
mongoose.connect('mongodb+srv://KillSwiTch:Qwerty1234@cluster0.o8qjs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

const articleSchema = new mongoose.Schema({
    person: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
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
module.exports= mongoose.model('Article', articleSchema)


// mongoose.connect('mongodb://localhost:27017/Quiz', {
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
// })
// mongodb+srv://KillSwiTch:Qwerty1234@cluster0.o8qjs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority