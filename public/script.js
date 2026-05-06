const catalogo = [
    item1 = {
        id: 40028922,
        titulo: "The Amazing Digital Circus: The Final Act",
        tipo: "Filme",
        ano: 2026,
        generos: ["Terror psicologíco", "humor negro", "animação"],
        nota: 8.2,
        assistido: false,
    },

    item2 = {
        id: 40028923,
        titulo: "smallvile",
        tipo: "Serie",
        ano: 2001,
        generos: ["humor", "ficção", "ação"],
        nota: 8.7,
        assistido: false ,
    },

    item3 = {
        id: 40028924,
        titulo: "O Diabo Veste Prada 2",
        tipo: "Filme",
        ano: 2026,
        generos: ["comédia", "drama"],
        nota: 7.5,
        assistido: true,
    },

    item4 = {
        id: 40028925,
        titulo: "Bridgerton",
        tipo: "Série",
        ano: 2020,
        generos: ["Drama romântico", "ficcção histórica"],
        nota: 7.4,
        assistido: false,
    },

    item5 = {
        id: 40028926,
        titulo: "Fallout",
        tipo: "Série",
        ano: 2024,
        generos: ["Ficção científica", "ação", "drama pós-apocalíptico"],
        nota: 8.6,
        assistido: true,
    },

    item6 = {
        id: 40028927,
        titulo: "Iron Lung",
        tipo: "Filme",
        ano: 2025,
        generos: ["Terror", "ficção científica"],
        nota: 7.8,
        assistido: false,
    },   
]

console.log("Lista de títulos:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);});

    const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Quantidade de não assistidos:", naoAssistidos.length);

const destaque = catalogo.find(item => item.nota >= 9);
if (destaque) {
    console.log(`Destaque: ${destaque.titulo} - Nota: ${destaque.nota}`);
} else {
    console.log("Nenhum item com nota >= 9 encontrado.");
}

const mediaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;
const mediaAssistidos = catalogo
    .filter(item => item.assistido)
    .reduce((acc, item) => acc + item.nota, 0);
const mediaFinal = catalogo.filter(item => item.assistido).length > 0
    ? mediaAssistidos / catalogo.filter(item => item.assistido).length
    : 0;

console.log("Média geral das notas:", mediaNotas.toFixed(2));
console.log("Média das notas dos assistidos:", mediaFinal.toFixed(2));

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);
console.log("Existe item com ano inferior a 2000?", temAntigo);
console.log("Todos os itens têm pelo menos 1 gênero?", todosTemGenero);

const outputDiv = document.getElementById("output");

const totalFilmes = catalogo.filter(item => item.tipo === "Filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "Série").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3)
    .map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`)
    .join("");

outputDiv.innerHTML = `
    <h3>Resumo do Catálogo</h3>
    <p><strong>Total de itens:</strong> ${catalogo.length}</p>
    <p><strong>Filmes:</strong> ${totalFilmes} | <strong>Séries:</strong> ${totalSeries}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral de notas:</strong> ${mediaNotas.toFixed(2)}</p>
    <h4>Top 3 Notas</h4>
    <ol>${ranking}</ol>
`;