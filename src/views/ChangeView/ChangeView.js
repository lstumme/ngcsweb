import React, { Component } from 'react';

class ChangeView extends Component {
    render() {
        return (
            <div>
                <h2 className='title-border'>Derniers Ajouts</h2>
                <p>Cette page permet de connaître les derniers ajouts faits sur ce site</p>
                <ul>
                    <li><i>13/11/2020 :</i>
                        <ul>
                            <li>Publication du site</li>
                            <li>Ajout de cette page de suivi</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ChangeView;