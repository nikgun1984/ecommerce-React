import React from 'react';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import {selectCollections} from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({collections}) => (
	<div className="collections-overview">
		{
			collections.map(({id, ...otherCollectionsProps})=>(
				<PreviewCollection key={id} {...otherCollectionsProps}/>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);