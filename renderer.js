// Constantes para estructuras de datos
const DS_ARRAY_STATIC  = 1;
const DS_ARRAY_DYNAMIC = 2;
const DS_LINKED_LIST   = 3;
const DS_STACK         = 4;
const DS_QUEUE         = 5;
const DS_BST           = 6;
const DS_HEAP          = 7;
const DS_GRAPH         = 8;
const DS_TRIE          = 9;

// Preguntas en orden
const questions = [
    "¿Necesitas acceso rápido por índice?",
    "¿Realizarás muchas inserciones en medio de la estructura?",
    "¿Procesas datos en orden LIFO (Último en Entrar, Primero en Salir)?",
    "¿Procesas datos en orden FIFO (Primero en Entrar, Primero en Salir)?",
    "¿La prioridad de los elementos es importante?",
    "¿El tamaño de la estructura cambia frecuentemente?",
    "¿Tus datos representan relaciones tipo grafo?",
    "¿Necesitas búsqueda por prefijo?"
];

// Estado de la aplicación
let currentQuestion = 0;
let answers = [];

// Elementos DOM
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question-text');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const restartBtn = document.getElementById('restart-btn');

// Elementos de resultados
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultStructureImage = document.getElementById('result-structure-image');
const resultDiagram = document.getElementById('result-diagram');
const resultDetails = document.getElementById('result-details');

// Event Listeners
startBtn.addEventListener('click', startQuestionnaire);
yesBtn.addEventListener('click', () => answerQuestion(true));
noBtn.addEventListener('click', () => answerQuestion(false));
restartBtn.addEventListener('click', restartQuestionnaire);

function startQuestionnaire() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    questionText.textContent = questions[currentQuestion];
    updateProgress();
}

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${currentQuestion + 1}/${questions.length}`;
}

function answerQuestion(answer) {
    answers.push(answer ? 1 : 0);
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function decideStructure() {
    const [
        needRandomAccess,
        manyMiddleInserts,
        lifoProcessing,
        fifoProcessing,
        needPriority,
        dynamicSize,
        graphRelationships,
        prefixSearch
    ] = answers;

    if (graphRelationships) return DS_GRAPH;
    if (prefixSearch) return DS_TRIE;
    if (needPriority) return DS_HEAP;
    if (lifoProcessing) return DS_STACK;
    if (fifoProcessing) return DS_QUEUE;
    if (needRandomAccess && dynamicSize && !manyMiddleInserts) return DS_ARRAY_DYNAMIC;
    if (manyMiddleInserts && dynamicSize) return DS_LINKED_LIST;
    if (!dynamicSize && needRandomAccess) return DS_ARRAY_STATIC;
    return DS_BST;
}

function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const chosenStructure = decideStructure();
    displayStructureInfo(chosenStructure);
}

function displayStructureInfo(dsId) {
    switch (dsId) {
        case DS_ARRAY_STATIC:
            resultTitle.textContent = "ARREGLO ESTÁTICO";
            resultDescription.textContent = "Acceso rápido por índice y tamaño fijo.";
            resultStructureImage.src = "assets/array-static.png";
            resultDiagram.textContent = "[0] [1] [2] [3] [4]";
            resultDetails.innerHTML = `<pre>function get(A,i) -> A[i]
function set(A,i,x) -> A[i] = x

Características:
• Acceso O(1) por índice
• Tamaño fijo
• Memoria contigua
• Ideal cuando el tamaño es conocido</pre>`;
            break;

        case DS_ARRAY_DYNAMIC:
            resultTitle.textContent = "ARREGLO DINÁMICO";
            resultDescription.textContent = "Crece según necesidad y permite acceso directo.";
            resultStructureImage.src = "assets/array-dynamic.png";
            resultDiagram.textContent = "ptr → [0] [1] [2] ... [cap-1]";
            resultDetails.innerHTML = `<pre>pushBack(x) si cap==n → redimensionar

Características:
• Acceso O(1) por índice
• Tamaño dinámico
• Redimensionamiento automático
• Buen balance entre acceso y flexibilidad</pre>`;
            break;

        case DS_LINKED_LIST:
            resultTitle.textContent = "LISTA LIGADA";
            resultDescription.textContent = "Inserciones y eliminaciones frecuentes en medio.";
            resultStructureImage.src = "assets/linked-list.png";
            resultDiagram.textContent = "head → [dato|*] → [dato|*] → NULL";
            resultDetails.innerHTML = `<pre>insertAfter(p,x) en O(1)

