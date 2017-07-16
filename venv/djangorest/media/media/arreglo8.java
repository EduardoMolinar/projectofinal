/* ---------------------------------------------------------- 
	PROGRAMA EJEMPLO DE ARREGLOS
	
-------------------------------------------------------------*/
import java.io.*;

class arr
{  
  void cargar(int a[])
    { int i;
       System.out.println("\nEN LA CLASE arr ");
       
       
      System.out.println("\nIMPRIME  ARREGLO a ");
     
    	for(i=0;i< 5;i++)
        {
	 	
    	System.out.print(a[i]+"\t");
       }
     
     System.out.println("\nDEFINE Y CARGA  ARREGLO c  POR INICIALIZACION ");
     int c[]={0,1,2,3,4};
    	for(i=0;i< 5;i++)
        {
	 	
    	System.out.print(c[i]+"\t");
       }
       
       	System.out.println("\n\nTERMINAMOS LA IMPRESION DEL ARREGLO c"+"\n\n");
	}
	
	void imp(int b[])
	{  int i;
    	for(i=0;i< 3;i++)
	  System.out.println(b[i]+"\n");
		}
	
}

class arreglo7{					
public static void main(String args[])
{  int i;
   int [] a = new int[5];
   
   int b[]= {4,5,6};
   
   arr obj = new arr();
   for(i=0;i< 5;i++)
        a[i]=i;
	 	
   obj.cargar(a);
   System.out.println("VAMOS A IMPRIMIR EL ARREGLO b"+"\n\n\n");
   obj.imp(b);
               System.out.println("\n\nHASTA LUEGO \n\n");
	
        }}