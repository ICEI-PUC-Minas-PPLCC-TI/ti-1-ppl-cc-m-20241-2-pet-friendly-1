const jsonData1 = {
    imagem: "https://i.imgur.com/mVeCHps.png",
    nome: "Clínica Veterinária",
    atendimentos: "Atendimento de segunda a sexta, das 8h às 18h."
  };
  const jsonData2 = {
    imagem: "https://i.imgur.com/2GS10cY.png",
    nome: "Banho e Tosa caẽs e gatos",
    atendimentos: "Ambiente separado para cães, gatos e filhotes"
  };
  const jsonData3 = {
    imagem: "https://i.imgur.com/IKNfz4X.png",
    nome: "Pet Shop",
    atendimentos: "Temos os mais diversos produtos e medicamentos"
  };
  
  function preencherDados(idImagem, idNome, idAtendimento, data) {
    document.getElementById(idImagem).innerHTML = `<img src="${data.imagem}" class="img-fluid" alt="Imagem">`;
    document.getElementById(idNome).innerText = data.nome;
    document.getElementById(idAtendimento).innerText = data.atendimentos;
  }
  
  preencherDados('imagem1', 'nome1', 'atendimento1', jsonData1);
  preencherDados('imagem2', 'nome2', 'atendimento2', jsonData2);
  preencherDados('imagem3', 'nome3', 'atendimento3', jsonData3);
  