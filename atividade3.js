class SistemaSeguranca {
    constructor() {
      if (SistemaSeguranca.instance == null) {
        SistemaSeguranca.instance = this;
      }
      return SistemaSeguranca.instance;
    }
  
    acessarBaseSecreta(senha) {
      if (senha === "senha123") {
        return "Acesso concedido";
      } else {
        return "Acesso negado";
      }
    }
  }
  
  const sistemaSeguranca = new SistemaSeguranca();
  console.log(sistemaSeguranca.acessarBaseSecreta("senha123"));
  console.log(sistemaSeguranca.acessarBaseSecreta("senha456"));



