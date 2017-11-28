import React from 'react'
import '../src/Table.css';

class Table extends React.Component {
    toggleSidebar() {
        document.getElementById("sidebar").classList.toggle('active');
    }

    render() {
        return (
            <div className="tablePage">
                <div className="darkHeader"></div>
                <div className="darkLast">
                    <div className="header">
                        <div id="sidebar">
                            <h2>MENU</h2>
                            <div class="toggle-btn" onClick={this.toggleSidebar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                <li>HOME</li>
                                <li>WORK ITEMS</li>
                                <li>EDIT CLIENT</li>
                            </ul>
                        </div>
                        <p className="leftstr">Rel</p>
                        <p className="rightstr">aded</p>
                    </div>
                    <div className="footer">
                        <table className="table">
                            <div className="thead">
                                <thead className="head">
                                    <tr>
                                        <th>Action</th>
                                        <th>Created by</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Created date</th>
                                    </tr>
                                </thead>
                            </div>
                            <div className="tbody">
                                <tbody className="body">
                                    <tr>
                                        <td>Chase UP</td>
                                        <td>Test</td>
                                        <td>Amet metus pellentesque</td>
                                        <td>Cannot complete</td>
                                        <td>22 Feb, 2016</td>
                                    </tr>
                                </tbody>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;

/* <div></div> */