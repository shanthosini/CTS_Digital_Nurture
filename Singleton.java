
    
     class Logger{
        private static Logger Instance;
        private Logger(){
        }
            public static Logger getInstance(){
                if(Instance==null){
                    Instance = new Logger();

                }
                return Instance;
            }
            public void  log(String text){
                System.out.println("[LOG]"+text);
            }
     }
            class Singleton{
    public static void main(String[]args){
        Logger l1=Logger.getInstance();
        Logger l2=Logger.getInstance();

        l1.log("first text");
        l2.log("second text");

        if(l1==l2){
            System.out.println("same");
        }
        else{
            System.out.println("differnt");
        }


        }
    }

