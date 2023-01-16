import { Dispatch, SetStateAction } from 'react';

export interface IMenu {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
