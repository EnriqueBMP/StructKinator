
1. Inserción

FUNCTION insertContact(root, newContact)
    IF root is NULL
        RETURN newContact
    
    IF newContact.name < root.name
        root.left = insertContact(root.left, newContact)
    ELSE IF newContact.name > root.name
        root.right = insertContact(root.right, newContact)
    
    RETURN root
END FUNCTION

Complejidad: O(log n) promedio, O(n) peor caso

2. Búsqueda

FUNCTION searchContact(root, name)
    IF root is NULL OR root.name == name
        RETURN root
    
    IF name < root.name
        RETURN searchContact(root.left, name)
    ELSE
        RETURN searchContact(root.right, name)
END FUNCTION

Complejidad: O(log n) promedio, O(n) peor caso

3. Recorrido In-Order (Listado Ordenado)

FUNCTION listContactsInOrder(root)
    IF root is not NULL
        listContactsInOrder(root.left)
        PRINT root.contactInfo
        listContactsInOrder(root.right)
END FUNCTION

Complejidad: O(n)

Ejemplo Paso a Paso
Entrada de Datos:
javascript

const contacts = [
    { name: "Carlos", phone: "555-0101", email: "carlos@email.com" },
    { name: "Ana", phone: "555-0102", email: "ana@email.com" },
    { name: "David", phone: "555-0103", email: "david@email.com" },
    { name: "Beatriz", phone: "555-0104", email: "beatriz@email.com" }
];

Construcción del BST:

Insertar "Carlos" -> Raíz: Carlos
Insertar "Ana"   -> Carlos.left = Ana
Insertar "David" -> Carlos.right = David  
Insertar "Beatriz" -> Ana.right = Beatriz

Árbol resultante:
    Carlos
    /    \
  Ana    David
    \
    Beatriz

Operaciones:

    Búsqueda de "Beatriz":

        Comparar "Beatriz" con "Carlos" -> ir a izquierda

        Comparar "Beatriz" con "Ana" -> ir a derecha

        Encontrado en 3 comparaciones

    Listado Ordenado:

        Recorrido in-order: Ana, Beatriz, Carlos, David

    Inserción de "Elena":

        Comparar con "Carlos" -> derecha

        Comparar con "David" -> izquierda (null)

        Insertar como hijo izquierdo de David

Análisis de Escalabilidad
Caso Promedio (BST balanceado):

    100 contactos: ~7 comparaciones por búsqueda

    1,000 contactos: ~10 comparaciones por búsqueda

    1,000,000 contactos: ~20 comparaciones por búsqueda

Caso Peor (BST degenerado):

    100 contactos: 100 comparaciones (lista ligada)

    Mejora posible: Usar AVL Tree o Red-Black Tree

Conclusión

El BST demostró ser efectivo para este caso porque:

    Búsqueda eficiente para operaciones frecuentes de consulta

    Mantenimiento automático del orden alfabético

    Flexibilidad para inserciones y eliminaciones dinámicas

    Complejidad balanceada en el caso promedio

Este ejemplo ilustra cómo la elección correcta de estructura de datos impacta directamente en la eficiencia y usabilidad del sistema.


## 5. tests/decisionEngine.test.js


const { decideStructure } = require('../src/utils/decisionEngine');

describe('Decision Engine Tests', () => {
  test('should recommend GRAPH for graph relationships', () => {
    const answers = [0, 0, 0, 0, 0, 0, 1, 0]; // graph_relationships = true
    expect(decideStructure(...answers)).toBe('DS_GRAPH');
  });

  test('should recommend TRIE for prefix search', () => {
    const answers = [0, 0, 0, 0, 0, 0, 0, 1]; // prefix_search = true
    expect(decideStructure(...answers)).toBe('DS_TRIE');
  });

  test('should recommend HEAP for priority handling', () => {
    const answers = [0, 0, 0, 0, 1, 0, 0, 0]; // priority_handling = true
    expect(decideStructure(...answers)).toBe('DS_HEAP');
  });

  test('should recommend STACK for LIFO processing', () => {
    const answers = [0, 0, 1, 0, 0, 0, 0, 0]; // lifo_processing = true
    expect(decideStructure(...answers)).toBe('DS_STACK');
  });

  test('should recommend QUEUE for FIFO processing', () => {
    const answers = [0, 0, 0, 1, 0, 0, 0, 0]; // fifo_processing = true
    expect(decideStructure(...answers)).toBe('DS_QUEUE');
  });

  test('should recommend DYNAMIC ARRAY for random access + dynamic size', () => {
    const answers = [1, 0, 0, 0, 0, 1, 0, 0]; // random_access = true, dynamic_size = true
    expect(decideStructure(...answers)).toBe('DS_ARRAY_DYNAMIC');
  });

  test('should recommend LINKED LIST for middle operations + dynamic size', () => {
    const answers = [0, 1, 0, 0, 0, 1, 0, 0]; // middle_operations = true, dynamic_size = true
    expect(decideStructure(...answers)).toBe('DS_LINKED_LIST');
  });

  test('should recommend STATIC ARRAY for random access + fixed size', () => {
    const answers = [1, 0, 0, 0, 0, 0, 0, 0]; // random_access = true, dynamic_size = false
    expect(decideStructure(...answers)).toBe('DS_ARRAY_STATIC');
  });

  test('should recommend BST as default', () => {
    const answers = [0, 0, 0, 0, 0, 0, 0, 0]; // no specific requirements
    expect(decideStructure(...answers)).toBe('DS_BST');
  });
});

````
