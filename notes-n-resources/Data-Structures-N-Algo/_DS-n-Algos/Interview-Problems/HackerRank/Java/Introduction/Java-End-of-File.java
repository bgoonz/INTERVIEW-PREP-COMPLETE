import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int count = 1;
    while (scan.hasNext()) {
      System.out.print(count++);
      System.out.println(" " + scan.nextLine());
    }
  }
}
