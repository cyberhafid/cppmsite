import React, { Component } from 'react';
import { Card } from 'primereact/card';
import './Code.css';


export default class NavPanel extends Component {


	render() {
		return (
			<div>
				<div className="row">
				<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="ERROR" className="bg-success text-white" >
							<i className="pi pi-fw pi-calendar" ></i> 	<h2>32</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="LEVEL" className="bg-info text-white" >
							<i className="pi pi-fw pi-user" ></i> 	<h2>83</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="BUFFER" className="bg-danger text-white" >
								<i className="pi pi-fw pi-users" ></i> 	<h2>140</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="LOGCOLLECTOR" className="bg-warning text-white" >
							<i className="pi pi-fw pi-users" ></i> 	<h2>637</h2>
						</Card>
					</div>
					
				</div>
		

<div>
<h3 class="mt-5">NPM</h3>
<p>Install reactstrap and peer dependencies via NPM</p>

<pre class="language-bash">
<code class="language-bash">
<span class="token function">npm</span>
 <span class="token function">install</span> 
 --save reactstrap react react-dom</code>
 </pre>
</div>

</div>
		);
	};
}