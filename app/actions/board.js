export const CHECK_NUMBER = 'CHECK_NUMBER';
export const UNCHECK_NUMBER = 'UNCHECK_NUMBER';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const UNDO = 'UNDO';

export function checkNumber(num) {
  return {
    type: CHECK_NUMBER,
    num
  };
}

export function uncheckNumber(num) {
  return {
    type: UNCHECK_NUMBER,
    num
  };
}

export function clearBoard() {
  return {
    type: CLEAR_BOARD
  };
}

export function undo() {
  return {
    type: UNDO
  };
}
