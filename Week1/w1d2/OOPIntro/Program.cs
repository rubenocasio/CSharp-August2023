// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
//dotnet new console -f net6.0 -o OOPIntro


Person personOne = new Person("Kurt", "Clausen");
Person personTwo = new Person("Ben", "Gomez");
Person personThree = new Person("James", "Watson");

// Console.WriteLine(personOne.FirstName);
// Console.WriteLine(personOne.LastName);
// Console.WriteLine(personOne.FullName());

Student studentOne = new Student("Aaron", "Hsu", "C#", 1039);
Student studentTwo = new Student("Aleksey", "Kashubin", "C#", 0552);
Student studentThree = new Student("Nicholas", "Tangsouvanh", "C#", 6754);

// Console.WriteLine(studentOne.FullName());
// Console.WriteLine(studentOne.CurrentStack);
// Console.WriteLine(studentOne.StudentId);

// List<Person> personList = new List<Person>()
// {
//     personOne,
//     personTwo,
//     personThree
// };
// foreach(Person p in personList)
// {
//     Console.WriteLine(p.FullName());
// }


List<Student> studentList = new List<Student>();
studentList.Add(studentOne);
studentList.Add(studentTwo);
studentList.Add(studentThree);

Lecture myLecture = new Lecture("C#: OOP", 4, personOne, studentList);
myLecture.PrintAttendance();