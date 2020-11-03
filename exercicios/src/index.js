import React from 'react';
import ReactDOM from 'react-dom';
import {BoaTarde, BoaNoite} from './componentes/multiplos'

ReactDOM.render(
	<div>
		<BoaTarde nome='Ana'/>
    	<BoaNoite nome='Pedro'/>
	</div>
,document.getElementById('root'))