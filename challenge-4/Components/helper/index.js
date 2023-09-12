import { STATUS } from "../data/data";

export const renderColor = (status) => {
    switch (status) {
      case STATUS.CORRECT:
        return 'green';
      case STATUS.NOT_ENTIRELY_CORRECT:
        return 'yellow';
      case STATUS.INCORRECT:
        return 'grey';
      default:
        return 'transparent';
    }
  };