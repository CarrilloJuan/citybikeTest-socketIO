import { useMemo } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPath) => {
  const socket = useMemo(() => io(serverPath), [serverPath]);
  return {
    socket,
  };
};
