const express = require('express')
const Route = require('./../models/map')
const Route2 = require('./../models/map2')
// const article = require('./../models/article')
const router = express.Router()
const Window = require('window');
const window = new Window();

// router.get('/', (req,res)=>{
//     res.send('hello')
// })

router.get('/', (req,res)=>{
    // res.send('Filling details')
    res.render('route/login', {route: new Route()})
})

router.get('/signup', (req,res)=>{
    // res.send('Filling details')
    res.render('route/signup', {route: new Route()})
})

router.get('/login', async(req,res)=>{
    // res.send('Filling details')
    
    res.render('route/login', {routes: new Route()})
})

router.get('/createtest/:id', async(req,res)=>{
  // res.send('Filling details')
   const route = await Route.findById(req.params.id)
  // res.render(req.params.id)
   res.render('route/test',{route: route})
})


router.get('/taketest/:id', async(req,res)=>{
  const route2 = await Route.findById(req.params.id)
   console.log(route2.id)
   try{
  // const route = await Route2.findOne({})
  const r2 = await Route2.find()
  let z=r2.length
  // z=z-1
  let x=0
  console.log(r2[x].id)
  console.log('Before taking test')
  if (r2 == null) 
  res.render('/')
  // let q=0
  for(;x<z;x++) 
  {
  res.render('route/givetest', { r2: r2 ,route2: route2 ,z: z, x: x})
  console.log('after taking test'+(x+1))
   }
}
  catch(e){
    console.log(e)
    res.render('route/login', {routes: new Route()})
   }
})

router.get('/taketestnext/:id/:x/:z', async(req,res)=>{
  const route2 = await Route.findById(req.params.id)
  try{
  let xx= req.params.x 
    let x=parseInt(xx)
  console.log(typeof x)
  console.log('Before updation '+x)
  x=x+1
  const z= req.params.z
  const r2= await Route2.find()
  console.log('Current Index '+x)
  console.log('Person ID: Hit Again '+route2.id)
  console.log('We are trying to give another test, lets see what happens next')
  if(x==z){
    console.log('All test over')
    res.render('route/final', { route2: route2 ,x: x, z: z, r2: r2})
  }
  else
  console.log('colection test ID: Hit Again '+r2[x].id)
  
  if(x<z)
  {
    console.log('Giving Next Test')
  res.render('route/givetest', { route2: route2 ,x: x, z: z, r2: r2})
  }
  }
  catch(e){
    console.log('Error Occured')
    console.log(e)
    res.redirect(`/route/${route2.id}`)
  }
})

router.get('/:id', async(req,res)=>{
    const route = await Route.findById(req.params.id)
    if (route == null) res.render('/')
    if(route.person=='teacher' || route.person=='Teacher')
    res.render('route/ShowTeacher', { route: route })
    else
    res.render('route/ShowStudent', { route: route })
    // res.send(req.params.id)
    
})


router.post('/l6/:id/:x/:z', async (req,res)=>{
  const r=await Route.findById(req.params.id)
  try{
  // console.log('This is the ID')
  // console.log(r.id)
  // console.log(routes.id)
  // console.log(routes2.id)
  // console.log(routes.id)
  console.log('Calculating Now22')
    let a=req.body.qq1
    let b=req.body.qq2
    let c=req.body.qq3
    let d=req.body.qq4
    let e=req.body.qq5
    // let n=req.body.testnumber
    // console.log('Current test number'+(n+1))
    let x=req.params.x
    console.log('Current index (x) value '+x)
    let z=req.params.z
    console.log('size value '+z)
    
    const routes1= await Route2.find()  
    const routes=routes1[x]
    console.log('Person ID '+r.id)
    console.log('Collection ID '+routes.id)
    let v=0
    console.log(routes.a1)
    console.log(a)
    if(routes.a1==a)
    v++;
    if(routes.a2==b)
    v++;
    if(routes.a3==c)
    v++;
    if(routes.a4==d)
    v++;
    if(routes.a5==e)
    v++;
    console.log('Calculated Result')
    console.log(v)

    res.render('route/getresult',{r: r, v: v, x: x, z: z})
  }
  catch(e){
    console.log('Inside /l6')
    console.log(e)
    res.redirect(`/route/${r.id}`)
  }
}) 


router.post('/', async (req,res)=>{
    let route =new Route({
        person : req.body.person,
      email : req.body.email,
      username : req.body.username,
      password : req.body.password
    })
    try {
        route = await route.save()
        console.log('Signed Up')
        res.redirect(`/route/${route.id}`)
      } catch (e) {
        console.log(e)
        res.render('route/signup', { route: route })
      }
    
})

router.post('/l2', async (req,res)=>{
  const routes= await Route.find() 
  // let msg=window.document.getElementById('error')
  let route =new Route({
      username : req.body.username,
      password : req.body.password    
    })
    // console.log(routes[0])
    // console.log(routes.length)
    let i=0
    for(;i<routes.length;i++){
      if(routes[i].username==route.username && routes[i].password==route.password){ 
        console.log('Login Done')
        if(routes[i].person=='Student') {
          console.log('outside Student')
          res.redirect(`/route/${routes[i].id}`)
        }
        else if(routes[i].person=='Teacher') {
          console.log('outside teacher')
          res.redirect(`/route/${routes[i].id}`)
        }
      }
    }
    try{
        if(route.username && route.password){
          console.log('In IF condition')
         res.redirect('/route/login')
        }
      }
      catch{
        console.log('Hit Again')
      }
  }) 
    // let msg=req.body.error1
    // msg.classList.add('error2');
    // let div2 = window.document.createElement('div2')
    // div2="Invalid"
    // let { document } = new Window();
    // console.log(div2)
    // document.getElementById('div2').innerHTML = 'Invalid UserName/PassWord';
    // window.document.getElementById('error').innerHTML='Invalid UserName/PassWord'
    // let msg2=window.document.getElementById('error').innerHTML='Invalid UserName/PassWord'
    // console.log(msg2)
    // console.log(msg)
    // // msg.innerHTML = 'Invalid UserName/PassWord'
    // // console.log(msg)
    // setTimeout(() => msg.remove(), 2000)
  

  
  router.post('/l4/:id', async (req,res)=>{
    let route =new Route2({
      // un: req.body.un,
      q1: req.body.q1,
      a1: req.body.a1,
      q2: req.body.q2,
      a2: req.body.a2,
      q3: req.body.q3,
      a3: req.body.a3,
      q4: req.body.q4,
      a4: req.body.a4,
      q5: req.body.q5,
      a5: req.body.a5
    })
    const routes= await Route.findById(req.params.id)
    try{
        console.log('match')
        route =  route.save()
        res.render('route/testcreated',{routes: routes})
    }
    catch{
      console.log('inside catch block saving questions')
      res.redirect(`/route/${routes.id}`)
      console.log('executing catch last line')
     }
   }) 


module.exports=router;