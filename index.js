import express from 'express';
const app = express();
app.use(express.json())
let teaData=[]
let nextId=1
const loggingmiddleware=(req,res,next)=>{
  console.log(`${req.method} ${req.path}`)
  next()
}
app.use(loggingmiddleware)
app.get('/inta',(req,res)=>{
  res.send("instaid")
})
app.post('/teas',(req,res)=>{
  const {name,price}=req.body
  const newTea={id:nextId++,name,price}
  teaData.push(newTea)
  res.status(200).send(newTea)
})
app.get('/teas',(req,res)=>{
  res.send(teaData)
})
app.get("/teas/:id",(req,res)=>{
const tea=teaData.find((tea)=>{
   return tea.id===parseInt(req.params.id)
})
console.log(tea)
if(!tea){
  return res.status(404).send("tea not found")}
return res.status(200).send(tea)


})

app.put('/teas/:id',(req,res)=>{
  
  const tea=teaData.filter((tea)=>{
    return tea.id === parseInt(req.params.id)
  })
  if(!tea){
    return res.status(404).send("tea not found")}
  const{name,price}=req.body
  tea.name=name
  tea.price=price
  return res.status(200).send(tea)
})
app.delete('/teas/:id',(req,res)=>{
  const teaind=teaData.indexOf((tea)=>{
    t.id === parseInt(req.params.id) 
  })
  if(teaind===-1){
    return res.status(404).send("tea not found")
  }
  teaData.splice(teaind,1)
  res.status(200).send(teaData)
  i

  })

const port = 2000
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// const a=[
//   {
//     "name":"sriam3",
//     "price":"3000"
//   },
//   {
//     "name":"sriam1",
//     "price":"2000",
//   },
  
// ]
// const b=a.find((ele)=>{
//   return ele.name==="sriam3"
// })
// console.log(b)