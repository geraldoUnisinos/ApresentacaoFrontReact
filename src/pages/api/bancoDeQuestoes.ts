import QuestaoModel from "model/questao";
import RespostaModel from "model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual o bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e no Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abobara'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilatero'),
        RespostaModel.errada('Isoceles'),
        RespostaModel.errada('Trapezio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Castro Alvez'),
        RespostaModel.certa('Dom Pedro I'),
    ])
]

export default questoes