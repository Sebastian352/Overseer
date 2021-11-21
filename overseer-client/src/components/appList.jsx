import { Button } from "@mui/material";
import { Component } from "react";
import { send_data, get_data } from "../service/overseerService";
import { AppCard } from "./appCard";

export class AppList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            installedApps: ["firefox", "chrome", "thunderbird", "steam", "skype"],
            monitoredApps: ["firefox", "chrome", "thunderbird", "steam", "skype"],
            vulnerable: [],
        };
    }

    isMonitored = (appName) => {
        return this.state.installedApps.includes(appName);
    }

    isInstalled = (appName) => {
        return this.state.installedApps.includes(appName);
    }

    isVulnerable = (appName) => {
        return this.state.vulnerable.includes(appName);
    }

    onCardChange = (appName, monitored) => {
        if (monitored) {
            console.log("TO MONITORED")
            const newArr = this.state.monitoredApps.copyWithin(0, 0)
            newArr.push(appName)
            this.setState({
                monitoredApps: newArr
            });
        } else {

            console.log("TO NOT MONITORED")
            const newArr = this.state.monitoredApps.filter((value) => {
                return value != appName;
            });
            this.setState({
                monitoredApps: newArr
            });
        }

        console.log("New Monitored: ")
        console.log(this.state.monitoredApps)
    }

    async componentDidMount() {
        const data = await get_data();
        this.setState({
            vulnerable: data
        });

        console.log(this.state.vulnerable)
    }

    render() {
        return (
            <div>
                <Button></Button>
                {this.state.installedApps.map(name => 
                <li style={{listStyle: 'none', paddingBottom: '1em'}}>
                    <AppCard onChange={this.onCardChange} appName={name} monitored={this.isMonitored(name)} vulnerable={this.isVulnerable(name)}></AppCard>
                </li>
                )}
            </div>
        );
    }
}
