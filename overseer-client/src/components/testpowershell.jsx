import { Component, React} from "react";
import { ListItemText, Button, List,ListItem,Divider,ListItemAvatar,Avatar,Typography,ThemeProvider, useTheme, createTheme } from "@mui/material";

export class TestPS extends Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){

    }
    render(){
        return (
            <div>
                <darkTheme/>
                <AlignItemsList/>
            </div>

        );
    }
}  

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
function AlignItemsList() {
    return (
      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Chrome"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                Vulnerability: Lorem Ipsum
                </Typography>
                {""}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Steam"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                Vulnerability: Lorem Ipsum
                </Typography>
                {""}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Discord"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                Vulnerability: Lorem Ipsum
                </Typography>
                {''}
              </>
            }
          />
        </ListItem>
      </List>
    );
  }
  