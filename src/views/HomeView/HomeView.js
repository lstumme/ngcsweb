import React, {Component} from 'react';

class HomeView extends Component {
    render() {
        return(
            <div>
                <h2 className='title-border'>Page d'accueil</h2>
                <p>
                    Ceci est la page d'accueil du futur site de Gestion des outils, des modèles et 
                    des données de simulation.
                </p>
                <p>
                    Il s'agit avant tout d'un site expérimental. <br/>
                    Libre à vous d'essayer les fonctionnalités qui seront implémentées au fur et à mesure.
                </p>
                <br/>
                <h3 className="title-border">Avertissement</h3>
                <p>
                    Ce site est hébergé directement sur des serveurs libres sur Internet.<br/>
                    Aussi, merci de ne pas rentrer de données métiers qui seraient suceptibles de pouvoir 
                    être exploitées par d'autres ...
                </p>
            </div>
        );
    }
};

export default HomeView;