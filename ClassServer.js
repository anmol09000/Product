var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
var port=process.env.PORT||2450;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let pageSize=3;
customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];

app.post("/login",function(req,res){
  let body = req.body;
  let cust = customers.find((a)=>a.email===body.email && a.password===body.password);
  if(cust){
    res.send({name:cust.name,email:cust.email,role:cust.role});
  }else{
    res.status(500).send("Login Failed !!");
  }
});
app.post("/register",function(req,res){
  let body = req.body;
  let newId = customers.reduce((acc,curr)=>curr.custId>acc?curr.custId:acc ,0);
  let cust = {custId:newId+1,...body};
  customers.push(cust);
  if(body.role==="student"){
    let Id=students.reduce((acc,curr)=>curr.id>acc?curr.id:acc ,0);
    let student = {id:Id+1,name:body.name,courses:[]};
    students.unshift(student);
  }
  if(body.role==="faculty"){
    let Id=faculties.reduce((acc,curr)=>curr.id>acc?curr.id:acc ,0);
    let student = {id:Id+1,name:body.name,courses:[]};
    faculties.unshift(student);
  }
  let obj = {...body};
  delete obj.password;
  res.send(obj);
});
app.get("/getStudentNames",function(req,res){
  let array = makeArray(students);
  res.send(array);
});
app.get("/getFacultyNames",function(req,res){
  let array = makeArray(faculties);
  res.send(array);
})
let makeArray=(arr)=>{
  let json={};
  json.name=makeDiffVals(arr,"name");
  return json;
}
let makeDiffVals=(arr,name)=>
  arr.reduce((acc,curr)=>acc.find((b)=>b===curr[name])?acc:[...acc,curr[name]], []);

app.get("/getCourses",function(req,res){
  res.send(courses);
});
app.put("/putCourse",function(req,res){
  let body = req.body;
  let index = courses.findIndex((a)=>a.code===body.code);
  if(index>=0){
    let updated = {courseId:body.courseId,name:body.name,code:body.code,description:body.description,students:body.students,faculty:body.faculty};
    students.map((a)=>{
      if(updated.students.includes(a.name)){
        if(!a.courses.includes(updated.name)){
          a.courses.push(updated.name);
        }
      }
    })
    faculties.map((a)=>{
      if(updated.faculty.includes(a.name)){
        if(!a.courses.includes(updated.name)){
          a.courses.push(updated.name);
        }
      }
    })
    courses[index]=updated;
    res.send(updated);
  }else{
    res.status(404).send("Not Found");
  }
});

app.get("/getStudents",function(req,res){
  let pageNum = req.query.page ? +req.query.page : 1;
  let courses = req.query.course;
  let data = students;
  data = filterParam(data,"courses",courses);
  console.log(data);
  res.send(makeData(data,pageNum,pageSize));
})
let filterParam = (arr, name, value) => {
  if (!value) return arr;
  let valueArr = value.split(",");
  let arr1 = arr.filter((student) =>valueArr.find((course) => student[name].includes(course)))
  return arr1;
}
let makeData=(arr,pageNum,pageSize)=>{
  let page = pageNum;
  let startIndex=(pageNum-1)*pageSize;
  let endIndex=arr.length>startIndex+pageSize-1?startIndex+pageSize-1:arr.length-1;
  let data1 = arr.filter((a,index)=>index>=startIndex && index <=endIndex);
  let FullData = {
    page : page,
    items : data1,
    totalItems : data1.length,
    totalNum : arr.length,
  }
  return FullData;
}

app.get("/getFaculties",function(req,res){
  let page = req.query.page ? +req.query.page : 1;
  let courses = req.query.course;
  let data = faculties;
  data = filterParam(data,"courses",courses)
  res.send(makeData(data,page,pageSize));
})

app.post("/postStudentDetails",function(req,res){
  let body = req.body;
  let index = students.findIndex((a)=>a.name===body.name);
  if(index>=0){
    let obj = students[index];
    let updatedData = {id:obj.id, ...body ,courses:[]}
    students[index] = updatedData;
    res.send(updatedData);
  }else{
    res.status(500).send("Server Error.");
  }
});
app.get("/getStudentDetails/:name",function(req,res){
  let name = req.params.name;
  let student = students.find((a)=>a.name===name);
  if(student){
    res.send(student);
  }else{
    res.status(500).send("Server Error.");
  }
});
app.get("/getStudentCourse/:name",function(req,res){
  let name = req.params.name;
  let data = courses.filter((a)=>a.students.includes(name));
  if(data){
    res.send(data);
  }else{
    res.status(500).send("Server Error.");
  }
})
app.get("/getStudentClass/:name",function(req,res){
  let studentName = req.params.name;
  const data = classes.filter((cls) =>courses.find((a)=>a.students.includes(studentName)&&a.name===cls.course));
  if(data){
    res.send(data);
  }else{
    res.status(500).send("Server Error.");
  }
});
app.get("/getFacultyCourse/:name",function(req,res){
  let name = req.params.name;
  let data = courses.filter((a)=>faculties.find((b)=>b.name===name && b.courses.includes(a.name)));
  if(data){
    res.send(data);
  }else{
    res.status(500).send("Server Error.");
  }
});
app.get("/getFacultyClass/:name",function(req,res){
  let name = req.params.name;
  let data = classes.filter((a)=>a.facultyName===name);
  if(data.length>0){
    res.send(data);
  }else{
    res.status(500).send("Server Error.");
  }
});
app.post("/postClass",function(req,res){
  let body = req.body;
  let newId = classes.reduce((acc,curr)=>curr.classId>acc?curr.classId:acc ,0);
  let data = {classId:newId+1,...body};
  classes.push(data);
  res.send(data);
})

app.put("/postClass/:classId",function(req,res){
  let classId = +req.params.classId;
  let body = req.body;
  let index = classes.findIndex((a)=>a.classId===classId);
  if(index>=0){
    let updated = {classId:classId,...body};
    classes[index]=updated;
    res.send(updated);
  }else{
    res.status(404).send("Not Found")
  }
})
