public class Lecture
{
    public string Topic {get; set;}
    public int LectureNumber {get; set;}


    public Person Instructor {get; set;}

    public List<Student> Roster {get; set;}

    public Lecture(string topic, int lectureNumber, Person instructor, List<Student> roster)
    {
        Topic = topic;
        LectureNumber = lectureNumber;
        Instructor = instructor;
        Roster = roster;        
    }

    public void PrintAttendance()
    {
        Console.WriteLine("Topic: " + Topic);
        Console.WriteLine("Instructor Name: " + Instructor.FullName());

        foreach(Student student in Roster )
        {
            Console.WriteLine("Student: " + student.FullName());
        }

    }

}