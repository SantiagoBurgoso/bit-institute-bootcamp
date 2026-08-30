// CICLOS

// Ejemplo 1: Ciclo for (Sabemos cuantas veces se repite)
let teamMembers = ['Santiago', 'Victoria', 'Pedro', 'Maria'];
for (let i = 0; i < teamMembers.length; i++) {
    console.log('checking metrics for agent', teamMembers[i]);
}

let germanLessons = 3;
while (germanLessons > 0) {
    console.log('Completing lesson. Remaining', germanLessons);
    germanLessons = germanLessons - 1;
}
console.log('All lessons completed.');