package example;

public class HelloWorld {

  public void coveredByUnitTest() {
    System.out.println("coveredByUnitTest1");
    System.out.println("coveredByUnitTest2");
    System.out.println("Covered in Develop branch");
  }

  public void coveredByIntegrationTest() {
    System.out.println("coveredByIntegrationTest1");
    System.out.println("coveredByIntegrationTest2");
    System.out.println("coveredByIntegrationTest3");
    System.out.println("Also covered in Develop branch");
  }

  public void notCovered() {
    System.out.println("notCovered");
  }

}
