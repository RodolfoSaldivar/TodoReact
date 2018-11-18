import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const Tarjeta = (props) => (
	<div className="row">
		<div className="col s4">
			<Card
				header={
					<CardTitle
						reveal
						image={"https://www.queanimal.com/wp-content/uploads/2018/04/como-nacen-los-gatos.jpg"}
						waves='light'
					/>
				}
				title="Mis Gatos"
				reveal={
					<p>
						Here is some more information about this product that is only revealed once clicked on.
						hfoeirngoeufbheotnheotvbhetiongeotvbeo
						wfonwuvcbwiuvbierbviewybvi3u
						vrwvihbwrviwrbiv
					</p>
				}
			>
				<p>
					Estos son mis gatos que son bebes y estan bie cidos.
				</p>
			</Card>
		</div>
	</div>
);

export default Tarjeta;