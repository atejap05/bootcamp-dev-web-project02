import { sha256 } from "crypto-hash";

export const validateHash = async password => {
  const result = await sha256(password);
  return result;
};
