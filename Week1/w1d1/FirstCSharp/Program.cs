// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!!");

//dotnet new console -f net6.0 -o FirstCSharp

// let myName = "Ruben Ocasio";
// console.log(myName); //Ruben Ocasio

// string myName = "Ruben Ocasio";
// Console.WriteLine(myName);

// char myName2 = 'A';
// Console.WriteLine(myName2);

// int myNum = 7;
// double myDec = 09.25;
// float myFloat = 09.25f;
// bool isHungry = false;

//Arrays are fixed length
string[] groceryList = new string[4];
//[null, null, null, null]
// Console.WriteLine(groceryList[0]);

                        //0           1         2        3
string[] groceryList2 = {"Carrots", "Turkey", "Bread", "Milk"};
// Console.WriteLine(groceryList2[2]);

foreach(string i in groceryList2)
{
    // Console.WriteLine("What's in my grocery list: " + i);
}

groceryList2[0] = "salad";
foreach(string i in groceryList2)
{
    // Console.WriteLine("What's in my grocery list: " + i);
}

//Arrays use Length
// Console.WriteLine(groceryList.Length);

List<int> numList = new List<int>();
numList.Add(1);
numList.Add(2);
numList.Add(3);
numList.Add(4);
numList.Add(5);
numList.Add(6);
// Console.WriteLine(numList.Count);

//This removes the value of 3
numList.Remove(3);

//This removes the location index 3
numList.RemoveAt(3);

// Console.WriteLine(numList);

foreach(int i in numList)
{
    // Console.WriteLine("What's in my numList: " + i);
}

// const sayHello2 = (a, b) => {}
//Function

static void SayHello()
{
    // Console.WriteLine("Hello, how are you doing today?");
}
SayHello();

static int Calculate(int x, int y)
{
    return x - y;
}
Console.WriteLine(Calculate(50, 30));

int thiscanbeanything =  Calculate(4000, 2823);
Console.WriteLine("This is the real estate adjusment for the court case #500.45151.ver: " + thiscanbeanything);