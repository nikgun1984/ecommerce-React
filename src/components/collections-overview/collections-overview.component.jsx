import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

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
	collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);