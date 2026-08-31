// OPERADORES LOGICOS

// Ejemplo 1: Uso de AND (&&) - Todo debe cumplirse
let campaign ='Shopify';
let role = 'Team Leader';
let hasAdminAccess = (campaign === 'Shopify') && (role === 'Team Leader');
console.log('Does the user have admin access?:', hasAdminAccess);

// Ejemplo 2: Uso de OR (||)
let knowsHTML = true;
let knowsBootstrap = false;
let canBuildLayout = knowsHTML || knowsBootstrap;
console.log('Can the user build a layout?:', canBuildLayout);