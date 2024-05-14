let quartosDisponivies = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponivies > 0) ? "Reserva Confirmada"
                  : (quartosDisponivies > 0) ? "Aguardando confirmação"
                  : "Sem quatos disponível" ;

console.log(statusReserva); // Saída: "Reserva Confirmada"