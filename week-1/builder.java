
class computer{
              private  String cpu;
               private int ram;
               private int storage;
              private boolean wifi;
           
               
               private computer(Builder b){
                this.cpu=b.cpu;
                this.ram=b.ram;
                this.storage=b.storage;
                this.wifi=b.wifi;
               }
               public static class Builder{//static nested builder class
                private  String cpu;
               private int ram;
               private int storage;
              private boolean wifi;
          
               
               public Builder setcpu(String cpu){
                this.cpu = cpu;
                return this;
               }
               public Builder setram(int ram){
                this.ram = ram;
                return this;
               }
                public Builder setstorage(int storage){
                this.storage = storage;
                return this;
               }
                public Builder setwifi(boolean  wifi){
                this.wifi = wifi;
                return this;
                }
                public computer build(){
                    return new computer(this);
                }
               }
               @Override
               public  String toString(){
                return "CPU = " + cpu +
               "\nRAM = " + ram + " GB" +
               "\nStorage = " + storage + " GB" +
               "\nWiFi = " + wifi ;
               }
}
public class builder{
    public static void main(String[] args) {
        
        computer gamingPC =
            new computer.Builder()
                .setcpu("Intel i9")
                .setram(32)
                .setstorage(1000)
                .setwifi(true)
                .build();

        computer officePC =
            new computer.Builder()
                .setcpu("Intel i5")
                .setram(8)
                .setstorage(256)
                .setwifi(true)
                .build();
  System.out.println("Gaming PC");
        System.out.println(gamingPC);

        System.out.println("\nOffice PC");
        System.out.println(officePC);
    }
}
