import { Stack } from '@mui/material';

type Props = {
  children: any;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial";
  alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "inherit" | "initial";
  spacing?: number;
};

const StackCol = (props: Props) => {
  return (
    <Stack
      spacing={props.spacing || 2}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {props.children}
    </Stack>
  );
};

export default StackCol;