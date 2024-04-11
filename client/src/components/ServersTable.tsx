import Refresh from "../assets/refresh.svg?react";
import Search from "../assets/search.svg?react";

function ServersTable() {
    return (
        <div className="servers-table-wrapper center">
            <h2 className="servers-title">Avalible Rooms</h2>
            <div className="search-wrapper small-top-margin">
                <div className="search-input-container">
                    <input className="center" type="text" maxLength={20} placeholder="Search for a room"></input>
                    <button className="search-btn"><Search className="search-icon" /></button>
                </div>
                <button className="refresh-btn"><Refresh className="refresh-icon" /></button>
            </div>
            <table className="servers-table small-top-margin">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Players</th>
                        <th>Private</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alpha</td>
                        <td>0 / 0</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Beta</td>
                        <td>0 / 0</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>0 / 0</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Delta</td>
                        <td>0 / 0</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Epsilon</td>
                        <td>0 / 0</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <div className="server-table-buttons small-top-margin">
                <button className="green-button">Create</button>
                <button className="green-button">Join</button>
            </div>
        </div>
    );
}

export default ServersTable

//LOOK AT TRELLO