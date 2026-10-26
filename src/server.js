
import express from "express";

const app = express();
const porta = 3000;

app.get("/", (req, res) => {
    res.send("Sistema de Cursos Técnicos");
});

app.get("/cursos", (req, res) => {
    res.send("Lista de cursos disponíveis");
});

app.get("/professores", (req, res) => {
    res.send("Lista de professores");
});

app.get("/sobre", (req, res) => {
    res.send("Informações sobre a instituição");
});

app.get("/contato", (req, res) => {
    res.send("Contato da secretaria da escola");
});

app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(porta, () => {
    console.log("Servidor de Jonathan iniciado!");
    console.log("Acesse: http://localhost:3000");
});
