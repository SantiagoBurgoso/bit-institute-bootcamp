# Investigacion: Fundamentos de JavaScript

En este repositorio se encuentran los conveptos fundamentales de JavaScript.

**Nota:** Los ejemplos ejecutables se encuentran dentro de la carpeta '/js' de este repositorio.

## 1. Operadores de comparacion:
* **Deficnicion:** Simbolos que evaluan los valores y devuelven un resultado booleano es decir ('true' o 'false').
* **Sintaxis** 'valor1 [operador] valor2'

| Operador | Nombre | Funcion |
| '==' | Igualdad | Compara si los valores son iguales (sin importar el tipo). |
| '===' | Igualdad escrita | Compara si valores y tipos de dato son iguales. |
| '!=' | Desigualdad | Compara si los valores son diferentes. |
| '!==' | Desigualdad estricta | Compara si valores o tipos son diferentes. |
| '>' / '<' | Mayor / Menor que | Verifica si el primer valor es mayor o menor. |
| '>=' / '<=' | Mayor o igual | Verifica si es mayor/menor o exactamente igual. |

## 2. Operadores Logicos
* **Definicion:** Permiten combinar dos o mas condiciones para tomar decisiones mas complejas.
* **'&&' (AND):** Todas las condiciones deben ser verdaderas para devolver 'true'.
* **'||' (OR):** Con que una sola condicion sea verdadera, devuelve 'true'.
* **'!' (NOT):** Invierte el valor booleano.

# 3. Condicionales
* **Definicion:** Estructuras que permiten el codigo tomar diferentes caminos segun se cumplan o no ciertas condiciones.
* **'if':** Efecuta el bloque si la condicion es verdadera.
* **else if:'** Evalua una nueva condicion si la interior fue falsa.
* **'else':** Ejecuta un bloque por defecto si ninguna condicion anterior se cumplio.

# 4. Arrays (Arreglos)
* **Definicion:** Una estructur aque permite almacenar una lisa de multiples valores en una sola variable.
* **Creacion:** Se definen encerrando los elementos entre corchetes '[]' separados por comas.
* **Acceso:** Se accede a ellos mediante su indice numerico, el cual comienza siempre en '0'.
* **Metodos basicos:**
  * '.push()': Agrega un elemento al final.
  * '.pop()': Elimina el ultimo elemento.
  * '.lenght': Devuelve la cantidad de elementos array.

# 5. Ciclos
* **Definicion:** Estructuras que repiten un bloque de codigo automaticamente.
* **'for':** Se utiliza cuando sebamos de antemano exactamente cuantas iteraciones se deben realizar.
* **'white':** Se utiliza cuando la acciones debe repetirse de forma continua *mientras* una condicion especifica se mantenga verdadera.