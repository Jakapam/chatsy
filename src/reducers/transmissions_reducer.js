import openSocket from "socket.io-client";

export default (
  state = {
    loading: false,
    currentLanguage: "en",
    messages: {
      incoming: [],
      outgoing: [],
      system: []
    },
    socket: null
  },
  action
) => {
  switch (action.type) {
    case "CREATE_SOCKET":
      const socket = openSocket(`https://192.168.2.40:3000`);
      return { ...state, socket: socket };
    case "CONSUME_INCOMING_BULK_MSGS":
      return {
        ...state,
        messages: {
          ...state.messages,
          incoming: [...state.messages.incoming, ...action.payload]
        }
      };
    case "CONSUME_OUTGOING_BULK_MSGS":
      return {
        ...state,
        messages: {
          ...state.messages,
          outgoing: [...state.messages.outgoing, ...action.payload]
        }
      };
    case "RETRIEVE_MSGS":
      return {
        ...state,
        messages: {
          ...state.messages,
          outgoing: [...state.messages.incoming, ...action.payload]
        }
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: {
          ...state.messages,
          outgoing: [...state.messages.outgoing, action.payload]
        }
      };
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        messages: {
          ...state.messages,
          incoming: [...state.messages.incoming, action.payload]
        }
      };
    case "SYSTEM_MESSAGE":
      return {
        ...state,
        messages: {
          ...state.messages,
          system: [...state.messages.system, action.payload]
        }
      };
    default:
      return state;
  }
};
