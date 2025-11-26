const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando proceso de build para Structkinator...');

// Verificar que existan los assets necesarios
const requiredAssets = [
  'assets/cat.png',
  'assets/array-static.png',
  'assets/array-dynamic.png',
  'assets/linked-list.png',
  'assets/stack.png',
  'assets/queue.png',
  'assets/bst.png',
  'assets/heap.png',
  'assets/graph.png',
  'assets/trie.png'
];

console.log('📁 Verificando assets...');
requiredAssets.forEach(asset => {
  if (!fs.existsSync(asset)) {
    console.warn(`⚠️  Advertencia: ${asset} no encontrado`);
  }
});

// Crear iconos placeholder si no existen
const iconFiles = [
  'assets/icon.png',
  'assets/icon.ico',
  'assets/icon.icns'
];

iconFiles.forEach(icon => {
  if (!fs.existsSync(icon)) {
    console.warn(`⚠️  Icono ${icon} no encontrado. Se usará el icono por defecto de Electron.`);
  }
});

try {
  console.log('🔨 Construyendo aplicación...');
  
  // Build para todas las plataformas
  execSync('npm run build-all', { stdio: 'inherit' });
  
  console.log('✅ Build completado exitosamente!');
  console.log('📦 Los ejecutables están en la carpeta "dist/"');
  
  // Mostrar archivos generados
  if (fs.existsSync('dist')) {
    const files = fs.readdirSync('dist');
    console.log('\n📋 Archivos generados:');
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const stats = fs.statSync(filePath);
      const size = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`   - ${file} (${size} MB)`);
    });
  }
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}