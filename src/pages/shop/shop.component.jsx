import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

export default class ShopPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collections: SHOP_DATA
		}
	}

	render(){
		const {collections} = this.state;
		return (
			<div className="shop-page">
				{collections.map(({id, ...restProps})=>(
					<PreviewCollection key={id} {...restProps}/>
				))}
			</div>
		)
	}
}