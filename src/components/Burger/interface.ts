import { Dispatch, SetStateAction } from 'react';

export interface IBurger {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
