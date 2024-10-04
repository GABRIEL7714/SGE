import { events, users } from '../mockdb/mockdb.js';

//Genero recibo del evento
const createInvoice = async () => {
  const message = 'Se ha enviado el comprobante electronico a su correo';
  return message;
};

const findUser = async (userId) => {
  return users.find((user) => user.id === userId);
};
const findEvent = async (eventId) => {
  //Igual que userfind
};

//* Gabo de esta forma envias por parametros
export const registerToEvent = async (req, res) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;

  const user = await findUser(userId);
  console.log(user);

  await createInvoice();
  const message = 'Usted ha sigo registrado para el evento';
  return res.json(message);
};
