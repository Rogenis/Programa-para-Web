module.exports = {
 attributes: {
 id: { type: 'number', autoIncrement: true },
 jogador: { type: 'number', required: true, columnType: 'int' },
 pontuacao: { type: 'number', columnType: 'int' },
 data: { type: 'string', required: true },
 },
};
