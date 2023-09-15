const coding = ["js","ruby","python","java","cpp"];

coding.forEach(function(val){
   // console.log(val);
})                        // output = js
                          //          ruby
                         //           python
                        //           java
                          //          cpp

// Array Function

coding.forEach((item) => {
   // console.log(item);
});                             // output = js
                                //          ruby
                                //           python
                                //           java
                                //          cpp


// PrintMe function   


function PrintMe(item){
  //  console.log(item);
}
coding.forEach(PrintMe);

                                 // output = js
                                //          ruby
                                //           python
                                //           java
                                //          cpp

 
coding.forEach((item , index,arr) => {
    //console.log(item , index,arr);
});    

//output = js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
//        ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
//        python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
//        java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
//        cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]



const myCoding = [
    {
      languageName : "JavaScript" ,
      languageFileName : "Js" 
    },
    {
      languageName : "Python" ,
      languageFileName : "Py" 
    },
    {
      languageName : "Java" ,
      languageFileName : "Java" 
    },
]

myCoding.forEach((item) => {
    // console.log(item);
});

// output = { languageName: 'JavaScript', languageFileName: 'Js' }
//        { languageName: 'Python', languageFileName: 'Py' }
//        { languageName: 'Java', languageFileName: 'Java' }


myCoding.forEach((item) => {
    console.log(item.languageName);
});

// utput =    JavaScript
//            Python
//            Java