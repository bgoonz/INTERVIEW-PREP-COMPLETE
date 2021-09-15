import java.util.*;

public class Main {

  public static void main(String args[]) {
    Scanner input = new Scanner(System.in);
    ArrayStack stack = new ArrayStack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(4);
    stack.push(4);
    stack.pop();
    stack.printStack();
  }
}
