// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
//dotnet new console -f net6.0 -o OOPIntro


Person personOne = new Person("Kurt", "Clausen");

// Console.WriteLine(personOne.FirstName);
// Console.WriteLine(personOne.LastName);
Console.WriteLine(personOne.FullName());

Student studentOne = new Student("Aaron", "Hsu", "C#", 0925);

Console.WriteLine(studentOne.FullName());
Console.WriteLine(studentOne.CurrentStack);
Console.WriteLine(studentOne.StudentId);