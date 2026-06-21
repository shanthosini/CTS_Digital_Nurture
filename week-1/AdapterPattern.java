import  java.util.*;

interface PayementProcessor{
   void processPayement (double amount);
}
class phonePay{
       public void makePayement(double amount){
        System.out.println("Payement of Rs."+ amount + "made through phonePay");
        }
}
class Gpay{
   public void sendPayement(double amount){
        System.out.println("Payement of Rs."+ amount + "made through Gpay");
    }
}
class phonePayAdapter implements PayementProcessor{
    private phonePay pay;
    public phonePayAdapter(phonePay pay){
        this.pay=pay;
    }
    @Override
    public void processPayement(double amount){
        pay.makePayement(amount);
    }
}
class GpayAdapter implements PayementProcessor{
    private Gpay send;
    public GpayAdapter(Gpay send){
        this.send=send;
    }
        @Override
        public void processPayement(double amount){
            send.sendPayement(amount);
        }
    }
class AdapterPattern{
    public static void main(String[] args) {
        PayementProcessor phonepay=new phonePayAdapter(new phonePay());
        PayementProcessor gpay=new GpayAdapter(new Gpay());

        phonepay.processPayement(40000);
        gpay.processPayement(50000);
    }
}