import { useState } from 'react'

const cardapio = [
    { id: 1, nome:"Combo-01", preco: 25.00, disponivel:false, quantidade: 0 },
    { id: 2, nome: "Combo-02", preco: 35.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 45.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 55.00, disponivel: true, quantidade: 0 },
]

const Pedido = () => {
    // HOOK - useState - Manipula o estado da variavel 
    // Estados para gerenciar a lista de itens do cardapio 

    const [items,setItems]=useState(cardapio);
    const [items, setStatus] = useState("");
    const [items, setEnviar] = useState(false);

    // Valor fixo adicionado ao total quando tiver no carrinho 
    const taxaEntrega=5.00;

    // Função que altera a quantidade do pedido
    const AlterarQuantidade=(id,valor)=>{
        setItems(alt=>
            // MAP - cria um novo array e percorre os itens sem modificar o original (imutabilida
            // TERNÁRIO - verfica se o item de iteração atual é o que deve ser alterado
            // SPREAD (...item) - mantem os valores antigos e adiciona os novos
            // Math.max - objeto que garante que a quantidade nunca sera maior que 0
            alt.map(item=>
                item.id === 0 ? {...item,quantidade:Math.max(0,item.quantidade + valor)}:item
            )
        )
    }

    // FILTER - seleciona apenas os produtos disponíveis no carrinho
    const produtosDisponiveis = items.filter(item=>item.disponivel);
    const carrinho = items.filter(item=>item.quantidade > 0);

    // REDUCE - calcula a soma dos itens (preço * quantidade) e adiciona taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=>ac + item.preco * item.quantidade,0);
    const total = subTotal > 0 ? subTotal + taxaEntrega : 0;

    // SIMULAÇÃO DO CICLO DE VIDA DA ENTREGA USANDO TEMPORIZADOR ASSÍNCRONO
    const ConfirmarPedido=()=>{
        setEnviar(true)
        setStatus("Restaurante confirmou seu pagamento, preparando seu pedido")
        setTimeout(()=>{
            setStatus("Seu pedido saiu para entrega")
            setEnviar(false)
        },5000) // 5 segundos
        setTimeout(()=>{
            setStatus("Seu pedido foi entregue com sucesso")
        },10000) // 10 segundos
    }

  return (
    <>
      
    </>
  )
}

export default Pedido