Características:
• Inserción/eliminación O(1) en posiciones conocidas
• Tamaño dinámico
• Acceso secuencial O(n)
• Sin redimensionamiento costoso</pre>`;
            break;

        case DS_STACK:
            resultTitle.textContent = "PILA (STACK)";
            resultDescription.textContent = "Procesamiento LIFO (Último en Entrar, Primero en Salir).";
            resultStructureImage.src = "assets/stack.png";
            resultDiagram.textContent = `   top
[ x3 ]
[ x2 ]
[ x1 ]`;
            resultDetails.innerHTML = `<pre>push(x) - añadir elemento
pop() - quitar último elemento
peek() - ver último elemento

Características:
• Operaciones O(1)
• Útil para backtracking
• Gestión de llamadas de función
• Reversión de operaciones</pre>`;
            break;

        case DS_QUEUE:
            resultTitle.textContent = "COLA (QUEUE)";
            resultDescription.textContent = "Procesamiento FIFO (Primero en Entrar, Primero en Salir).";
            resultStructureImage.src = "assets/queue.png";
            resultDiagram.textContent = "front → [ a1 ][ a2 ] ← rear";
            resultDetails.innerHTML = `<pre>enqueue(x) - añadir al final
dequeue() - quitar del frente

Características:
• Operaciones O(1)
• Útil para procesamiento en orden
• Gestión de tareas
• Búsqueda en amplitud (BFS)</pre>`;
            break;

        case DS_BST:
            resultTitle.textContent = "ÁRBOL BINARIO DE BÚSQUEDA (BST)";
            resultDescription.textContent = "Datos ordenados y búsqueda eficiente.";
            resultStructureImage.src = "assets/bst.png";
            resultDiagram.textContent = `    (8)
   /   \\
 (3)   (10)`;
            resultDetails.innerHTML = `<pre>search(x) - O(log n) en promedio
insert(x) - O(log n) en promedio

Características:
• Elementos ordenados
• Búsqueda eficiente
• Inserción/eliminación manteniendo orden
• Recorridos in-order, pre-order, post-order</pre>`;
            break;

        case DS_HEAP:
            resultTitle.textContent = "HEAP / COLA DE PRIORIDAD";
            resultDescription.textContent = "Extraer siempre el máximo/mínimo rápidamente.";
            resultStructureImage.src = "assets/heap.png";
            resultDiagram.textContent = `índice: 0 1 2 3
valor: 50 30 40 10`;
            resultDetails.innerHTML = `<pre>insert(x) - O(log n)
extractMax() - O(log n)

Características:
• Acceso rápido al máximo/mínimo
• Útil para scheduling
• Algoritmos como Dijkstra
• Implementación eficiente de colas de prioridad</pre>`;
            break;

        case DS_GRAPH:
            resultTitle.textContent = "GRAFO";
            resultDescription.textContent = "Relaciones tipo red entre elementos.";
            resultStructureImage.src = "assets/graph.png";
            resultDiagram.textContent = `A: B, C
B: A, D`;
            resultDetails.innerHTML = `<pre>Representaciones:
• Matriz de adyacencia
• Lista de adyacencia

Características:
• Modela relaciones complejas
• Algoritmos: BFS, DFS, Dijkstra
• Útil para redes sociales, mapas
• Detección de ciclos, caminos</pre>`;
            break;

        case DS_TRIE:
            resultTitle.textContent = "TRIE";
            resultDescription.textContent = "Búsqueda eficiente por prefijo.";
            resultStructureImage.src = "assets/trie.png";
            resultDiagram.textContent = "(root) - t - o - p";
            resultDetails.innerHTML = `<pre>insert(word) - O(m) donde m = longitud
search(prefix) - O(m)

Características:
• Búsqueda por prefijo eficiente
• Autocompletado
• Diccionarios
• Ordenamiento lexicográfico</pre>`;
            break;

        default:
            resultTitle.textContent = "NO HAY COINCIDENCIAS CLARAS";
            resultDescription.textContent = "Revisa tus requisitos o considera una estructura personalizada.";
            resultStructureImage.src = "assets/cat.png";
            resultDiagram.textContent = "";
            resultDetails.textContent = "Intenta con diferentes combinaciones de respuestas.";
    }
}

function restartQuestionnaire() {
    currentQuestion = 0;
    answers = [];
    
    // Restaurar la imagen del gato
    resultStructureImage.src = "assets/cat.png";
    
    // Volver a la pantalla de inicio
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Manejar imágenes faltantes
resultStructureImage.onerror = function() {
    this.src = "assets/cat.png";
    this.alt = "Imagen no disponible - Gato Structkinator";
};