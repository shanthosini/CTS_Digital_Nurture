
import java.util.* ;
class Product{
    public int productId;
   public String productName;
   public int quantity;
   public double price;
 
 public Product(int productId, String productName,int quantity, double price){
this.productId=productId;
this.productName=productName;
this.quantity=quantity;
this.price=price;
 }

 public int getproductId(){
             return productId;
 }
 public void SetPrice(double price){
    this.price = price;
 }
 public void SetQuantity(int quantity){
    this.quantity = quantity;
 }
@Override // even if typo on name it can correct it
public String toString(){
    return "ID:"+productId + ", Name :"+productName+" ,Quantity"+quantity+", Price:"+price;
}
}
class Invertory{
    HashMap<Integer,Product> inventory = new HashMap<>();
    public void addProduct(Product product){
        inventory.put(product.getproductId(),product);
        System.out.println("Product added");

    }
    public void updateProduct(int id,int quantity,double  price){
             Product pd =   inventory.get(id);
             if(pd!=null){
                pd.SetQuantity(quantity);
                pd.SetPrice(price);
                System.out.println("Found and updated");
             }else{
                System.out.println("Not found");
             }
    }
    public void deleteP(int id){
        if(inventory.remove(id)!=null){
            System.out.println("Deleted");
        }else{
            System.out.println("Not found");
        }
    }
    public void displayP(){
             for(Product pd : inventory.values()){
             System.out.println(pd);
    }

}

public class InventoryManagement{
    public static void main(String[] args) {
Invertory Manager = new Invertory();
        Manager.addProduct(new Product(101,
                        "Laptop",
                        10,
                        50000));

                        Manager.addProduct( new Product(102,
                        "Mouse",
                        50,
                        500));

                        Manager.displayP();
                        Manager.updateProduct(
                                 101,
                                 51,
                                 52000);
                                 Manager.deleteP(101);
                                 Manager.displayP();

                        }
    }
}
