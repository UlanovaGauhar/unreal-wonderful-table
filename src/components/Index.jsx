import React from 'react';
import '../App.css';
import Main from './Main';

const Index = () => {
    return (
        <div>
            <table className='zigzag'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Daniel</td>
                        <td>16</td>
                        <td>14 December 2007</td>
                    </tr>
                    <tr>
                        <td>Gulsun</td>
                        <td>17</td>
                        <td>17 April 2006</td>
                    </tr>
                    <tr>
                        <td>Nuriza</td>
                        <td>15</td>
                        <td>2 January 2009</td>
                    </tr>
                    <tr>
                        <td>Goha</td>
                        <td>14</td>
                        <td>14 June 2009</td>
                    </tr>
                    <tr>
                        <td>Azirek</td>
                        <td>17</td>
                        <td>27 November 2006</td>
                    </tr>
                    <tr>
                        <td>Jay</td>
                        <td>28</td>
                        <td>13 February 1995</td>
                    </tr>
                </tbody>
            </table>
            <Main/>
        </div>
    );
};

export default Index;