public class ArrayStack {
  int stack[] = new int[5];
  int t = 0;

  public void push(int data) {
    if (t == 5) {
      System.out.println("Stack is full!");
    } else {
      stack[t] = data;
      t++;
    }
  }

  public int size() {
    return t;
  }

  public void printStack() {
    for (int n : stack) {
      System.out.print(n + "\t");
    }
  }

  public int pop() {
    if (isEmpty()) {
      System.out.println("Stack is Empty!");
      return 0;
    } else {
      t--;
      int popped = stack[t];
      stack[t] = 0;
      return popped;
    }
  }

  public int top() {
    return stack[t];
  }

  public boolean isEmpty() {
    if (t == 0) {
      return true;
    } else {
      return false;
    }
  }
}
