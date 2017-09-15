import {connect} from 'react-redux';
import {requestItems} from '../../actions/item_actions';
import {withRouter} from 'react-router-dom';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.match.params.itemId)
});

const ItemDetailContainer = withRouter(connect(mapStateToProps, null)(ItemDetail));

export default ItemDetailContainer;
