import { FC } from "react";
import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

const UcList: FC<any> = ({ data }: { data: string[] }) => {
  return (
    <div>
      <h1>React Component with Material UI</h1>
      <Paper elevation={3}>
        <List>
          {data.map((name: string, index: number) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={name} />
              </ListItem>
              {index !== data.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
      <div>
        <slot name="content" />
      </div>
    </div>
  );
};

export default UcList;
