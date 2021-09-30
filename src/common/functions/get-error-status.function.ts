import { ItemNotFoundException } from "../errors/item-not-found.error";
import { BadRequestError } from "../errors/bad-request.error";

export const getErrorStatus = (error: Error): number => {
  switch (true) {
    case error instanceof BadRequestError:
      return 400;
    case error instanceof ItemNotFoundException:
      return 404;
    default:
      return 500;
  }
};
