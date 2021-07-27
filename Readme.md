# Examen

3. Costo y tiempo promedio

   1. Algoritmo alpha complejidad O(n^2),Beta complejidad O(n^5)

   2. - Algoritmo beta version 2.0 complejidad O(n^4) y nesecita 64 GB de ram
      - beta version 1.0 nesecita 8 GB de ram
        Solucion:
        1. Considere que cada vez que el algoritmo es activado, se debe pagar al proveedor S/0.01 por operacion realizada por el algoritmo, es decir, si fueron 100 operaciones, serıa S/1.00. "Serverless"

1. Suponga que esta a inicios del nuevo semestre y quiere optimizar su horario. Para este semestre
   se ha desconsiderado los pre-requisitos, y tambien el numero mınimo/m aximo de creditos, es decir, el
   cielo es su lımite. Considere:

   1. Cada curso tiene una cantidad de creditos entre 2 a 5. Mientras mas consiga, estara mas cerca
      de egresar. Considere una variable MINEGRESAR que sea el mınimo de creditos para egresar
      (no puede exceder este valor ademas).
   2. Cada curso tiene un horario asociado pero a usted no le importa mucho porque al ser un semestre
      online, podra ver las grabaciones cuando guste.
      Cada curso tiene mapeado un nivel de estress entre 1 al 10 que cada estudiante ha votado por el.
   3. Al escoger un curso, este adicionara un nivel de estress y usted tiene un maximo MAXESTRES.
   4. El numero de cursos tambien adiciona un estres pero usted es muy temerario y no le importa el
      numero de cursos que llevara.

   Proponga una solucion al estilo divide y conquista (1) y utilizando programacion dinamica (2)
   para encontrar la mejor eleccion de cursos
