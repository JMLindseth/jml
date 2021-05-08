const extensionFunction = `
data class Foo(
  val bar: String,
)

fun Foo.doStuff() {
    println("I print $bar")
}

val myFoo = Foo("Hello World!")

myFoo.doStuff() // => "I print Hello World"
`;

const higherOrder = `
fun foo(stringParam: String, methodParam: () -> Unit) {
  println("I got $stringParam")

  methodParam();
}

fun main() {
  val myString = "Test"

  foo(myString) {
    println("This is printed last");
  }
}

main()  // => I got Test
        // => This is printed last
  `;

const infixMethod = `
infix fun Int.plus(y: Int): Int {
    return this + y
}

infix fun String.isLongerThan(other: String): Boolean {
    return this.length > other.length
}

fun main() {
    val sum1 = 1.plus(2)
    val sum2 = 1 plus 2
    val sum3 = 2 plus 1
    
    println(sum1 == sum2) // => true
    println(sum1 == sum3) // => true

    val shortString = "abc"
    val longString = "123456789"

    println(shortString.isLongerThan(longString)) // => false
    println(longString isLongerThan shortString) // => true
}
`;

const backtickMethodName = `
@Test
fun \`legal function name\`() {
    println("This should only be used in tests")
}

@Test
fun \`other characters are also allowed * ~ @ £\`() {
    println("Backtick functions don't work on android")
}

fun main() {
    \`legal method name\`() // => This should only be used in tests
    \`other characters are also allowed * ~ @ £\`() // => Doesn't work on android
}
`;

const trailingComma = `
// These are ecnouraged by the Kotlin coding conventions
// https://kotlinlang.org/docs/coding-conventions.html#trailing-commas
class Person(
    val firstName: String,
    val lastName: String,
    val age: Int, // trailing comma
)
`;

const codeSnippets = {
  extensionFunction,
  higherOrder,
  infixMethod,
  backtickMethodName,
  trailingComma,
};

export default codeSnippets;
