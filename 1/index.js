



 function student(names,age,cgpa,lang){

    this.names= names;
    this.age= age;
    this.cgpa= cgpa;

    this.lang= lang;

    this.display = function(){

        console.log(this.names);

      console.log(this.age);

      console.log(this.cgpa);
      console.log(this.lang);


    }

}

var student1 = new student("roy",25,3.92,["bangali","hindi","english"]);


var student2 = new student("proshnzit",47,3.22,["bangali","hindi","english"]);

var student3 = new student("subroto",45,3.2,["bangali","hindi","english"]);

student1.display();

student2.display();

student3.display();





















































