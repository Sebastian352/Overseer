import { ListItemButton, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Button } from "@mui/material";
import { Component } from "react";


// Can recieve appName as props.
// Also can recieve true if it's monitored.
export class AppCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            appName: props.appName,
            monitored: props.monitored,
            vulnerable: props.vulnerable,
            onChange: props.onChange,
        };
    }

    handleClick = () => {
        console.log("Clicked!");
        var newMonitored = !this.state.monitored;
        this.state.onChange(this.state.appName, newMonitored)
        this.setState({
            monitored: newMonitored,
        });
    }

    // Display the Card when the app is in a monitored state.
    displayMonitored = () => {
        return (
            <ListItem alignItems="flex-start" key={this.state.appName}>
            <ListItemAvatar>
              <Avatar alt={this.state.appName}/>
            </ListItemAvatar>
            <ListItemText
              primary={this.state.appName}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  Monitored
                  </Typography>
                  {""}
                </>
              }
            />
            <ListItemButton onClick={this.handleClick}>Toggle Monitoring</ListItemButton>
          </ListItem>
        )
    }

    displayNotMonitored = () => {
        return (
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={this.state.appName}/>
            </ListItemAvatar>
            <ListItemText
              primary={this.state.appName}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  Not Monitored
                  </Typography>
                  {""}
                </>
              }
            />
            <ListItemButton onClick={this.handleClick}>Toggle Monitoring</ListItemButton>
          </ListItem>
        )
    }

    displayVulnerable = () => {
        return (
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={this.state.appName}/>
            </ListItemAvatar>
            <ListItemText
              primary={this.state.appName}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  Vulnerable
                  </Typography>
                  {""}
                </>
              }
            />
            <ListItemButton onClick={this.handleClick}>Toggle Monitoring</ListItemButton>
          </ListItem>
        )
    }

    render() {
        const monitored = this.state.monitored;
        const vulnerable = this.state.vulnerable;
        return (
            monitored ? (vulnerable ? this.displayVulnerable() : this.displayMonitored()) : this.displayNotMonitored()
        );
    }
}
