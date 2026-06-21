
interface Notifier{
    void send(String message);
}
class emailNotifier implements Notifier{
    @Override
    public void send(String message){
        System.out.println("Email Notification :" + message);
    }
}
abstract class NotifierDecorator implements Notifier{
    protected Notifier notify;
    public NotifierDecorator(Notifier notify){
        this.notify=notify;

    }
}
class SMSNotifierDecorator extends NotifierDecorator{
    public SMSNotifierDecorator(Notifier notify){
        super(notify);
    }
    @Override
    public void send(String message){
        notify.send(message);
    System.out.println("SMS Notification :"+ message);

}
}
class decorator{
    public static void main(String[] args) {
        Notifier notify=new SMSNotifierDecorator(new emailNotifier());
        notify.send("Order placed successfully");

        
    }
}