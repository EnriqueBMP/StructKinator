{
  "rules": [
    {
      "condition": "graph_relationships == true",
      "recommendation": "DS_GRAPH",
      "rationale": "Los grafos son ideales para modelar relaciones complejas entre entidades. Cuando los datos representan conexiones múltiples entre elementos (como redes sociales, mapas, dependencias), los grafos proporcionan la abstracción más natural.",
      "alternatives": ["DS_TRIE", "DS_BST"],
      "complexity_analysis": {
        "space": "O(V + E)",
        "operations": {
          "add_vertex": "O(1)",
          "add_edge": "O(1)",
          "bfs_dfs": "O(V + E)"
        }
      }
    },
    {
      "condition": "prefix_search == true",
      "recommendation": "DS_TRIE",
      "rationale": "Los tries ofrecen búsqueda por prefijo extremadamente eficiente. Para aplicaciones como autocompletado, diccionarios, o búsqueda de rutas, los tries pueden encontrar todos los elementos con un prefijo dado en tiempo lineal respecto al prefijo.",
      "alternatives": ["DS_BST", "DS_HASH_TABLE"],
      "complexity_analysis": {
        "space": "O(n * m)",
        "operations": {
          "insert": "O(m)",
          "search": "O(m)",
          "prefix_search": "O(m + k)"
        }
      }
    },
    {
      "condition": "priority_handling == true",
      "recommendation": "DS_HEAP",
      "rationale": "Los heaps (colas de prioridad) permiten extraer el elemento de mayor/menor prioridad eficientemente. Son esenciales para algoritmos de scheduling, Dijkstra, y cualquier escenario donde el orden de procesamiento depende de prioridades.",
      "alternatives": ["DS_BST", "DS_SORTED_ARRAY"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "insert": "O(log n)",
          "extract_max": "O(log n)",
          "peek": "O(1)"
        }
      }
    },
    {
      "condition": "lifo_processing == true",
      "recommendation": "DS_STACK",
      "rationale": "Las pilas implementan naturalmente el comportamiento LIFO. Son ideales para backtracking, gestión de llamadas de función, reversión de operaciones, y parsing de expresiones.",
      "alternatives": ["DS_ARRAY", "DS_LINKED_LIST"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "push": "O(1)",
          "pop": "O(1)",
          "peek": "O(1)"
        }
      }
    },
    {
      "condition": "fifo_processing == true",
      "recommendation": "DS_QUEUE",
      "rationale": "Las colas implementan el procesamiento FIFO, asegurando que los elementos se procesen en el orden de llegada. Esencial para gestión de tareas, buffers, y búsqueda en amplitud (BFS).",
      "alternatives": ["DS_LINKED_LIST", "DS_CIRCULAR_ARRAY"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "enqueue": "O(1)",
          "dequeue": "O(1)",
          "peek": "O(1)"
        }
      }
    },
    {
      "condition": "random_access == true && dynamic_size == true && middle_operations == false",
      "recommendation": "DS_ARRAY_DYNAMIC",
      "rationale": "Los arrays dinámicos combinan acceso rápido por índice con capacidad de crecimiento. Cuando se necesita acceso aleatorio frecuente pero el tamaño es variable, y no hay muchas inserciones en medio, son la opción óptima.",
      "alternatives": ["DS_ARRAY_STATIC", "DS_LINKED_LIST"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "access": "O(1)",
          "append": "O(1) amortizado",
          "insert_middle": "O(n)"
        }
      }
    },
    {
      "condition": "middle_operations == true && dynamic_size == true",
      "recommendation": "DS_LINKED_LIST",
      "rationale": "Las listas ligadas permiten inserciones y eliminaciones en cualquier posición en tiempo constante (si se tiene la referencia). Son ideales cuando el tamaño cambia frecuentemente y se realizan muchas operaciones en medio.",
      "alternatives": ["DS_ARRAY_DYNAMIC", "DS_DOUBLY_LINKED_LIST"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "insert_after": "O(1)",
          "delete_after": "O(1)",
          "access": "O(n)"
        }
      }
    },
    {
      "condition": "dynamic_size == false && random_access == true",
      "recommendation": "DS_ARRAY_STATIC",
      "rationale": "Cuando el tamaño es fijo y conocido de antemano, los arrays estáticos ofrecen el mejor rendimiento para acceso por índice y uso de memoria contigua.",
      "alternatives": ["DS_ARRAY_DYNAMIC", "DS_LINKED_LIST"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "access": "O(1)",
          "update": "O(1)",
          "search": "O(n)"
        }
      }
    },
    {
      "condition": "default",
      "recommendation": "DS_BST",
      "rationale": "Los árboles binarios de búsqueda ofrecen un buen balance para operaciones dinámicas manteniendo los datos ordenados. Cuando no hay requisitos específicos fuertes, los BSTs proporcionan flexibilidad y buen rendimiento promedio.",
      "alternatives": ["DS_HASH_TABLE", "DS_BALANCED_BST"],
      "complexity_analysis": {
        "space": "O(n)",
        "operations": {
          "insert": "O(log n) promedio",
          "search": "O(log n) promedio",
          "delete": "O(log n) promedio"
        }
      }
    }
  ],
  "version": "1.0",
  "last_updated": "2024-11-24"
}
