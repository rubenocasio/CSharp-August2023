public class Student : Person
{
    public string CurrentStack;
    public int StudentId;

    public Student(string firstName, string lastName, string currentStack, int studentId) : base(firstName, lastName)
    {
        CurrentStack = currentStack;
        StudentId = studentId;
    }

}