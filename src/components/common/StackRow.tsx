import { Stack } from '@mui/material';

type Props = {
  children: any;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial";
  alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial";
  spacing?: number;
};

const StackRow = (props: Props) => {
  return (
    <Stack
      spacing={props.spacing || 2}
      direction="row"
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {props.children}
    </Stack>
  );
};

export default StackRow;