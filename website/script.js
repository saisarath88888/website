let f2=(a,b)=>a+b
let f4=(a,b)=>a+b
let demo=()=>
{
  console.log("hi")
}
function demo1()
{
  let a=[1,2,3,4]
  let arr=[]
  for(let i=0;i<a.length;i++)
    {
    arr.push(a[i]+100)
  }
  let p=a.map((i)=>i+10)
  let q=a.filter((i)=>i>2)
  let [r,...s]=[100,200,500,300]
  let user={
    id:100,
    name1:"Sarath",
    dsp:function(){
      console.log(this.id+this.name1)
    }
  }
  user.dsp()
}

function f5()
{
  console.log("a")
  setTimeout(()=>
  {
    console.log("b")
  }
  ,100)
  console.log("c")
}