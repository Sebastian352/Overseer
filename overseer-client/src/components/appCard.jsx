import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
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
            lastMonitored: null,
        };
    }

    handleClick = () => {
        console.log("Clicked!");
        var newMonitored = !this.state.monitored;
        if (newMonitored != this.state.lastMonitored) {
            this.state.onChange(this.state.appName, newMonitored)
            this.setState({
                monitored: newMonitored,
                lastMonitored: !newMonitored,
            });
        }
    }

    // Display the Card when the app is in a monitored state.
    displayMonitored = () => {
        return (
            <Card>
                <CardContent>
                    <Typography sx={{fontSize:18}}>{this.state.appName}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button size='small' onClick={this.handleClick}>Toggle Monitoring</Button>
                </CardActions>
            </Card>
        )
    }

    displayNotMonitored = () => {
        return (
            <Card style={{backgroundColor: "gray"}}>
                <CardContent>
                    <Typography sx={{fontSize:18}}>{this.state.appName}</Typography>
                </CardContent>
                <CardActions onClick={this.handleClick} disableSpacing>
                    <Button size='small' onClick={this.handleClick}>Toggle Monitoring</Button>
                </CardActions>
            </Card>
        )
    }

    displayVulnerable = () => {
        return (
            <Card style={{backgroundColor: "red"}}>
                <CardContent>
                    <Typography sx={{fontSize:18}}>{this.state.appName}</Typography>
                </CardContent>
                <CardActions onClick={this.handleClick} disableSpacing>
                    <Button size='small' onClick={this.handleClick}>Toggle Monitoring</Button>
                </CardActions>
            </Card>
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
