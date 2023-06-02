// funciona assim como nosso type de DiadaSemana, só que aqui, ao invés de strings,
// utilizamos variáveis. é util para organizar e evitar erros

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

// Também é possível atribuir valores aos nossos elementos num enum

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

var move = 'down'

if (move === ArrowKeys.DOWN) {
    
}