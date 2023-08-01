public class Person
{
    //Access modifier / datatype  / anyname you want (FirstName)
    public string FirstName;
    public string LastName;

    public Person() {}

    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }

    public string FullName()
    {
        return $"{FirstName} {LastName}";
    }


}